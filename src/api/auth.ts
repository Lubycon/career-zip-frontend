import client from './client';

export const issueJWT = (tempToken: string) =>
  client.post(
    '/accounts/auth',
    {},
    {
      headers: { Authorization: `Bearer ${tempToken}` },
    }
  );
