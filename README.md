# Num

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A JavaScript library for formatting numbers.

## Features
- `addComma(n, digits = null)`: Add commas to a number and optionally format decimal places.
- `removeComma(s)`: Remove commas from a number string.
- `fixnum(n, beam, digits)`: Format a number to a fixed width with optional decimal places.
- `fixfloat(n, digits)`: Format a floating-point number to a fixed number of decimal places.
- `fixbig(n, mega = false)`: Format a large number with appropriate units (e.g. 10,000 -> 1.00万).

## Usage

```js
import { fixnum } from "https://code4fukui.github.io/Num/Num.js";

console.log(fixnum(1, 3)); // 001
```
or
```js
import { Num } from "https://code4fukui.github.io/Num/Num.js";

console.log(Num.fixnum(1, 3)); // 001
```

## Test

```sh
deno test
```

## License

MIT License