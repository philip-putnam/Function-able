import axios from 'axios';

export const registerUser = (
  username,
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  return axios.post('/user/register', {
    username,
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  })
    .then(res => res.data);
} ;
