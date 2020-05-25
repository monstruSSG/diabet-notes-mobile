import axios from '../utils/axios';

export const get = async () => {
    let { data } = await axios.get('/users')

    return { ...data }
}

export const getMe = async () => {
    let { data } = await axios.get('/users/me')

    return { ...data }
}