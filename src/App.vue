<template>
  <div id="app" class="container">
    <Navbar />

    <!-- メイン要素 -->
    <div class="row">

      <div class="col-md-8">
        <!-- 再レンダリングする部分 -->
        <router-view />
      </div>

      <div class="col-md-4">
        <categories />
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Categories from "./components/Sidebar/Categories";

export default {
  components: {
    Navbar,
    Categories
  },
  name: "App"
};
</script>