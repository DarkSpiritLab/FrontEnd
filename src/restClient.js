import { simpleRestClient } from 'admin-on-rest';

const restClient = simpleRestClient('http://127.0.0.1:5000');
export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 500));
