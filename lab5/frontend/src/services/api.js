// src/services/api.js
import axios from 'axios';
const API_URL = 'http://localhost:5050/api/work-items';
export const getWorkItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los work items:', error);
        throw error;
    }
};
export const getWorkItem = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el work item:', error);
        throw error;
    }
};
export const createWorkItem = async (workItem) => {
    try {
        const response = await axios.post(API_URL, workItem);
        return response.data;
    } catch (error) {
        console.error('Error al crear el work item:', error);
        throw error;
    }
};
export const updateWorkItem = async (id, workItem) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, workItem);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el work item:', error);
        throw error;
    }
};
export const deleteWorkItem = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el work item:', error);
        throw error;
    }
};