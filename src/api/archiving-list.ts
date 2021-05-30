import { stringify } from 'query-string';
import client from './client';

interface GetArchivingListParams {
  size: number;
  page: number;
  direction: 'desc' | 'asc';
}

export const getArchivingList = (params: GetArchivingListParams) =>
  client.get(`/archives?${stringify(params)}`);
