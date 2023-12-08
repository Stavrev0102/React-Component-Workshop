import * as request from '../lib/request';
const myDBUrl = 'http://localhost:3030/jsonstore/countries';

export const getAllCountries = async() => {
  
        const result = request.get(`${myDBUrl}`);
        const res = await result
       
        return Object.values(res)
    
}