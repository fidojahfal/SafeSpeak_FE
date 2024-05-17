const BASE_URL = 'http://localhost:3000/api/v1';

// hardcode get token
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDY0Mjc1M2M5ODcyZGU5MDI4ZDczMCIsImlhdCI6MTcxNTk0ODQwMCwiZXhwIjoxNzE1OTUyMDAwfQ.HGT8moP0Tj7KDUcetzmNgYDGV8XU3-nZLmpIRCmzueE';

// fetchWithToken
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function login({ username, password }) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJson = await response.json();

  if (responseJson.message !== 'Success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  const {
    data: { token },
  } = responseJson;

  return token;
}

// get user by id
export async function getUser(id) {
  const response = await fetchWithToken(`${BASE_URL}/users/${id}`);
  const responseJson = await response.json();

  if (responseJson.data.user === null) {
    alert(responseJson.message);
    return { error: true, data: null };
  }
}
