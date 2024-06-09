const BASE_URL = import.meta.env.VITE_BASE_URL;

// fetchWithToken
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

export function putAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export async function login({ username, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseJson = await response.json();

  const { message } = responseJson;

  if (message !== "Success") {
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
    method: "POST",
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
      "Content-Type": "application/json",
    },
  });
  const responseJson = await response.json();

  const { message } = responseJson;

  if (message !== "Success") {
    throw new Error(message);
  }

  return "Your account successfully registered";
}

// get user by id
export async function getUser(id) {
  const response = await fetchWithToken(`${BASE_URL}/users/${id}`);
  const responseJson = await response.json();

  const { message } = responseJson;

  if (message !== "Success") {
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

  if (message !== "Success") {
    throw new Error(message);
  }

  const {
    data: { user },
  } = responseJson;

  return user;
}

export async function updateUser({ name, jurusan, telepon, email, id }) {
  const response = await fetchWithToken(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name, jurusan, telepon, email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseJson = await response.json();

  const { message } = responseJson;

  if (message !== "Success") {
    throw new Error(message);
  }

  return message;
}

export async function getAllreports() {
  const response = await fetchWithToken(`${BASE_URL}/reports`);

  const responseJson = await response.json();

  const {
    message,
    data: { reports },
  } = responseJson;

  if (message !== "Success") throw new Error(message);

  return reports;
}

export async function insertReport({
  title,
  type,
  place_report,
  date_report,
  description,
  evidence,
  is_anonim,
}) {
  const response = await fetchWithToken(`${BASE_URL}/reports`, {
    method: "POST",
    body: JSON.stringify({
      title,
      type,
      place_report,
      date_report,
      description,
      evidence,
      is_anonim,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();

  const { message, data } = responseJson;

  if (message !== "Success") throw new Error(message);

  if (data) {
    const report = data.report;
    return report;
  }

  throw new Error("Missing report data in response");
}

export async function getReportById(id) {
  const response = await fetchWithToken(`${BASE_URL}/reports/${id}`);
  const responseJson = await response.json();
  const {
    message,
    data: { report },
  } = responseJson;

  if (message !== "Success") throw new Error(message);

  return report;
}

export async function getReportsByUserId(id) {
  const response = await fetchWithToken(`${BASE_URL}/reports/user/${id}`);
  const responseJson = await response.json();
  const {
    message,
    data: { reports },
  } = responseJson;

  if (message !== "Success") throw new Error(message);

  return reports;
}

export async function updateReport({
  title,
  type,
  place_report,
  date_report,
  description,
  evidence,
  is_anonim,
  id,
}) {
  const response = await fetchWithToken(`${BASE_URL}/reports/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      type,
      place_report,
      date_report,
      description,
      evidence,
      is_anonim,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseJson = await response.json();
  const { message } = responseJson;

  if (message !== "Success") throw new Error(message);

  return message;
}

export async function updateStatus({ id, status, reason = "" }) {
  const response = await fetchWithToken(`${BASE_URL}/reports/${id}/status`, {
    method: "PUT",
    body: JSON.stringify({ status, reason }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();
  const { message } = responseJson;
  console.log(message);

  if (message !== "Success") throw new Error(message);

  return message;
}

export async function deleteReport(id) {
  const response = await fetchWithToken(`${BASE_URL}/reports/${id}`, {
    method: "DELETE",
  });
  const responseJson = await response.json();
  const { message } = responseJson;

  if (message !== "Success") throw new Error(message);

  return message;
}

export async function getCountReports() {
  const response = await fetch(`${BASE_URL}/reports/sum`);
  const responseJson = await response.json();
  const {
    message,
    data: { total, status_0, status_1, status_2 },
  } = responseJson;

  if (message !== "Success") throw new Error(message);

  return { total, status_0, status_1, status_2 };
}

export async function getAllArticles() {
  const response = await fetch(`${BASE_URL}/articles`);
  const responseJson = await response.json();
  const {
    message,
    data: { articles },
  } = responseJson;

  if (message !== "Success") throw new Error(message);

  return articles;
}

export async function getArticleById(id) {
  const response = await fetchWithToken(`${BASE_URL}/articles/${id}`);
  const responseJson = await response.json();
  const {
    message,
    data: { article },
  } = responseJson;

  if (message !== "Success") throw new Error(message);

  return article;
}

export async function insertArticle({ title, content, image }) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", image);

  const response = await fetchWithToken(`${BASE_URL}/articles`, {
    method: "POST",
    body: formData,
  });

  const responseJson = await response.json();
  const {
    message,
    data: { article },
  } = responseJson;

  if (message !== "Success") throw new Error(message);

  return article;
}

export async function updateArticle({ title, content, image, id }) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", image);

  const response = await fetchWithToken(`${BASE_URL}/articles/${id}`, {
    method: "PUT",
    body: formData,
  });

  const responseJson = await response.json();
  const { message } = responseJson;

  if (message !== "Success") throw new Error(message);

  return message;
}

export async function deleteArticle(id) {
  const response = await fetchWithToken(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  });
  const responseJson = await response.json();
  const { message } = responseJson;

  if (message !== "Success") throw new Error(message);

  return message;
}
