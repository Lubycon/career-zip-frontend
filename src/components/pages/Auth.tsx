import { useEffect } from 'react';
import client from 'api/client';
import { getJWT } from 'api/auth';
import { useHistory } from 'react-router';
import useQueryStringAndParam from 'hooks';

const Auth = () => {
  const history = useHistory();
  const { authorizationToken: tempToken } = useQueryStringAndParam<{
    authorizationToken: string;
  }>().query;

  useEffect(() => {
    if (tempToken == null) {
      return;
    }
    const getJWTAsync = async (token: string) => {
      try {
        const res = await getJWT(token);
        const [authorizationHeader, jwt] = res.headers.authorization.split(' ');
        if (authorizationHeader && authorizationHeader === 'Bearer') {
          client.defaults.headers = {
            Authorization: `Bearer ${jwt}`,
          };
          history.push('/main');
        }
      } catch (err) {
        history.push('/login');
      }
    };
    getJWTAsync(tempToken);
  }, [tempToken]);
  return <div>로그인 중...</div>;
};

export default Auth;
