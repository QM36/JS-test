//==================array.concat()==============
var a = ['a','b','c'];
var b = ['x','y','z'];
var c = a.concat('asd');
//console.log(c);

//====================array.join()===============
//console.log(a.join(''));

//=================array.pop()======================
// console.log(a.length);
// console.log(a.pop());
// console.log(a.length);

//=================array.push()======================

var in_array = [];
var out_array = [];
var array = function (m, n) {
	for(var j = 0; j < n; j++) {
		in_array.push(1);
	}
	for(var i = 0; i < m; i++) {
		out_array.push(in_array);
	}
} 
// array(2,4)
// console.log(out_array);

//====================array.sort()===================

var n = [24,8,15,16,23,42];
//n.sort();//n = [15,16,23,4,42,8];
n.sort(function (a, b) {
	return a - b;
})  
//console.log(n);

var by = function (name) {
        return function (o, p) {
            var a, b;
            if(typeof o === 'object' && typeof p === 'object' && o && p) {
                a = o[name];
                b = p[name];
                if(a === b) {
                    return 0;
                }
                if (typeof a === typeof b) {
                    return a < b ? -1 : 1;
                }
                return typeof a < typeof b ? -1 : 1;
            } else {
                throw {
                    name: 'Error',
                    message: 'Expected an object when sorting by' + name
                };
            }
        };
    };
    var s = [
    {first:'Joe', last: 'Besser'},
    {first:'Moe', last: 'Hpward'},
    {first:'Joe', last: 'Derita'},
    {first:'Shemp', last: 'Howard'},
    {first:'Larry', last: 'Fine'},
    {first:'Curly', last: 'Howard'},
    ];
    s.sort(by('first'));
    //console.log(s);
//========================array.splice()===========================
var r = a.splice(1, 1, 'qm');
console.log(a);
console.log(r);




