import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { BASE_URL } from './config'

let axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async config => {
    const token = await AsyncStorage.getItem('token');
    
    config.headers.Authorization = `Bearer ${token}`;

    return config;
})

export default axiosInstance;