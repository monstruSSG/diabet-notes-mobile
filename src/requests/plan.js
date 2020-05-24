import axios from '../utils/axios';

export const update = async value => {
    let { data } = await axios.patch('/plan', { plan: { ...value } })

    return { ...data }
}

export const get = async () => {
    let { data } = await axios.get('/plan')

    return { ...data }
}