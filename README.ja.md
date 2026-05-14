# Num

コンマ区切り、ゼロ埋め、日本語単位での大きな数値の圧縮など、数値フォーマットのためのシンプルなJavaScript/Denoライブラリ。

## API

### `addComma(n, digits = null)`

数値に千の位の区切り文字（コンマ）を追加します。デフォルトでは小数部は切り捨てられます。

-   `n` (number): フォーマットする数値。
-   `digits` (number | null): 含める小数点以下の桁数。指定した場合、出力はその長さに合わせてゼロ埋めされます。

```js
import { Num } from "https://code4fukui.github.io/Num/Num.js";

console.log(Num.addComma(1234567.89)); // "1,234,567"
console.log(Num.addComma(-1000));      // "-1,000"
console.log(Num.addComma(1000.123, 4)); // "1,000.1230"
```

### `removeComma(s)`

文字列から千の位の区切り文字（コンマ）を削除し、数値に変換します。

-   `s` (string): 処理する文字列。

```js
import { Num } from "https://code4fukui.github.io/Num/Num.js";

console.log(Num.removeComma("1,234,567")); // 1234567
console.log(Num.removeComma("-1,000"));    // -1000
console.log(Num.removeComma("1,000.1230"));// 1000.123
```
