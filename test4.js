var a = 3, b = 5;
var foo = function () {
   
    var bar = function () {
        var b = 7, c = 11;
        a += b + c;
        console.log('bar内a:' + a);
        console.log('bar内b:' + b);
        console.log('bar内c:' + c);
    };
    bar();
    console.log('bar外a:' + a);
    console.log('bar外b:' + b);
    // console.log('bar外c:' + c);
};
foo();