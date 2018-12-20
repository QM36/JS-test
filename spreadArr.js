function spread (arr) {
	var string = arr.toString();
	var newarr = string.split(",");
	var lastarr = newarr.map( function(item) {
		return Number(item);
	});
	console.log(lastarr);
}
var arr = [1,2,[1,[2,3,4]]];
spread (arr);
