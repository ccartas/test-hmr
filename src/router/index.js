import { createRouter, createWebHistory } from "vue-router";
import TreeView from "./../components/TreeView";
import ChartingView from "./../components/ChartingView";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "tree",
      component: TreeView,
    },
    {
      path: "/charts",
      name: "charts",
      component: ChartingView,
    },
  ],
});
router.push("/");
export default router;
