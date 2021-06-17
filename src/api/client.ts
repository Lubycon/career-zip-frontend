import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.BASE_URL}/${process.env.VERSION}`,
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      window.location.href = '/login?error=unauthorized';
    }
    if (error.response.status === 403 || error.response.status === 419) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      window.location.href = '/login?error=expired-auth';
    }
    return Promise.reject(error);
  }
);
export default client;
