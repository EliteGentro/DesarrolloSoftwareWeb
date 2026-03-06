import React, { useState, useEffect } from 'react';
import { getWorkItems, deleteWorkItem } from '../services/api';
import WorkItemForm from './WorkItemForm';
import WorkItemItem from './WorkItemItem';
const workItemList = () => {
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
                setWorkItems(workItems.filter(workItem => workItem.id !== id));
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
    if (loading) return <div>Cargando work items...</div>;
    if (error) return <div className="error">{error}</div>;
    return (
        <div className="workItem-list">
            <h2>Lista de Work Items</h2>
            {!editingId && (
                <div className="new-workItem">
                    <h3>Agregar Nuevo Work Item</h3>
                    <WorkItemForm onSubmitSuccess={handleFormSubmit} />
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
                                    <h3>Editar Work Item</h3>
                                    <WorkItemForm
                                        workItem={workItem}
                                        onSubmitSuccess={handleFormSubmit}
                                        onCancel={handleCancelEdit}
                                    />
                                </div>
                            ) : (
                                <WorkItemItem
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
    );
};
export default workItemList;
