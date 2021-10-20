import { createStore } from "vuex";
import ChartStoreModule from "./modules/chart.store";

const store = createStore({
  modules: {
    chart: ChartStoreModule,
  },
});

if (module.hot) {
  module.hot.accept(["./modules/chart.store"], () => {
    const newChartStoreModule = require("./modules/chart.store").default;
    store.hotUpdate({
      modules: {
        chart: newChartStoreModule,
      },
    });
  });
}
export default store;
