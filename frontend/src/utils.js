let backendUrl = process.env.REACT_APP_API_URL;

if (!backendUrl) {
  backendUrl = 'http://localhost:3001';
}

export const callAPI = (method, path, body = {}) => {
  return fetch(`${backendUrl}/api${path}`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: method === 'POST' ? JSON.stringify(body) : undefined,
  })
    .then(res => res.json())
    .then(res => {
      if (res.errors) {
        console.log('Error:', res);
      }
      return res;
    });
}

export const callExchangeAPI = () => {
  return fetch('https://api.exchangeratesapi.io/latest', { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      if (res.errors) {
        console.log('Error:', res);
      }
      return res;
    });
}
