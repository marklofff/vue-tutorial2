<template>
  <b-card title="カテゴリー">
    <b-card-body>
      <div class="row">
        <div class="col-lg-6">
          <ul class="list-unstyled mb-0">
            <li :key="item.id" v-for="item in items">
              <router-link :to="item.url">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "フロントエンド系", url: "/categories/frotnend" },
        { name: "バックエンド系", url: "/categories/backend" },
      ],
    };
  },
};
</script>