import { useEffect } from 'react';
import client from 'api/client';
import { getJWT } from 'api/auth';
import { useHistory } from 'react-router';
import { useQueryStringAndParam } from 'hooks/useQueryStringAndParam';
import { useDispatch } from 'react-redux';
import { setAccountInfo } from 'slices/account';
import LoginLoadingBackground from 'components/atoms/LoginLoadingBackground';
import { setLocalStorageItem } from 'utils/localstorage';

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
      const res = await getJWT(token);
      const [authorizationHeader, jwt] = res.headers.authorization.split(' ');
      if (authorizationHeader && authorizationHeader === 'Bearer') {
        dispatch(setAccountInfo(res.data.data));
        client.defaults.headers = {
          Authorization: `Bearer ${jwt}`,
        };
        setLocalStorageItem('accessToken', `Bearer ${jwt}`);
        setLocalStorageItem('user', res.data.data);
        history.push('/archiving-list');
      }
    };
    getJWTAsync(tempToken);
  }, [tempToken]);
  return <LoginLoadingBackground />;
};

export default Auth;
