<template>
  <div>
    Nuxt module playground!
    <button style="margin-top: 25px" @click="logSnagTest">Try LogSnag</button>
  </div>
</template>

<script setup>
const { publishEvent } = useLogSnag();
const logSnagTest = async () => {
  try {
    var event = {
      project: "test",
      channel: "nuxttest",
      event: "Tested Module!",
      description: "Hey, I just tested the Nuxt3 LogSnag module!",
      icon: "🎉",
      notify: true,
    };
    var publishedEvent = await publishEvent(event);
    console.log("Sended event: " + publishedEvent);
  } catch (e) {}
};
</script>
