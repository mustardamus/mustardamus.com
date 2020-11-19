import DefaultLayout from "~/layouts/Default.vue";

require("~/main.css");

export default function(Vue) {
  Vue.component("Layout", DefaultLayout);
}
