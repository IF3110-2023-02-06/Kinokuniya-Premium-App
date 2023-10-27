import axios from 'axios';
import { storage } from '../storage.js';

export const callGetUser = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REST_API_URL}/user`, {
      headers: {
        'x-api-key': storage.getToken(),
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      return JSON.parse(error.message);
    }
    throw error;
  }
};

export const callLogin = async (user) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REST_API_URL}/login`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      return JSON.parse(error.message);
    }
    throw error;
  }
};
