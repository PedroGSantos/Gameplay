import axios from 'axios';

import {API_URL} from 'react-native-dotenv';

export const api = axios.create({
	baseURL: `https://${API_URL}`
});

console.log(api.defaults.baseURL);
