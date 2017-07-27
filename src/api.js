import axios from 'axios';

export const fetchEvents = () => {
  return axios.get('/api/events')
    .then(res => res.data);
};
