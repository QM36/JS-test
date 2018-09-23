Array.dim = function (dimension, initial) {
    var a = [], i;
    for(i = 0; i < dimension; i++) {
        a[i] = initial;
    }
    return a;
}
var myArray = Array.dim(10,0);
//console.log(myArray);

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for(i = 0; i < m; i ++) {
        a = [];
        for(j = 0; j < n; j ++) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
} 
var mymatrix = Array.matrix(4, 4, 0);
//console.log(mymatrix);

Array.identity = function (n) { //构造单位矩阵
    var i ,mat = Array.matrix(n, n, 0);
    for(i = 0; i < n ; i ++) {
        mat[i][i] = 1;
    }
    return mat
}
mymatrix = Array.identity(4);
console.log(mymatrix);