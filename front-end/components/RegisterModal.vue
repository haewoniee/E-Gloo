<template>
  <div class="modal-wrapper">
    <div class="modal-header">
      <multiply-icon @click="$emit('close')" />
      <span class="title">회원가입</span>
    </div>
    <div class="modal-body">
      <ValidationObserver ref="observer">
        <v-form method="post" @submit.prevent="register">
          <ValidationProvider name="닉네임" rules="required|max:10">
            <v-text-field
              slot-scope="{ errors, valid }"
              label="닉네임"
              placeholder="닉네임을 입력해주세요."
              :error-messages="errors"
              :success="valid"
              v-model="registerData.username"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider
            name="비밀번호"
            rules="required|min:8,12|max:12|complex"
          >
            <v-text-field
              slot-scope="{ errors, valid }"
              label="비밀번호"
              placeholder="비밀번호"
              :error-messages="errors"
              :success="valid"
              v-model="registerData.passwrod"
              type="password"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider
            name="비밀번호 확인"
            rules="required|min:8,12|max:12|complex"
          >
            <v-text-field
              slot-scope="{ errors, valid }"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              :error-messages="errors"
              :success="valid"
              v-model="registerData.passwordCheck"
              type="password"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider
            name="비밀번호 확인"
            rules="required|min:8,12|max:12|complex"
          >
            <v-text-field
              slot-scope="{ errors, valid }"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              :error-messages="errors"
              :success="valid"
              v-model="registerData.passwordCheck"
              type="password"
            ></v-text-field>
          </ValidationProvider>
          <v-radio-group row v-model="registerData.gender" grow>
            <v-radio label="여성"></v-radio>
            <v-radio label="남성"></v-radio>
          </v-radio-group>
          <ValidationProvider name="이메일" rules="email">
            <v-text-field
              slot-scope="{ errors, valid }"
              label="이메일"
              placeholder="ID@example.com"
              :error-messages="errors"
              :success="valid"
              v-model="registerData.email"
            ></v-text-field>
          </ValidationProvider>
          <v-btn type="submit" color="primary" dark rounded>
            입력완료
          </v-btn>
        </v-form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import Notification from "~/components/Notification";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import MultiplyIcon from "~/assets/images/multiply.svg?inline";

export default {
  components: {
    Notification,
    MultiplyIcon,
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      registerData: {
        social: "LOCAL",
        username: "",
        password: "",
        passwordCheck: "",
        gender: "",
        email: "",
        genders: [
          { label: "남성", id: "MALE" },
          { label: "여성", id: "FEMALE" }
        ]
      }
    };
  },
  methods: {
    async register() {
      if (await this.$refs.observer.validate()) {
        this.$store
          .dispatch("register", {
            data: {
              username: this.registerData.username,
              email: this.registerData.email,
              password: this.registerData.password
            }
          })
          .then(
            await this.$store.dispatch("login", {
              data: {
                email: this.registerData.email,
                password: this.registerData.password
              }
            })
          )
          .catch(e => {
            // this.$refs.form.setErrors({
            //   이메일: ["이미 존재하는 이메일입니다."],
            //   닉네임: ["중복된 아이디가 존재합니다."]
            // });
          });
      }
    }
  }
};
</script>
<style scoped>
.modal-wrapper {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  overflow: hidden;
  background-color: #fff;
}

.modal-container {
  margin: 0;
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  overflow: scroll;
}
.modal-header {
  display: flex;
  margin-top: 1em;
  margin-bottom: 2em;
  color: black;
  font-style: normal;
  font-weight: 900;
  line-height: 35px;
  align-items: center;
}
.modal-body {
  margin: 20px 0;
}
</style>
