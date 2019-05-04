"use strict";
function getInfo1(name) {
    return name;
}
getInfo1('张三');
// getInfo1(123);
function getInfo2(value) {
    return value;
}
console.log(getInfo2('张三'));
console.log(getInfo2(123));
function getInfo3(value) {
    return value;
}
// 第一种调用方式
console.log(getInfo3('李四'));
getInfo3(24);
// 第二种调用方式
console.log(getInfo3('王五'));
getInfo3(26);
// 泛型类
var Sort = /** @class */ (function () {
    function Sort(list) {
        this.list = list;
    }
    Sort.prototype.sort = function (list) {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (min > this.list[i]) {
                min = this.list[i];
            }
        }
        return min;
    };
    return Sort;
}());
var mySort = new Sort([1, 6, 2, 4, 5]);
console.log(mySort.sort([1, 6, 2, 4, 0]));
var Sort2 = /** @class */ (function () {
    function Sort2(list) {
        this.list = list;
    }
    Sort2.prototype.sort = function (list) {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (min > this.list[i]) {
                min = this.list[i];
            }
        }
        return min;
    };
    return Sort2;
}());
// number类型
var mySort2 = new Sort2([1, 6, 2, 4, 5]);
console.log(mySort2.sort([1, 6, 2, 4, 0]));
// string类型
var mySort3 = new Sort2(['a', 'f', 'z', 'd']);
console.log(mySort3.sort(['a', 'f', 'z', 'd']));
