import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/';

const getAll = () => {
    return axios.get(`${baseUrl}/api/all`).then((response => response.data));
}

const search = (name) => {
    return axios.get(`${baseUrl}/api/name/${name.toLowerCase()}`).then((response) => response.data);
}

export default {
    getAll,
    search,
}
