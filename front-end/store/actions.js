// import axios from "axios";

export const login = async ({ commit }, { userId, password }) => {
  let form = new FormData();
  form.append("userId", userId);
  form.append("password", password);

  await $axios.login(form);

  localStorage.setItem("user", JSON.stringify(response.data));

  // const { data } = await axios.post("auth/login", form);
  // if (data.accessToken) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // } else {
  //   throw new Error(
  //     "로그인에 실패했습니다. 아이디와 비밀번호를 확인 해 주세요."
  //   );
  // }

  commit("LOGIN", userId);
};

export const register = async (
  { commit },
  { name, userId, password, social, phoneNo, gender, email, address }
) => {
  let form = new FormData();
  form.append("userId", name);
  form.append("name", userId);
  form.append("password", password);
  form.append("social", social);
  form.append("phoneNo", phoneNo);
  form.append("gender", gender);
  form.append("email", email);
  form.append("address", address);

  // const { data } = await axios.post("auth/register", form);
  // if (data.accessToken) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // } else {
  //   throw new Error(
  //     "로그인에 실패했습니다. 아이디와 비밀번호를 확인 해 주세요."
  //   );
  // }

  commit("LOGIN", userId);
};
