import axios from 'axios';

export const registerUser = (
  username,
  firstName,
  lastName,
  email,
  password,
) => {
  return axios.post('/user/register', {
    username,
    firstName,
    lastName,
    email,
    password,
  })
    .then(res => res.data);
};

export const loginUser = (username, password) => {
  return axios.post('/user/login', {username, password})
    .then(res => res.data);
};

export const logoutUser = () => {
  return axios.get('/user/logout')
    .then(res => res.data);
};
