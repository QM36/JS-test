function getTime (time) {
	var date = new Date();
	var datestamp = date.getTime(); //获取此时的时间戳
	var timestamp;
	if(typeof time == "number") {
		timestamp = time; //否则不变
	} else {
		timestamp = time.getTime();
	}
	var value = datestamp - timestamp; //求得时间差
	if(value  <= 59 * 1000) {
		console.log("刚刚");
	} else if (value < 2 * 60 * 60 * 1000) {//注意代码可读性
		console.log("一分钟前");
	} else if (value < 24 * 60 * 60 * 1000) {
		console.log("两小时前");
	} else if (value < 48 * 60 * 60 * 1000) {
		console.log("一天前");
	} else {//这里还要把时间戳转换为时间
		var newdate = new Date(timestamp);
		var year = newdate.getFullYear();
		var month = newdate.getMonth();
		var day = newdate.getDate();
		console.log(year + "-" + month + "-" + day);
	}
}
var date = new Date(2008, 11, 20, 10, 45, 55);
getTime(date);
