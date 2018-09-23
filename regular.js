//=========================例一==================================

var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
//var url = "http://www.ora.com:80/goodparts?#fragment";
var url = `https://www.baidu.com/?id=1`;
var result = parse_url.exec(url);
var names = ['url','scheme','slash','host','port','path','query','hash'];
var blanks = '  ';
var i;
console.log(result);
// for(i = 0; i < names.length; i ++) {
//     console.log(names[i] + ':' + blanks.substring(names[i].length),result[i]);
// }


//=========================例二==================================

// var parse_numbser = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d)?$/i;
// var test = function (num) {
//     console.log(parse_number.test(num));
// };
// test('-1');//true
// test('number');//false
// test('1.1');//true
// test('1.1.1.1');//false
// test('123.34E-67');//true
// test('123.45F-67');//false