import { URL_GET_TOKEN } from '../constants/globals';
import { setUser, getUser } from '../helpers/auth';

const getHeaders = async () => {
    const user = await getUser();
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
    console.log('getHeaders :: user', user);
    if (user.token) headers.Authorization = user.token;
    return headers;
}

// let response = await fetch(
//    URL_GET_TOKEN,
//    {
//       method: 'post',
//       headers,
//       body: JSON.stringify(user),
//    }
// );
// let responseJson = await response.json();

const tfetch = async (URL, req) => {

    // console.log('tfetch request >>>>>> ',
    // URL,
    // {
    //    method: req.method,
    //    headers,
    //    body: JSON.stringify(req.body),
    // });
    const headers = await getHeaders();
    const _body = { ...req.body };

    console.log('tfetch :: _body >>>>>>', _body);
    console.log('tfetch :: req.method >>>>>>', req.method);
    console.log('tfetch :: headers >>>>>>', headers);

    const response = await fetch(
        URL,
        {
            method: req.method,
            headers,
            body: JSON.stringify(_body),
        }
    );
    return await response.json();
}

export {
    tfetch
};