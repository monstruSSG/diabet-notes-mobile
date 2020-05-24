import axios from '../utils/axios';

export const get = async () => {
    let { data } = await axios.get('/users')

    return { ...data }
}