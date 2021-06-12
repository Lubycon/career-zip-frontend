import { IProject } from 'types';
import { AxiosResponse } from 'axios';
import client from './client';

const getProjectList = (): Promise<AxiosResponse<{ data: IProject[] }>> => client.get('/projects');

const addProject = (title: string): Promise<AxiosResponse<{ data: number }>> =>
  client.post('/projects/', { title });

export { getProjectList, addProject };
