import React from 'react';

const WorkItemItemAI = ({ workItem, onDelete, onEdit }) => {
    // simple note shown by AI
    const aiNote = workItem.description
        ? `La descripción contiene ${workItem.description.length} caracteres.`
        : 'Considera añadir una descripción para mejorar la claridad.';

    return (
        <div className="workItem-item-ai">
            <div className="workItem-info">
                <h3>{workItem.code}</h3>
                <p><strong>Id:</strong> {workItem.id || 'No especificado'}</p>
                <p><strong>Código:</strong> {workItem.code || 'No especificado'}</p>
                <p><strong>Número:</strong> {workItem.num || 'No especificado'}</p>
                <p><strong>Descripción:</strong> {workItem.description || 'No especificada'}</p>
                <p><strong>ID del Padre:</strong> {workItem.parent_id || 'No especificado'}</p>
                <p className="ai-note">{aiNote}</p>
            </div>
            <div className="workItem-actions">
                <button onClick={onEdit} className="edit-btn">Editar</button>
                <button onClick={onDelete} className="delete-btn">Eliminar</button>
            </div>
        </div>
    );
};

export default WorkItemItemAI;
