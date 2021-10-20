<template>
  <div>
    <div @click="goBack">Go Back</div>
    <div v-for="(data, index) in chartData" :key="index">{{ data }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
const ChartingView = {
  name: "charting-view",
  computed: {
    ...mapState({
      chartData: (state) => state.chart.chartData,
    }),
  },
  methods: {
    goBack: async function() {
      await this.$router.replace({ path: "/" });
    },
  },
};
export default ChartingView;
</script>
