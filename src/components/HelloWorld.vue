<template>
  <div class="hello">
    <button @click="increment()">加算</button>
    <button @click="decrement()">減算</button>
    {{ count }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },

    ...mapGetters([
      'count'
    ])
  },
  methods: {
    // increment() {
    //   // step 1
    //   this.$store.dispatch("increment");
    // },
    // decrement() {
    //   this.$store.dispatch("decrement");
    // },
    ...mapActions([
      'increment',
      'decrement'
    ])

    // this.increment() は this.$store.dispatch('increment') を実行してるのと同じ
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
