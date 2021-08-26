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
