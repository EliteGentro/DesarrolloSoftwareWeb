const express = require('express');
const workItemController = require('../controllers/workItemController');
const router = express.Router();

// Rutas para los work items
router.get('/', workItemController.getAllWorkItems);
router.get('/:id', workItemController.getWorkItemById);
router.post('/', workItemController.createWorkItem);
router.put('/:id', workItemController.updateWorkItem);
router.delete('/:id', workItemController.deleteWorkItem);

module.exports = router;