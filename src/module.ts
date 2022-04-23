import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin } from "@nuxt/kit";
import defu from "defu";

export interface ModuleOptions {
  /**
   * Your LogSnag API Token -> https://app.logsnag.com/dashboard/settings/api
   * @default process.env.LOGSNAG_API_TOKEN
   * @type string
   */
  token?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-logsnag",
    configKey: "logsnag",
    compatibility: {
      nuxt: "^3.0.0 || ^2.16.0",
      bridge: true,
    },
  },
  defaults: {
    token: process.env.LOGSNAG_API_TOKEN,
  },
  setup(options, nuxt) {
    if (!options.token) {
      throw new Error("Missing LogSnag API Token");
    }
    nuxt.options.publicRuntimeConfig.logsnag = defu(
      nuxt.options.publicRuntimeConfig.logsnag,
      {
        token: options.token,
      }
    );
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, "plugin"));

    nuxt.hook("autoImports:dirs", (dirs) => {
      dirs.push(resolve(runtimeDir, "composables"));
    });
  },
});
