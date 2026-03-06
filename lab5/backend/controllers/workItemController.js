const pool = require('../db');
// Obtener todos los países
exports.getAllWorkItems = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM workItem ORDER BY code');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los work items:', error);
        res.status(500).json({ error: 'Error al obtener los work items' });
    }
};
// Obtener un work item por ID
exports.getWorkItemById = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM workItem WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Work item no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener el work item:', error);
        res.status(500).json({ error: 'Error al obtener el work item' });
    }
};
// Crear un nuevo work item
exports.createWorkItem = async (req, res) => {
    const { code, num, description, parent_id } = req.body;
    // Validación básica
    if (!code || !num) {
        return res.status(400).json({ error: 'El código y el número del work item son obligatorios' });
    }
    try {
        const result = await pool.query(
            'INSERT INTO workItem (code, num, description, parent_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [code, num, description, parent_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error al crear el work item:', error);
        res.status(500).json({ error: 'Error al crear el work item ' });
    }
};

// Actualizar un work item existente
exports.updateWorkItem = async (req, res) => {
    const { code, num, description, parent_id } = req.body;
    const workItemId = req.params.id;
    // Validación básica
    if (!code || !num) {
        return res.status(400).json({ error: 'El código y el número del work item son obligatorios' });
    }
    try {
        // Verificar si el work item existe
        const checkResult = await pool.query('SELECT * FROM workItem WHERE id = $1 AND code = $2 AND num = $3', [workItemId, code, num]);
        if (checkResult.rows.length === 0) {
            return res.status(404).json({ error: 'Work item no encontrado' });
        }
        // Actualizar el work item
        const updateResult = await pool.query(
            'UPDATE workItem SET code = $1, num = $2, description = $3, parent_id = $4 WHERE id = $5 RETURNING *',
            [code, num, description, parent_id, workItemId]
        );
        res.json(updateResult.rows[0]);
    } catch (error) {
        console.error('Error al actualizar el work item:', error);
        res.status(500).json({ error: 'Error al actualizar el work item' });
    }
};
// Eliminar un work item
exports.deleteWorkItem = async (req, res) => {
    const workItemId = req.params.id;
    try {
        // Verificar si el work item existe
        const checkResult = await pool.query('SELECT * FROM workItem WHERE id = $1', [workItemId]);
        if (checkResult.rows.length === 0) {
            return res.status(404).json({ error: 'Work item no encontrado' });
        }
        // Eliminar el work item
        await pool.query('DELETE FROM workItem WHERE id = $1', [workItemId]);
        res.json({ message: 'Work item eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el work item:', error);
        res.status(500).json({ error: 'Error al eliminar el work item' });
    }
};
