import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import client from 'api/client';
import { getJWT } from 'api/auth';
import { useHistory } from 'react-router';
import useQueryStringAndParam from 'hooks';
import { useDispatch } from 'react-redux';
import { setAccountInfo } from 'slices/account';

interface TDecodedJWT {
  id: number;
  name: string;
  job: string;
  email: string;
  avatarUrl: string;
  role: string;
  iat: number;
  iss: string;
  exp: number;
}

const Auth = () => {
  const dispatch = useDispatch();
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
          const { iat, iss, exp, ...rest } = jwt_decode<TDecodedJWT>(jwt);
          dispatch(setAccountInfo(rest));
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
