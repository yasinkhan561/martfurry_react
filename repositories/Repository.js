import axios from 'axios';
const baseDomain = 'http://phplaravel-470608-1678375.cloudwaysapps.com/api';
// const baseDomain = 'http://localhost:8000/api';
const authorization_prefix = 'Bearer ';

export const customHeaders = {
    Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
