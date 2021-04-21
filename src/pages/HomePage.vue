<template>
  <div>
    <h1 class="my-4">ホームページ</h1>

    <div :key="post.id" v-for="post in posts">
      <div class="card mb-4">
        <img
          class="card-img-top"
          v-if="post.thumb"
          :src="post.thumb"
          alt="thumbnail">
        <img
          v-else
          src="http://placehold.it/750x300">
        <div class="card-body">
          <h3 class="card-title">{{ post.title }}</h3>
          <p class="card-text">{{ post.body }}</p>

          <router-link class="btn btn-primary" :to="getUrl(post)">続きを読む</router-link>
        </div>
        <div class="card-footer text-muted">
          投稿日：{{ post.date }} 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      posts: "posts",
    }),
  },
  methods: {
    getUrl(post) {
      return `/post/${post.url}`
    }
  }
};
</script>