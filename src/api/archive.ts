import { AxiosResponse } from 'axios';
import { IQuestionPaper } from 'types';
import client from './client';

interface PostArchiveParams {
  questionPaperId: number;
  answers: { questionId: number; projectId: number; comment: string }[];
}

interface GetPreviousAnswersParams {
  questionPaperId: number;
  projectIds: number[];
}

export const getArchive = (id: number) => client.get(`/archives/${id}`);

export const getQuestionPaper = (): Promise<AxiosResponse<{ data: IQuestionPaper }>> =>
  client.get('/questionpapers');

export const getPreviousAnswers = (params: GetPreviousAnswersParams) =>
  client.post('/answers/previous', params);

export const postArchive = (params: PostArchiveParams) => client.post(`/archives`, params);

export const checkIfUserArchived = (): Promise<
  AxiosResponse<{ data: { archived: boolean; id: number } }>
> => client.get('/accounts/post/exist');
