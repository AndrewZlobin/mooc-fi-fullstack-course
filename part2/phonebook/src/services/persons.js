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

export default {
    getAll,
    add,
    remove
};