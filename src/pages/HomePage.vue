<template>
    <div>
        <h1>ホームページ</h1>
        <router-link to="/login">ログイン</router-link>

        <li :key="post.id" v-for="post in posts">
            <router-link :to="`/post/${post.url}`">{{ post.title }}</router-link>
        </li>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            posts: 'posts'
        })
    }
}
</script>