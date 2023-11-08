import { Num } from "./Num.js";
import * as t from "https://deno.land/std/testing/asserts.ts";

Deno.test("addComma", () => {
  t.assertEquals(Num.addComma(1000), "1,000");
  t.assertEquals(Num.addComma(1000000), "1,000,000");
  t.assertEquals(Num.addComma(100), "100");
  t.assertEquals(Num.addComma(-100), "-100");
  t.assertEquals(Num.addComma(-1000), "-1,000");
  t.assertEquals(Num.addComma(-1000000), "-1,000,000");
  t.assertEquals(Num.addComma(1000.123), "1,000"); // omit float
  t.assertEquals(Num.addComma(1000.123, 1), "1,000.1");
  t.assertEquals(Num.addComma(1000.123, 2), "1,000.12");
  t.assertEquals(Num.addComma(1000.123, 3), "1,000.123");
  t.assertEquals(Num.addComma(1000.123, 4), "1,000.1230");
});
Deno.test("removeComma", () => {
  t.assertEquals(Num.removeComma("1,000"), 1000);
  t.assertEquals(Num.removeComma("1,000,000"), 1000000);
  t.assertEquals(Num.removeComma("100"), 100);
  t.assertEquals(Num.removeComma("-100"), -100);
  t.assertEquals(Num.removeComma("-1000"), -1000);
  t.assertEquals(Num.removeComma("-1000000"), -1000000);
  t.assertEquals(Num.removeComma("-1000000.123"), -1000000.123);
});
Deno.test("fixnum", () => { // same as toFixed
  t.assertEquals(Num.fixnum(1, 3), "001");
  t.assertEquals(Num.fixnum(999, 3), "999");
  t.assertEquals(Num.fixnum(1000, 3), "000");
  t.assertEquals(Num.fixnum(1, 2), "01");
  t.assertEquals(Num.fixnum(1, 1), "1");
  t.assertEquals(Num.fixnum(-1, 2), "-01");
  t.assertEquals(Num.fixnum(-99, 2), "-99");
  t.assertEquals(Num.fixnum(-100, 2), "-00");
  t.assertEquals(Num.fixnum(1.123, 2), "01"); // omit float
  t.assertEquals(Num.fixnum(1.123, 2, 1), "01.1");
  t.assertEquals(Num.fixnum(1.123, 2, 2), "01.12");
  t.assertEquals(Num.fixnum(1.123, 2, 3), "01.123");
  t.assertEquals(Num.fixnum(1.123, 2, 4), "01.1230");
});
Deno.test("fixfloat", () => {
  t.assertEquals(Num.fixfloat(1, 3), "1.000");
  t.assertEquals(Num.fixfloat(1), "1");
  t.assertEquals(Num.fixfloat(1.123, 1), "1.1");
  t.assertEquals(Num.fixfloat(1.123, 2), "1.12");
  t.assertEquals(Num.fixfloat(1.123, 3), "1.123");
  t.assertEquals(Num.fixfloat(1.123, 4), "1.1230");
  t.assertEquals(Num.fixfloat(-1.123, 4), "-1.1230");
  t.assertEquals(Num.fixfloat(-1000000.123, 4), "-1000000.1230");
});
Deno.test("fixbig", () => {
  t.assertEquals(Num.fixbig(1), "1");
  t.assertEquals(Num.fixbig(10000), "1.00万");
  t.assertEquals(Num.fixbig(100000), "10.0万");
  t.assertEquals(Num.fixbig(1000000), "100万");
  t.assertEquals(Num.fixbig(10000000), "0.10億");
  t.assertEquals(Num.fixbig(100000000), "1.00億");
  t.assertEquals(Num.fixbig(1000000000), "10.0億");
  t.assertEquals(Num.fixbig(10000000000), "100億");
  t.assertEquals(Num.fixbig(100000000000), "0.10兆");
});
Deno.test("fixbig mega", () => {
  t.assertEquals(Num.fixbig(1, true), "100万");
  t.assertEquals(Num.fixbig(10, true), "1000万");
  t.assertEquals(Num.fixbig(100, true), "1.00億");
  t.assertEquals(Num.fixbig(1000, true), "10.0億");
  t.assertEquals(Num.fixbig(10000, true), "100億");
  t.assertEquals(Num.fixbig(100000, true), "0.10兆");
  t.assertEquals(Num.fixbig(1000000, true), "1.00兆");
  t.assertEquals(Num.fixbig(10000000, true), "10.0兆");
  t.assertEquals(Num.fixbig(100000000, true), "100兆");
  t.assertEquals(Num.fixbig(1000000000, true), "0.10京");
  t.assertEquals(Num.fixbig(10000000000, true), "1.00京");
  t.assertEquals(Num.fixbig(100000000000, true), "10.0京");
  t.assertEquals(Num.fixbig(1000000000000, true), "100京");
  t.assertEquals(Num.fixbig(10000000000000, true), "1000京");
});
Deno.test("fixbig minus", () => {
  t.assertEquals(Num.fixbig(-1, true), "-100万");
  t.assertEquals(Num.fixbig(-1, false), "-1");
  t.assertEquals(Num.fixbig(-100000000000, true), "-10.0京");
});
