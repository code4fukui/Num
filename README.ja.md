# Num

Numは数値の表示を便利にするためのJavaScriptライブラリです。主な機能は以下の通りです。

## 機能

- `addComma(n, digits = null)`: 数値に3桁区切りのカンマを付与する
- `removeComma(s)`: 数値文字列からカンマを削除する
- `fixnum(n, beam, digits)`: 数値を指定桁数で整形する
- `fixfloat(n, digits)`: 小数点以下の桁数を指定して整形する
- `fixbig(n, mega = false)`: 大きな数値を簡易表示する

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