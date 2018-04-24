var add = function (a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name :'TypeError',
            message : 'add needs numbers'
        };
    }
  this.status = a + b
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var num = 0;

rl.on('line', (line) => {
    if (!line || num == 2) {
      rl.close();
    }
    num++;
    if (num == 1) {
      a = parseInt(line, 10);
    }
    if (num == 2) {
      b = parseInt(line, 10);
      var myadd = new add (a,b);
      console.log(myadd.status);
      rl.close();
    }
    
});

