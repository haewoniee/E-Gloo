import Vue from "vue";
import Vuetify from "vuetify";
// import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  iconfont: "mdi",
  options: {
    customProperties: true
  },
  theme: {
    primary: "#F98988",
    accent: "#3fd",
    secondary: "#3fd",
    info: "#3fd",
    warning: "#3fd",
    error: "#3fd",
    success: "#3fd"
  }
});
