const BASE_URL = import.meta.env.VITE_BASE_URL;

// hardcode get token
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDY0Mjc1M2M5ODcyZGU5MDI4ZDczMCIsImlhdCI6MTcxNjExMTU2MSwiZXhwIjoxNzE2MTE1MTYxfQ.gFGiq2lTvxXAP_h0rfW-xOebL5vLGWLBO3bkOMshhNE';

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
  const response = await fetch(`${BASE_URL}/login`, {
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

export async function register({
  username,
  password,
  name,
  nim,
  email,
  jurusan,
  telepon,
}) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      name,
      nim,
      email,
      jurusan,
      telepon,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJson = await response.json();

  if (responseJson.message !== 'Success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return 'Your account successfully registered';
}

// get user by id
export async function getUser(id) {
  const response = await fetchWithToken(`${BASE_URL}/users/${id}`);
  const responseJson = await response.json();

  if (responseJson.message !== 'Success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  console.log(responseJson.data.user);

  return { error: true, data: responseJson.data.user };
}

export async function getOwnProfile() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.message !== 'Success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  const {
    data: { user },
  } = responseJson;

  return user;
}

export async function updateUser({ name, jurusan, telepon, email, id }) {
  const response = await fetchWithToken(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, jurusan, telepon, email }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJson = await response.json();

  if (responseJson.message !== 'Success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return responseJson.message;
}
