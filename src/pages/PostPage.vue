<template>
    <div>
        <h1>投稿ページID: {{ postId }} </h1>
        <router-link to="/">トップページへ戻る</router-link>

        title： {{ post.title }}
        body： {{ post.body }}
        date: {{ post.date }}
        url: {{ post.url }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            postId: this.$route.params.id
        }
    },
    computed: {
        ...mapGetters([
            'getPost'
        ]),

        post() {
            return this.getPost(this.postId)
        }
    }
}
</script>