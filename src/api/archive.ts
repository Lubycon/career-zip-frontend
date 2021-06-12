import { AxiosResponse } from 'axios';
import { IQuestionPaper } from 'types';
import client from './client';

interface PostArchiveParams {
  questionPaperId: number;
  answers: { questionId: number; projectId: number; comment: string }[];
}

export const getArchive = (id: number) => client.get(`/archives/${id}`);

export const getQuestionPaper = (): Promise<AxiosResponse<{ data: IQuestionPaper }>> =>
  client.get('/questionpapers');

export const postArchive = (params: PostArchiveParams) => client.post(`/archives`, params);
