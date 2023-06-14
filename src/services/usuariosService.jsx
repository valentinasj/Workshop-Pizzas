import { instanceAxios } from "./api";

// Función que realiza una petición GET a la API
export const get = async (endpoint) => {
    const response = await instanceAxios.get(endpoint);
    return response.data;
  };

  export const getById = async (endpoint) => {
    const response = await instanceAxios.get(endpoint);
    return response.data;
  };
  
  // Función que realiza una petición POST a la API
  export const post = async (endpoint, data) => {
    const response = await instanceAxios.post(endpoint, data);
    return response.data;
  };
  
  // Función que realiza una petición PUT a la API
  export const put = async (endpoint, data) => {
    const response = await instanceAxios.put(endpoint, data);
    return response.data;
  };
  
  // Función que realiza una petición DELETE a la API /delete/id
  export const deletes = async (endpoint) => {
    const response = await instanceAxios.delete(endpoint);
    return response.data;
  };