import { stringify } from 'query-string';
import client from './client';

interface GetArchivingListParams {
  size: number;
  page: number;
  direction: 'desc' | 'asc';
}

interface DeleteArchiving {
  deleteArchiveIds: number[];
}

export const getArchivingList = (params: GetArchivingListParams) =>
  client.get(`/archives?${stringify(params)}`);

export const deleteArchiving = (params: DeleteArchiving) =>
  client.delete(`/archives`, { data: params });
