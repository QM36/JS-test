// var mammal = function () {
// 	this.name = name;
// };
// mammal.prototype.get_name = function(){
// 	return this.name;
// };
// mammal.prototype.says = function(){
// 	return this.saying || '';
// };

// var mymammal = new mammal('Herb the mammal');
// var name = mymammal.get_name();

// var cat = function (name) {//这里写的是构造函数
// 	this.name = name;
// 	this.saying = 'meow';
// };
// cat.prototype = new mammal ();

// cat.prototype.purr = function (n) {
// 	var i, s = '';
// 	for (i = 0; i < n; i ++) {
// 		if (s) {
// 			s += '-';
// 		}
// 		s += 'r';
// 	}
// 	return s;
// };
// cat.prototype.get_name = function () {
// 	return this.says() + ' ' + this.name + ' ' + this.says();
//  };
// var mycat = new cat('henrietta');
// var says = mycat.says();
// console.log(says);
// var purr = mycat.purr(5);
// console.log(purr);
// var name = mycat.get_name();
// console.log(name);


var myMammal =  {
    name : 'herb the mammal',
    get_name : function () {
        return this.name;
    },
    says : function () {
        return this.saying || '';
    }
};
var myCat = Object.create(myMammal);
myCat.name = 'henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
    return 'r'.padEnd(2 * n - 1, '-r');
};
myCat.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};

var says = myCat.says();
console.log(says);
var purr = myCat.purr(5);
console.log(purr);
var name = myCat.get_name();
console.log(name);



















