# Num

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple JavaScript/Deno library for number formatting, including comma separation, zero-padding, and compacting large numbers with Japanese units.

## API

### `addComma(n, digits = null)`

Adds thousand separators to a number. By default, it truncates any decimal part.

-   `n` (number): The number to format.
-   `digits` (number | null): The number of decimal places to include. If specified, the output is padded with zeros to match the length.

```js
import { Num } from "https://code4fukui.github.io/Num/Num.js";

console.log(Num.addComma(1234567.89)); // "1,234,567"
console.log(Num.addComma(-1000));      // "-1,000"
console.log(Num.addComma(1000.123, 4)); // "1,000.1230"
```

### `removeComma(s)`

Removes thousand separators from a string and parses it into a number.

-   `s` (