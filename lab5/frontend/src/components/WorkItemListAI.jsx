import React, { useState, useEffect } from 'react';
import { getWorkItems, deleteWorkItem } from '../services/api';
import WorkItemFormAI from './WorkItemFormAI';
import WorkItemItemAI from './WorkItemItemAI';

const WorkItemListAI = () => {
    const [workItems, setWorkItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);

    const fetchWorkItems = async () => {
        setLoading(true);
        try {
            const data = await getWorkItems();
            setWorkItems(data);
            setError(null);
        } catch (err) {
            setError('Error al cargar los work items');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWorkItems();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este work item?')) {
            try {
                await deleteWorkItem(id);
                setWorkItems(workItems.filter(w => w.id !== id));
            } catch (err) {
                setError('Error al eliminar el work item');
            }
        }
    };

    const handleEdit = (id) => {
        setEditingId(id);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleFormSubmit = () => {
        fetchWorkItems();
        setEditingId(null);
    };

    if (loading) return <div>Cargando versiones AI...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="workItem-list-ai workItem-form-ai-with-sidebar">
            <div className="workItem-list-content">
                <h2>Lista de Work Items (AI)</h2>
                {!editingId && (
                    <div className="new-workItem">
                        <h3>Agregar Nuevo Work Item (AI)</h3>
                        <WorkItemFormAI onSubmitSuccess={handleFormSubmit} />
                    </div>
                )}
                <div className="workItems">
                    {workItems.length === 0 ? (
                        <p>No hay work items registrados.</p>
                    ) : (
                        workItems.map(workItem => (
                            <div key={workItem.id}>
                                {editingId === workItem.id ? (
                                    <div className="edit-form">
                                        <h3>Editar Work Item (AI)</h3>
                                        <WorkItemFormAI
                                            workItem={workItem}
                                            onSubmitSuccess={handleFormSubmit}
                                            onCancel={handleCancelEdit}
                                        />
                                    </div>
                                ) : (
                                    <WorkItemItemAI
                                        workItem={workItem}
                                        onDelete={() => handleDelete(workItem.id)}
                                        onEdit={() => handleEdit(workItem.id)}
                                    />
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkItemListAI;
