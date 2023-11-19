
const baseUrl = 'http://localhost:3030/jsonstore/products'

export const getAll = async() => {
    const response = await fetch(baseUrl)
    const result = response.json();
    return result;
}