<template>
  <div>
    <div id="wrap">
      <h1>conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
    <div id="main">
      <a-menu mode="horizontal">
        <a-menu-item class="ant-menu-item-active" key="mail">
          Global Feed
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 170px;
  /* line-height: 60px; */
  padding-top: 20px;
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%),
    inset 0 -8px 8px -8px rgb(0 0 0 / 30%);

  background-color: #5cb85c;
  color: #fff;
}
h1 {
  width: 1110px;
  margin: 0 auto;
  text-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  font-weight: 700;
  text-align: center;
  font-size: 50px;
  color: #fff;
}
p {
  width: 1110px;
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
  font-size: 24px;
}

#main {
  width: 1110px;
  margin: 0 auto;
  margin-top: 50px;
}
.ant-menu-item-active {
  color: #5cb85c;
  border-bottom: 2px solid #5cb85c;
}
</style>
