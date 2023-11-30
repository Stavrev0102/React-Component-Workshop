import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/feedback'

export const create = async (userId,text) => {

    const newFeedback = await request.post(baseUrl, {
        userId,
        text,
        
    });
    return newFeedback
}

export const getAll = async (userId) => {
    const query = new URLSearchParams({
        where:`userId="${userId}"`,
        load:`owner=_ownerId:users`
    })
    const allComments = await request.get(`${baseUrl}?${query}`)
    return allComments
}