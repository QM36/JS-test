Function.prototype.method = function (name,func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer',function() {
    return Math[this < 0 ? 'ceiling' : 'floor'](this); 
});

console.log((-10 / 3).integer());