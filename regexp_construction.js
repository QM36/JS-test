function make_a_matcher () {
    return /(?:a)+/gi; //返回的是一个正则对象
}
var string = 'sddad';
var x = make_a_matcher().exec(string);
//var y = make_a_matcher();//x和y是相同对象

//x.lastIndex = 10;
console.log(x);
// var test = function (string) {
// 	console.log(x.test(string))
// }
//console.log(y.lastIndex);
// function test_more(argument) {
// 	console.log(x.test_more(argsument));
// }
// test(string);
// test_more(string);

