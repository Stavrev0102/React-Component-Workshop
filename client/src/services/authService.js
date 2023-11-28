
// const baseUrl = 'http://localhost:3030/users';
const baseUrl = 'http://localhost:3030/users';
import * as request from '../lib/request'

export const register = async(email,password) => {
    const result = request.post(`${baseUrl}/register`, {
        email,
        password
    });
    return result
}
export const login = async(email,password) => {
    const result = request.post(`${baseUrl}/login`, {
        email,
        password
    });
    return result
}