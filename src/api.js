import axios from 'axios';

export const fetchEvents = () => {
  return axios.get('/api/events')
    .then(res => res.data);
};

export const fetchEvent = (name) => {
  return axios.post('/api/event', { name })
    .then(res => res.data);
};

export const createEvent = (
  name,
  description,
  goal,
  date,
  deadline,
  dependency,
  privacy
) => {
  return axios.post('/api/events', {
    name,
    description,
    goal,
    date,
    deadline,
    dependency,
    privacy
  })
    .then(res => res.data);
};
