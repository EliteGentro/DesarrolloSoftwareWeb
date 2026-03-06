import React, { useState, useEffect } from 'react';
import { createWorkItem, updateWorkItem } from '../services/api.js';

const WorkItemFormAI = ({ workItem, onSubmitSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        code: '',
        num: '',
        description: '',
        parent_id: null
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [suggestion, setSuggestion] = useState('');

    useEffect(() => {
        if (workItem) {
            setFormData({
                code: workItem.code || '',
                num: workItem.num || '',
                description: workItem.description || '',
                parent_id: workItem.parent_id || null
            });
        }
    }, [workItem]);

    // simple "AI" suggestion logic: update when formData changes
    useEffect(() => {
        if (formData.description) {
            setSuggestion(`La descripción tiene ${formData.description.length} caracteres, considera ser más detallado.`);
        } else {
            setSuggestion('Agrega una descripción para que la IA pueda sugerir mejoras.');
        }
    }, [formData.description]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.code.trim()) {
            setError('El código del work item es obligatorio');
            return;
        }
        setSubmitting(true);
        setError(null);
        try {
            if (workItem) {
                await updateWorkItem(workItem.id, formData);
            } else {
                await createWorkItem(formData);
            }
            setFormData({ code: '', num: '', description: '', parent_id: null });
            if (onSubmitSuccess) onSubmitSuccess();
        } catch (err) {
            setError('Error al guardar el work item');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="workItem-form-ai-with-sidebar">
            <form onSubmit={handleSubmit} className="workItem-form-ai">
                {error && <div className="error">{error}</div>}
                <div className="form-group">
                    <label htmlFor="code">Código*:</label>
                    <input type="text" id="code" name="code" value={formData.code}
                        onChange={handleChange} disabled={submitting} required />
                </div>
                <div className="form-group">
                    <label htmlFor="num">Número:</label>
                    <input type="text" id="num" name="num" value={formData.num}
                        onChange={handleChange} disabled={submitting} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" id="description" name="description" value={formData.description || ''}
                        onChange={handleChange} disabled={submitting} />
                </div>
                <div className="form-group">
                    <label htmlFor="parent_id">ID del Padre:</label>
                    <input type="text" id="parent_id" name="parent_id" value={formData.parent_id || ''}
                        onChange={handleChange} disabled={submitting} />
                </div>
                <div className="form-actions">
                    <button type="submit" disabled={submitting}>
                        {submitting ? 'Guardando...' : workItem ? 'Actualizar' : 'Crear'}
                    </button>
                    {onCancel && (
                        <button type="button" onClick={onCancel} disabled={submitting}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
            
        </div>
    );
};

export default WorkItemFormAI;
