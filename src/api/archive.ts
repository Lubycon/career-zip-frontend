import client from './client';

export const getArchive = (id: number) => client.get(`/archives/${id}`);
