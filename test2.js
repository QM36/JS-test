Number.method('integer',function() {
    return Math[this < 0 ? 'ceiling' : 'floor'](this); 
});

console.log((-10 / 3),integer());