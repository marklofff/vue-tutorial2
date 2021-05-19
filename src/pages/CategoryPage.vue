<template>
  <div>
    <h1 class="my-4">{{ getCategoriesPosts.title }}</h1>

    <div
      :key="post.id"
      v-for="post in getCategoriesPosts.posts"
    >
      <div class="card mb-4">
        <img
          class="card-img-top"
          v-if="post.thumbnail"
          :src="post.thumbnail"
          alt="thumbnail"
        >
        <img
          v-else
          src="http://placehold.it/750x300"
        >
        <div class="card-body">
          <h3 class="card-title">{{ post.title }}</h3>
          <div
            class="card-text"
            v-html="post.body"
          ></div>

          <router-link
            class="btn btn-primary"
            :to="getUrl(post)"
          >続きを読む</router-link>
        </div>
        <div class="card-footer text-muted">
          投稿日：{{ post.publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import axios from "@/axios"

export default {
  computed: {
    ...mapGetters(["getCategoriesPosts"]),
    ...mapState({
      categoriesPosts: "categoriesPosts"
    })
  },
  methods: {
    getUrl(post) {
      return `/post/${post.url}`
    }
  },
  async created() {
    // Destructuring assignment
    // 分割代入
    const { data } = await axios.get('https://maruchan0110.microcms.io/api/v1/categories', {
      headers: {
        "X-API-KEY": "78821ada-5ac2-4860-bbc0-4d7899cd0308"
      },
      params: {
        ids: this.$route.params.id
      }
    })
    this.$store.dispatch('setCategoriesPosts', data.contents[0])
  }
};
</script>