import AsyncStorage from '@react-native-community/async-storage';

import axios from '../utils/axios';

export const login = async (email, password) => {
    let { data } = await axios.patch('/auth/login', { user: { email, password } })

    await AsyncStorage.setItem('token', data.token);

    return { ...data }
}

export const isLogged = async () => {
    return await axios.get('/auth/logged')
}