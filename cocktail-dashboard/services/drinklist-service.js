import axios from "axios";
//const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://10.0.2.2:8080/api/drink/"

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

const getRandom =  () => {
    return  axios
        .get(API_URL)
        .then((response) => {
           const res = response.data
            console.log("Responsen från servicen ", res)
            return res;
        })
        .catch((error) => {
            if(error.response) {
                console.log("Response data ", error.response.data)
                console.log("Response status ", error.response.status)
                console.log("Responnse header ", error.response.headers)
            } else if (error.request){
                console.log("2")
                console.log(error.request)
            } else {
                console.log("3")
                console.log(error.message)
            }
        })
}

const DrinklistService = {
    getByName,
    getByIngridient,
    getRandom
}

export default DrinklistService;