import client from './client';

export const getJWT = (tempToken: string) =>
  client.post(
    '/accounts/auth',
    {},
    {
      headers: { Authorization: `Bearer ${tempToken}` },
    }
  );
