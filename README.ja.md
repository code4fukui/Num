# Num

Numは数値の表示を便利にするためのJavaScriptライブラリです。数値にカンマの追加・削除、整数部・小数部の調整、大きな数値の簡易表示などを行うことができます。

## 機能

- `addComma(n, digits = null)`: 数値に3桁区切りのカンマを付与し、オプションで小数点以下の桁数を指定できます。
- `removeComma(s)`: 数値文字列からカンマを削除します。
- `fixnum(n, beam, digits)`: 数値を指定桁数で整形します。
- `fixfloat(n, digits)`: 小数点以下の桁数を指定して整形します。
- `fixbig(n, mega = false)`: 大きな数値を簡易表示します。メガ表示にも対応しています。

## 使い方

```js
import { fixnum } from "https://code4fukui.github.io/Num/Num.js";

console.log(fixnum(1, 3)); // 001
```
または
```js
import { Num } from "https://code4fukui.github.io/Num/Num.js";

console.log(Num.fixnum(1, 3)); // 001
```

## テスト

```sh
deno test
```

## ライセンス

MITライセンスで公開されています。