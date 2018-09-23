// Array.method('reduce',function(f,value) {
//     var i;
//     for(i = 0; i < this.length; i ++) {
//         value = f(this[i], value);
//     }
//     return value;
// });

var data = [4, 8, 15, 16, 23, 42];
data.reduce = function (f, value) {
	var i;
	for(i = 0; i < this.length; i++) {
		value = f(this[i],value);
	}
	return value;
};
var add = function (a, b) {
	return a + b;
};
var mult = function (a, b) {
	return a * b;
};
data.total = function () {
	return data.reduce(add, 0);
};
console.log(data.total());