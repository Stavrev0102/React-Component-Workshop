
// const baseUrl = 'http://localhost:3030/users';
const baseUrl = 'http://localhost:3030/users';
const myDBUrl = 'http://localhost:3030/jsonstore/users';
import * as request from '../lib/request'

export const register = async(email,password) => {
    const result = request.post(`${baseUrl}/register`, {
        email,
        password
    });
    return result
}

export const registerInLocalDb = (info) => {
const result = request.post(`http://localhost:3030/jsonstore/users`,info);
}

export const login = async(email,password) => {
    const result = request.post(`${baseUrl}/login`, {
        email,
        password
    });
    return result
}

export const logout = async() => {
    const result = request.post(`${baseUrl}/logout`);
    return result
}

export const getUserById = async(userId) => {
    const result = request.get(`${myDBUrl}`);
    const res = await result
   
    return Object.values(res)
}