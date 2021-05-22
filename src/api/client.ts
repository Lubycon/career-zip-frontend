import axios from 'axios';

const client = axios.create({ baseURL: `${process.env.BASE_URL}/${process.env.VERSION}` });

export default client;
