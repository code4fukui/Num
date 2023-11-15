export const addComma = (n, digits = null) => {
  const flg = n < 0;
  if (flg) {
    n = -n;
  }
  if (isNaN(parseFloat(n))) {
    return n;
  }
  let s = "" + parseInt(n);
  for (let i = 3; i < s.length; i += 4) {
    s = s.substring(0, s.length - i) + "," + s.substring(s.length - i);
  }
  if (digits > 0) {
    const f = parseFloat(n) - parseInt(n);
    s += "." + fixnum(Math.floor(f * Math.pow(10, digits)), digits);
  }
  if (flg) {
    return "-" + s;
  }
  return s;
};
export const removeComma = (s) => {
  if (s.length == 0)
    return s;
  const s2 = s.replace(/,/g, "");
  const n = parseFloat(s2);
  if (!isNaN(n))
    return n;
  return s;
};
export const fixnum = function(n, beam, digits = null) {
  const flg = n < 0;
  if (flg) {
    n = -n;
  }
  const f = parseFloat(n) - parseInt(n);
  n = parseInt(n);
  let s = "00000000000000000" + n;
  s = s.substring(s.length - beam);
  if (digits > 0) {
    s += "." + fixnum(Math.floor(f * Math.pow(10, digits)), digits);
  }
  if (flg) {
    return "-" + s;
  }
  return s;
};
export const fixfloat = (d, digits = 0) => {
  const fixed = Math.pow(10, digits);
  return (Math.floor(d * fixed) / fixed).toFixed(digits);
  //return d.toFixed(digits); // return rounded value
};
export const fixbig = (n, mega = false) => {
  const minus = n < 0 ? "-" : "";
  if (minus) {
    n = -n;
  }
  const units = mega ? ["万", "億", "兆", "京"] : ["", "万", "億", "兆"];
  if (mega) {
    n *= 100;
  }
  if (n < 10000) {
    return minus + n + units[0];
  } else if (n < 100000) {
    return minus + Num.fixfloat(n / 10000, 2) + units[1];
  } else if (n < 1000000) {
    return minus + Num.fixfloat(n / 10000, 1) + units[1];
  } else if (n < 10000000) {
    return minus + Num.fixfloat(n / 10000, 0) + units[1];
  } else if (n < 100000000) {
    //return Math.floor(n / 10000) + units[1]; // 1000億
    return minus + Num.fixfloat(n / 10000 / 10000, 2) + units[2]; // 0.10兆
  } else if (n < 1000000000) {
    return minus + Num.fixfloat(n / 10000 / 10000, 2) + units[2];
  } else if (n < 10000000000) {
    return minus + Num.fixfloat(n / 10000 / 10000, 1) + units[2];
  } else if (n < 100000000000) {
    return minus + Num.fixfloat(n / 10000 / 10000, 0) + units[2];
  } else if (n < 1000000000000) {
    //return Math.floor(n / 10000 / 10000) + units[2];
    return minus + Num.fixfloat(n / 10000 / 10000 / 10000, 2) + units[3];
  } else if (n < 10000000000000) {
    return minus + Num.fixfloat(n / 10000 / 10000 / 10000, 2) + units[3];
  } else if (n < 100000000000000) {
    return minus + Num.fixfloat(n / 10000 / 10000 / 10000, 1) + units[3];
  } else if (n < 1000000000000000) {
    return minus + Num.fixfloat(n / 10000 / 10000 / 10000, 0) + units[3];
  } else {
    return minus + Math.floor(n / 10000 / 10000 / 10000) + units[3];
  }
  /*
  if (yen_m > 1000 * 10000) {
    return Num.fixfloat(yen_m / 1000 / 10000, 2) + "京円";
  }
  if (yen_m > 1000) {
    return Math.floor(yen_m / 1000) + "兆円";
  }
  return Num.fixfloat(yen_m / 1000, 1) + "兆円";
  */
};

export const Num = {
  addComma,
  removeComma,
  fixnum,
  fixfloat,
	fixbig,
};
