import React from 'react';
const WorkItemItem = ({ workItem, onDelete, onEdit }) => {
    return (
        <div className="workItem-item">
            <div className="workItem-info">
                <h3>{workItem.code}</h3>
                <p><strong>Id:</strong> {workItem.id || 'No especificado'}</p>
                <p><strong>Código:</strong> {workItem.code || 'No especificado'}</p>
                <p><strong>Número:</strong> {workItem.num || 'No especificado'}</p>
                <p><strong>Descripción:</strong> {workItem.description || 'No especificada'}</p>
                <p><strong>ID del Padre:</strong> {workItem.parent_id || 'No especificado'}</p>
            </div>
            <div className="workItem-actions">
                <button onClick={onEdit} className="workItem-actions .edit-btn">Editar</button>
                <button onClick={onDelete} className="workItem-actions .delete-btn">Eliminar</button>
            </div>
        </div>
    );
};
export default WorkItemItem;
