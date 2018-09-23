//======================string.charAt()===================================
var a = 'asdhg';
console.log('string.charAt() : ' + a.charAt(1));

//========================string.charCodeAt()=============================
console.log('string.charCodeAt() : ' + a.charCodeAt(1));

//========================string.concat()==============================
console.log('string.concat() : ' + 'c'.concat('a','t','!'));
console.log('+ : ' + 'c' + 'a' + 't' + '!');

//=========================string.indexOf()========================================
console.log('string.indexOf() : ' + a.indexOf('hg',1));

//==========================string.localeCompare()==========================================
var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
    m.sort(function (a,b) {
        return a.localeCompare(b);
    });
console.log(m);

//=========================string.search()===============================================
var oldareacode = /\((\d{3})\)/g;
var p = '(555)666-1212'.replace(oldareacode,'$1-');
console.log(p);

//=============================string.search()=======================================
var text = 'and on it he says "any damn fool could';
var pos = text.search(/["']/);
console.log(pos);

//===============================string.slice()=============================
console.log(text.slice(0,3));

//=============================string.split()====================================
var digits = '123456789';
var a = digits.split('',5);
console.log(a);

//=========================string.fromCharCode()============================
var a = String.fromCharCode(102,97,116,32,112,105,103,0xd83d);

console.log(a);