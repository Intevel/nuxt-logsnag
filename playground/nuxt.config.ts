import { defineNuxtConfig } from "nuxt";
import LogSnagModule from "..";

export default defineNuxtConfig({
  modules: [LogSnagModule],
  logsnag: {
    token: "",
  },
});
