import axios from '../utils/axios';

export const get = async () => {
    let { data } = await axios.get('/users/nutritionists')

    return { ...data }
}

export const getById = async id => {
    let { data } = await axios.get('/users/' + id)

    return { ...data }
}