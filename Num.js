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
export const fixfloat = (d, digits) => {
	return d.toFixed(digits);
};

export const Num = {
	addComma,
	removeComma,
	fixnum,
	fixfloat,
};
