export default ({ $axios, authorizationToken }) => {
  $axios.defaults.headers.Authorization = authorizationToken;
};
