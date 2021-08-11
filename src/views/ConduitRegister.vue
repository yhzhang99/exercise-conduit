<template>
  <div class="wrap">
    <h2>Sign up</h2>
    <p><router-link to="/login">Have an account?</router-link></p>
    <a-input placeholder="Username" />
    <a-input placeholder="Email" />
    <a-input placeholder="Password" />
    <button>Sign in</button>
  </div>
</template>

<script>
export default {};
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
