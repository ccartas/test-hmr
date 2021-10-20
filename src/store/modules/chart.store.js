const state = {
  chartData: [],
};

const actions = {
  addChartData(context, payload) {
    return new Promise((resolve) => {
      context.state.chartData.push(payload);
      context.state.chartData.push(payload);
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
