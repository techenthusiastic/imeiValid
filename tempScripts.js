function sumDigit(n) {
	let sum = 0;
	while (n > 0) {
		sum = sum + (n % 10);
		n = parseInt(n / 10, 10);
	}
	return sum;
}
function checkIMEI(imei) {
	let isValidIMEI = false;
	const length = imei.length;
	if (length != 15) return isValidIMEI;
	let sum = 0;
	for (let i = length; i >= 1; i--) {
		let each = imei % 10;
		// Doubling every alternate digit
		if (i % 2 == 0) {
			each = 2 * each;
			// Finding sum of the digits in case of alterante only
			sum += sumDigit(each);
		} else sum += each;
		n = parseInt(imei / 10, 10);
	}
	isValidIMEI = sum % 10 === 0;
	return isValidIMEI;
}
console.log(checkIMEI("1234567893652"));
console.log(checkIMEI("866134032560591"));
function isIMEI(s) {
	var etal = /^[0-9]{15}$/;
	if (!etal.test(s)) return false;
	sum = 0;
	mul = 2;
	l = 14;
	for (i = 0; i < l; i++) {
		digit = s.substring(l - i - 1, l - i);
		tp = parseInt(digit, 10) * mul;
		if (tp >= 10) sum += (tp % 10) + 1;
		else sum += tp;
		if (mul == 1) mul++;
		else mul--;
	}
	chk = (10 - (sum % 10)) % 10;
	if (chk != parseInt(s.substring(14, 15), 10)) return false;
	return true;
}
console.log(isIMEI("1234567893652"));
console.log(isIMEI("866134032560591"));
// fa-check
// fa-times
const imei_INP_BOX = document.getElementById("imei-inp");
const imei_INP = imei_INP_BOX.querySelector("input");
const imei_INP_Status = imei_INP_BOX.querySelector("i");
let crntClass = "fa-mobile";
imei_INP.addEventListener("input", (event) => {
	let newClass = "fa-times";
	if (isIMEI(event.target.value)) {
		newClass = "fa-check";
		imei_INP_BOX.classList.add("valid-imei");
	} else imei_INP_BOX.classList.remove("valid-imei");
	//
	imei_INP_Status.classList.add(newClass);
	imei_INP_Status.classList.remove(crntClass);
});
console.log(imei_INP_BOX, imei_INP, imei_INP_Status);
