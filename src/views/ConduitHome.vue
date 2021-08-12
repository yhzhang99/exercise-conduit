<template>
  <div id="bd">
    <div id="wrap">
      <h1>conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
    <div id="main">
      <a-menu mode="horizontal">
        <a-menu-item key="Your" @click="changeYour"> Your Feed </a-menu-item>
        <a-menu-item
          key="Global"
          @click="changeGlobal"
          :class="feed === 'global' ? 'ant-menu-item-active' : ''"
        >
          Global Feed
        </a-menu-item>
      </a-menu>
      <a-list
        item-layout="vertical"
        size="large"
        :pagination="pagination"
        :data-source="selectData"
      >
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <template slot="actions">
            <span>
              <a-icon type="star-o" style="margin-right: 8px" />
              {{ item.favoritesCount }}
            </span>
          </template>
          <a-list-item-meta :description="item.createdAt">
            <a slot="title" :href="item.href">{{ item.author.username }}</a>
            <a-avatar slot="avatar" :src="item.author.image" />
          </a-list-item-meta>
          {{ item.title }}<br />
          {{ item.description }}
        </a-list-item>
      </a-list>
    </div>
    <div id="bottom"></div>
    <!-- <button @click="addItem"></button> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
// import getArticles from "../api/getArticles";

export default {
  data() {
    return {
      feed: "global",
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },
    };
  },
  methods: {
    ...mapActions(["getArt", "getFeed"]),
    // addItem() {
    //   getArticles().then((response) => {
    //     this.ac = response.articles;
    //     console.log(this.ac);
    //   });
    //   // .catch((err) => {});
    // },
    changeYour() {
      this.feed = "your";
      this.getFeed();
    },
    changeGlobal() {
      this.feed = "global";
    },
  },
  created() {
    this.getArt();
  },
  computed: {
    ...mapState(["articleData", "feedData"]),
    selectData() {
      if (this.feed === "your") {
        return this.feedData;
      } else {
        return this.articleData;
      }
    },
  },
};
</script>

<style scoped>
#bd {
  min-height: 679px;
}
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
.ant-menu-item-active,
.ant-menu-item-selected {
  color: #5cb85c !important;
  border-bottom: 2px solid #5cb85c !important;
}
img {
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  width: 32px;
  border-radius: 30px;
}
#bottom {
  height: 65px;
}
</style>
