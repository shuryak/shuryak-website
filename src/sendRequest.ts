export default function sendRequest(method: string, url: string, body: object | null = null) {
    const headers = {
        'Content-Type': 'application/json',
    };

    if(localStorage.getItem('access_token')) {
        headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
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
