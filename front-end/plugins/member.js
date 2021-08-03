import axios from "axios";

export default axios => {
  login: async form => {
    await axios.post("auth/login", form).then(response => {
      if (response.data.code == 200) {
        localStorage.setItem("user", form.userId);
      }
      return response.data;
    });
  };
  logout: () => {
    localStorage.removeItem("user");
  };
};
