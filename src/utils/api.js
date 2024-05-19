const BASE_URL = import.meta.env.VITE_BASE_URL;

// fetchWithToken
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken}`,
    },
  });
}

export function putAccessToken(token) {
  localStorage.setItem('accessToken', token);
}

export function getAccessToken() {
  return localStorage.getItem('accessToken');
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

  const { message } = responseJson;

  if (message !== 'Success') {
    throw new Error(message);
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

  const { message } = responseJson;

  if (message !== 'Success') {
    throw new Error(message);
  }

  return 'Your account successfully registered';
}

// get user by id
export async function getUser(id) {
  const response = await fetchWithToken(`${BASE_URL}/users/${id}`);
  const responseJson = await response.json();

  const { message } = responseJson;

  if (message !== 'Success') {
    throw new Error(message);
  }

  const {
    data: { user },
  } = responseJson;

  return user;
}

export async function getOwnProfile() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  const { message } = responseJson;

  if (message !== 'Success') {
    throw new Error(message);
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

  const { message } = responseJson;

  if (message !== 'Success') {
    throw new Error(message);
  }

  return responseJson.message;
}
