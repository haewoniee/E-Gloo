// export default $axios => {
//   login: async form => {
//     return await $axios.post("login", form).then(response => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }
//       return response.data;
//     });
//   };
//   logout: () => {
//     localStorage.removeItem("user");
//   };
//   register: form => {
//     return $axios.post("signup", form);
//   };
// };
