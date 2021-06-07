import client from './client';

export const getShareCount = () => client.get('/events/share-link');
export const increaseShareCount = () => client.post('/events/share-link');
