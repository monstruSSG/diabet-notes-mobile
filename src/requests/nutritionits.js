import axios from '../utils/axios';

export const get = async () => {
    let { data } = await axios.get('/users/nutritionists')

    return { ...data }
}

export const getById = async id => {
    let { data } = await axios.get('/users/' + id)

    return { ...data }
}

export const addPatient = async id => {
    let { data } = await axios.patch('/users/nutritionists/' + id + '/addPatient')

    return { ...data }
}