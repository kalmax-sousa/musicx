const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://music  x-app.herokuapp.com';

export default {
  URL,
};
