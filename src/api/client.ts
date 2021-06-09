import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.ENV_DEV_BASE_URL}/${process.env.ENV_DEV_VERSION}`,
});

export default client;
