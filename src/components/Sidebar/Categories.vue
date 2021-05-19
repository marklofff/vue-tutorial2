<template>
  <b-card title="カテゴリー">
    <b-card-body>
      <div class="row">
        <div class="col-lg-6">
          <ul class="list-unstyled mb-0">
            <li
              :key="item.id"
              v-for="item in categories"
            >
              <router-link :to="getCategoryURL(item)">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { mapState } from 'vuex';
import axios from '@/axios';

export default {
  computed: {
    ...mapState({
      categories: "categories"
    })
  },
  methods: {
    getCategoryURL(category) {
      return "/categories/" + category.title_url
      // return `/categories/${category.title_url}`
    }
  },
  async created() {
    const { data } = await axios.get('https://maruchan0110.microcms.io/api/v1/categories', {
      headers: {
        "X-API-KEY": "78821ada-5ac2-4860-bbc0-4d7899cd0308"
      }
    })

    this.$store.dispatch('setCategories', data.contents)
  }
};
</script>