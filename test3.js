let times = 0;

var hanoi = function (disc,src,aux,dst) {
	times++;
	if (disc > 0) {
		hanoi(disc - 1,src,dst,aux);
		console.log('move disc ' + disc + ' from ' + src + ' to ' + dst);
		hanoi(disc - 1,aux,src,dst);
	}
}

var num = parseInt(process.argv[2], 10);
if (isNaN(num)) {
	console.error('传参必须是数字');
} else {
	hanoi(num,'A','B','C');
	console.log(`多少次：${times}`);
}
