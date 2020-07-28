export default function sendRequest(method: string, url: string, body: object | null = null, access_token: string | null = null) {
    const headers = {
        'Content-Type': 'application/json',
    };

    if(access_token) {
        headers['Authorization'] = 'Bearer ' + access_token;
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(async (response) => ({
        status: response.status,
        data: await response.json(),
    }));
}
