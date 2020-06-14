import axios from '../utils/axios';

export const get = async () => {
    let { data } = await axios.get('/users')

    return { ...data }
}

export const register = async userData => {
    let { data } = await axios.post('/users', { user: { ...userData } })

    return data
}

export const getMe = async () => {
    let { data } = await axios.get('/users/me')

    return { ...data }
}

export const makeAppointment = async () => {
    let { data } = await axios.patch(`/users/nutritionists/appointment`)

    return data
}