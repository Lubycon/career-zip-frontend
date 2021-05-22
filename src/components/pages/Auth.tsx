import { useEffect } from 'react';
import client from 'api/client';
import { issueJWT } from 'api/auth';
import useQuery from 'hooks';
import { RouteComponentProps, withRouter } from 'react-router';

const Auth = ({ history }: RouteComponentProps) => {
  const tempToken = useQuery().get('authorizationToken');

  useEffect(() => {
    if (tempToken) {
      issueJWT(tempToken)
        .then((res) => {
          if (res.headers.authorization && res.headers.authorization.split(' ')[0] === 'Bearer') {
            const jwt = res.headers.authorization.split(' ')[1];
            client.defaults.headers = {
              Authorization: `Bearer ${jwt}`,
            };
            history.push('/main');
          }
        })
        .catch((err) => {
          history.push('/login');
        });
    }
  }, [tempToken]);
  return <div>로그인 중...</div>;
};

export default withRouter(Auth);
