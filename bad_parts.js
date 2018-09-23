//=======================test==================================
var fun = function () {
	return {
		status:true
	}
}
console.log(fun());

console.log(parseInt('08'));

console.log((0.1 * 10 + 0.2 * 10) / 10);

console.log(NaN === NaN); // flase
console.log(NaN !== NaN); //true
console.log(isNaN('123'));
console.log(parseInt('12a3.1'));

var count = {};
console.log(count.constructor);//[Function: Object]
//console.log(count.a);

console.log('' == '0'); //false
console.log(0 == ''); //ture
console.log(0 == '0' );// true

console.log(false == 'false'); //false
console.log(false == '0' );//true

console.log(false == undefined );//false
console.log(false == null );//false
console.log(null == undefined );//true

console.log(' \t\r\n\ ' == 0 );// true 

var obj = {
	name : 'obj',
	id : 123,
	status: true
}
var word = 'name';
console.log(obj['name']);

console.log(new String('wwww').valueOf());

var Cat = function (name) {
　　　　this.name = name;
　　　　this.saying = 'meow' ;
　　}

var cat = new Cat('asd');
console.log(cat);
