var mammal = function (spec) {
	var that = {};
	that.get_name = function () {
		return spec.name;
	};
	that.says = function () {
		return spec.saying || '';
	};
	return that;
};
var mymammal = mammal({name: 'Herb'});
var cat = function (spec) {
	spec.saying = 'meow';
	var that = mammal(spec);
	that.purr = function (n) {
		return 'r'.padEnd(2 * n - 1, '-r');
	};
	that.get_name = function () {
		return that.says() + ' ' + spec.name + ' ' + that.says();
	};
	return that;
};
var mycat = cat({name : 'henrietta'});

Object.method('superior',function (name) {
	var that = this,
	method = that[name];
	return function () {
		return method.apply(that, arguments);
	};
});

var coolcat = function(spec) {
	var that = cat(spec);
	super_get_name = that.superior('get_name');
	that.get_name = function (n) {
		return 'like' + super_get_name() + 'baby';
	};
	return that;
};
var mycoolcat = coolcat({name:'bix'});
var name = mycoolcat.get_name();
console.log(name);















