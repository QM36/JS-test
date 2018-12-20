function format (num) {
	var string = num.toString();
	var array = string.split("");
	array.splice(1, 0, ",");
	array.splice(5, 0, ",");
	array.splice(9, 0, ",");
	var newstring = array.join("");
	console.log(newstring);
}
format(1234567890.12);