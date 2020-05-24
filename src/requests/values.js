import axios from '../utils/axios';

export const create = async value => {
    let { data } = await axios.post('/values', { value: { ...value }  })

return { ...data }
}

export const get = async () => {
    let { data } = await axios.get('/values')

    return { ...data }
}