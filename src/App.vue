<template>
  <div id="app">
    <HomeView />
  </div>
</template>

<script>
import Home from "@/views/HomeView.vue";
export default {
  name: "App",
  components: { HomeView: Home },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style>
@import "@/assets/css/app.css";

.required-label:after {
  content: " *";
  color: red;
}
</style>
