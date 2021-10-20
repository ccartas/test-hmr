<template>
  <div id="container">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TreeView from "./components/TreeView.vue";
import ChartingView from "./components/ChartingView.vue";

export default {
  name: "App",
  components: {
    "tree-view": TreeView,
    "charting-view": ChartingView,
  },
  computed: {
    ...mapState({
      chartData: (state) => state.chart.chartData,
    }),
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
