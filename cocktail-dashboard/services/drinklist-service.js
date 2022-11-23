import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getByName = (name) => {
    return axios
        .get(API_URL + name)
        .then((response) => {
            return response.data;
        })
}

const getByIngridient = (name) => {
    return axios
        .get(API_URL + `ingridient/`+ name)
        .then((response) => {
            return response.data;
        })
}

const getRandom = () => {
    return axios
        .get(API_URL)
        .then((response) => {
            return response.data;
        })
}



const DrinklistService = {
    getByName,
    getByIngridient,
    getRandom
}

export default DrinklistService;