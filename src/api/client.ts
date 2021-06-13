import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.ENV_DEV_BASE_URL}/${process.env.ENV_DEV_VERSION}`,
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login?error=unauthorized';
    }
    if (error.response.status === 403) {
      window.location.href = '/login?error=expired-auth';
    }
    return Promise.reject(error);
  }
);
export default client;
