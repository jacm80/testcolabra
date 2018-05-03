import { URL_GET_TOKEN } from '../constants/globals';
import { setUser, getUser } from '../helpers/auth';

const getHeaders = () => {
    const user = getUser();
    const headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    };
    if (user !== null) headers.token = { 'Authorization': token }
    return headers;
}

// const refreshToken = ({ email, password}) => {
//     const url = `URL_GET_TOKEN`;
//     const response = await fetch(url, getHeaders(), { email, password });
//     console.log(response);
// }



// {
// method: 'post',
//   headers: {
//     'Accept': 'application/json, text/plain, */* ',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ a: 7, str: 'Some string: &=&' })
// }


const tfetch = async (url, req) => {
    const response = await fetch(url, { headers: getHeaders(), body: req });
    return response;
}

export default tfetch;