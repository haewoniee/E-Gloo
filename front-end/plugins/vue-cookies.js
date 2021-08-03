import VueCookies from "vue-cookies";

const cookie = VueCookies;
export default inject => {
  inject(cookie, cookie);
};
