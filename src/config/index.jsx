const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://musicx-app.herokuapp.com';

export default {
  URL,
};
