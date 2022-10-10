# spatula

<p align="left">
  <a><img src="https://img.shields.io/github/license/Abyssers/spatula"></a>
  <a><img src="https://img.shields.io/github/workflow/status/Abyssers/spatula/publish"></a>
  <a><img src="https://img.shields.io/github/issues/Abyssers/spatula"></a>
  <a><img src="https://img.shields.io/github/forks/Abyssers/spatula"></a>
  <a><img src="https://img.shields.io/github/stars/Abyssers/spatula"></a>
</p>

A handy utensil for javascript cooking

## Quik Start

```bash
npm install @abysser/spatula
```

## Usage

CommonJs:

```js
const { isEq } = require("@abysser/spatula");
console.log(isEq({ name: "xavier" }, { name: "xavier" })); // => true
```

ES Module:

```js
import { isEq } from "@abysser/spatula";
console.log(isEq({ name: "xavier" }, { name: "xavier" })); // => true
```

## License

[MIT](./LICENSE)

Copyright 2022 Abyssers
