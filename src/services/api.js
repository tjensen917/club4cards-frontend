import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const signup = (userData) => axios.post(`${API_URL}/auth/signup`, userData);
export const login = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
