import { LogSnagPublishOptions } from "../types";
import { useNuxtApp, useRuntimeConfig } from "#app";
const endpoint = "https://api.logsnag.com/v1/log";

export const useLogSnag = () => {
  const nuxt = useNuxtApp();
  const config = useRuntimeConfig();

  const publishEvent = async (data: LogSnagPublishOptions) => {
    try {
      return await $fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.logsnag.token}`,
        },
        body: data,
      });
    } catch (err: any) {
      console.error(err);
      throw err;
    }
  };

  return {
    publishEvent,
  };
};
