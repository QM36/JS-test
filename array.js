var number_object = {
	'0' : 'zero',
	'1' : 'one',
	'2' : 'two'
};

var array = ['zero','one','two'];

//console.log(array[0]);


var myArray = [];
//console.log(myArray.length) //0

myArray[10000] = true;
//console.log(myArray.length) //10001

number = ['zero','one','two'];
console.log(number.length);
number[number.length] = 'three';
number.push('go');
console.log(number);
number.splice(2, 1,'five');
console.log(number);
for(var index in number) {
	//console.log(number[index]);
}
number.forEach(function(value) {
	//console.log(value);
});
var is_array = function (value) {
    return Object.prototype.toString.apply(value) === '[object Array]';
};
console.log(is_array(number));