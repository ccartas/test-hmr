const chartsMixin = {
  methods: {
    addChartData: async function() {
      const chartType = "SCATTER_PLOT";
      await this.$store.dispatch("chart/addChartData", chartType);
      await this.$router.replace({ path: "/charts" });
    },
  },
};
export default chartsMixin;
