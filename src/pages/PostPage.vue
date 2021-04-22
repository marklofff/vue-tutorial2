<template>
  <div>
    <h1 class="mt-4">{{ post.title }}</h1>
    <hr />
    <p>{{ post.publishedAt }}</p>
    <hr />

    <div v-html="post.body"></div>

    <div class="card my-4">
      <h5 class="card-header">コメントする：</h5>
      <div class="card-body">
        <form @submit.prevent>
          <div class="form-group">
            <textarea class="form-control" rows="4"></textarea>
          </div>
          <button @click="createComment()" class="btn btn-primary">投稿</button>
        </form>
      </div>
    </div>

    <div>
      <div class="media mt-4">
        <img class="d-flex mr-3 rounded-circle"
        src="http://placehold.it/50x50" alt="" />
        <div class="media-body">
          <h5 class="mt-0">まるまる</h5>
          いいですね！
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      postUrl: this.$route.params.url,
    };
  },
  computed: {
    ...mapGetters(["getPost"]),

    post() {
      return this.getPost(this.postUrl);
    },
  },
  methods: {
    createComment() {
      console.log("コメントを投稿する")
    }
  }
};
</script>