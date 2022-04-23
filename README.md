# nuxt-logsnag

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![License][license-src]][license-href]

> [LogSnag](https://logsnag.com) integration for [Nuxt 3](https://v3.nuxtjs.org)

- [✨ &nbsp;Release Notes](https://github.com/Intevel/nuxt-logsnag/releases)

## Features

- Nuxt 3 ready
- Easy integration
- Handy composables
- TypeScript support

## Setup

```sh
yarn add nuxt-logsnag # yarn
npm i nuxt-logsnag # npm
```

## Basic usage

Firstly, you need to add `nuxt-logsnag` to your Nuxt config.

```javascript
// nuxt.config.js

{
    modules: ["nuxt-logsnag"],
    logsnag: {
        token: "<YOUR_LOGSNAG_API_TOKEN>"
    }
}
```

Then you can start using `nuxt-logsnag` in your setup function!

```vue
<script setup>
const { publishEvent } = useLogSnag();

onMounted(async () => {
  var event = {
    project: "Test",
    channel: "nuxttest",
    event: "Tested Module!",
    description: "Hey, I just tested the Nuxt3 LogSnag module!",
    icon: "🎉",
    notify: true,
  };
  await publishEvent(event);
});
</script>
```

[![nuxt-logsnag](https://github.com/Intevel/nuxt-logsnag/blob/master/event.png?raw=true)](/)

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE) - 2022 Conner Luka Bachmann

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-logsnag/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-logsnag
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-logsnag.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-logsnag
[github-actions-ci-src]: https://github.com/intevel/nuxt-logsnag/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/intevel/nuxt-logsnag/actions?query=workflow%3Aci
[license-src]: https://img.shields.io/npm/l/nuxt-logsnag.svg
[license-href]: https://npmjs.com/package/nuxt-logsnag
