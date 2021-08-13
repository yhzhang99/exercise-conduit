<template>
  <div class="wrap">
    <h2>Sign up</h2>
    <p><router-link to="/login">Have an account?</router-link></p>
    <a-input placeholder="Username" v-model="user.username" />
    <a-input placeholder="Email" v-model="user.email" />
    <a-input type="password" placeholder="Password" v-model="user.password" />
    <div>
      <a-alert
        type="error"
        :message="'Username ' + item"
        banner
        v-for="(item, index) in err.username"
        :key="index"
      />
      <a-alert
        type="error"
        :message="'Email ' + item"
        banner
        v-for="(item, index) in err.email"
        :key="index"
      />
      <a-alert
        type="error"
        :message="'Password ' + item"
        banner
        v-for="(item, index) in err.password"
        :key="index"
      />
    </div>
    <button @click="signUp">Sign up</button>
  </div>
</template>

<script>
import register from "../api/register";
// import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      err: {
        email: [],
        username: [],
        password: [],
      },
    };
  },
  methods: {
    ...mapMutations("commonStore", ["changeToken"]),
    signUp() {
      register(this.user)
        .then((response) => {
          this.changeToken(response.user);
          this.$router.push("/home");
          setTimeout(function () {
            window.location.reload();
          }, 0);
        })
        .catch((err) => {
          if (err.status === 422) {
            this.err = err.data.errors;
          }
        });
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 540px;
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
