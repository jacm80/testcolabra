import { URL_GET_TOKEN } from '../constants/globals';
import { setUser, getUser } from '../helpers/auth';

const getHeaders = (token = null) => {
    const headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
    if (token !== null) headers.token = { 'Authorization': token }
    return headers;
}

const refreshToken = ({ email, password}) => {
    const url = `URL_GET_TOKEN`;
    const response = await fetch(url, getHeaders(), { emaail, password });
    console.log(response);
}

const tfetch = async (url, req) => {
    const user = getUser();
    if (user.token) {
        console.log('TOKEN', user.token);
    } else {
        refreshToken(req)
    }
    const response = await fetch(url, getHeaders())
}

export default tfetch;