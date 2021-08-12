<template>
  <div class="wrap">
    <h2>Sign in</h2>
    <p><router-link to="/register">Need an account?</router-link></p>
    <a-input placeholder="Email" v-model="user.email" />
    <a-input type="password" placeholder="Password" v-model="user.password" />
    <button @click="signIn">Sign in</button>
  </div>
</template>

<script>
import login from "../api/login";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations("commonStore", ["changeToken"]),
    signIn() {
      // let _this = this;
      if (this.user.email === "" || this.user.password === "") {
        alert("账号或密码不能为空");
      } else {
        login(this.user)
          .then((response) => {
            this.changeToken(response.user);
            this.$router.push("/home");
            setTimeout(function () {
              window.location.reload();
            }, 100);
          })
          .catch((err) => {
            console.log(err);
          });
        // .catch((error) => {
        //   alert("账号或密码错误");
        //   console.log(error);
        // });
      }
    },
  },

  computed: {},
};
</script>

<style scoped>
.wrap {
  width: 540px;
  height: 679px;
  margin: 0 auto;
}
h2 {
  text-align: center;
  margin-bottom: 0;
  font-size: 36px;
}
p {
  text-align: center;
}
a {
  color: #5cb85c !important;
}
.ant-input {
  width: 540px;
  height: 50px;
  margin-bottom: 15px;
}
button {
  float: right;
  width: 100px;
  height: 60px;
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
  border-radius: 5px;
  font-size: 20px;
}
</style>
