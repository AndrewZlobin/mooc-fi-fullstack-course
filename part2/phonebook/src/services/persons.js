import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseURL).then(resp => resp.data);
}

const add = (person) => {
    return axios.post(baseURL, person);
}

const remove = (id) => {
    return axios.delete(`${baseURL}/${id}`);
}

const update = (person) => {
    const {id, ...data} = person;
    return axios.put(`${baseURL}/${id}`, data).then(resp => resp.data);
}

export default {
    getAll,
    add,
    remove,
    update,
};