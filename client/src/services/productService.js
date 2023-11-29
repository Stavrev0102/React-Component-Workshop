
import * as request from '../lib/request'
const baseUrl = 'http://localhost:3030/data/products'

export const getAll = async() => {
    const response = await request.get(baseUrl)
    return Object.values(response);
}
export const create = async(gameData) => {
    const result = await request.post(baseUrl,gameData);
   return result;
}
