
import * as request from '../lib/request'
const baseUrl = 'http://localhost:3030/data/products'

export const getAll = async() => {
    const response = await request.get(baseUrl)
    return Object.values(response);
}
export const create = async(productData) => {
    const result = await request.post(baseUrl,productData);
   return result;
}

export const getOneById = async(producId) => {
    const result = await request.get(`${baseUrl}/${producId}`);
    return result;
}
