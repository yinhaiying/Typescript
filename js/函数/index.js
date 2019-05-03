"use strict";
// 定义有名函数
function fn() {
    return 123;
}
console.log(fn());
// 定义匿名函数
var fn1 = function () {
    return 456;
};
console.log(fn1());
// 参数类型
function fn3(name, age) {
    return name + "\u7684\u5E74\u9F84\u662F" + age + "\u5C81";
}
console.log(fn3('小明', 25));
function fn4() {
    console.log('这是一个没有返回值的函数');
}
console.log(fn4());
function fn5(name, age) {
    if (age) {
        console.log(name + "\u7684\u5E74\u9F84\u662F" + age);
    }
    else {
        console.log("" + name);
    }
}
fn5('小红');
fn5('小红', 20);
function fn6(name, age) {
    if (age === void 0) { age = 50; }
    if (age) {
        console.log(name + "\u7684\u5E74\u9F84\u662F" + age);
    }
    else {
        console.log("" + name);
    }
}
fn6('小明');
fn6('小明', 20);
// 剩余参数
// function sum(a:number,b:number,c:number):number{
//   return a + b + c;
// }
// console.log(sum(1,2,3))
// console.log(sum(1,2,3,4))
// console.log(sum(1,2,3,4,5))
function sum(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
// 函数的重载
var person1 = {
    name: '小明',
    age: 24,
    sex: '男'
};
var person2 = ['小红', 26, '女'];
function fn7(person) {
    // 判断传递进来的参数类型
    if (Array.isArray(person) == true) {
        //如果是数组...
        console.log(person[0] + "\u7684\u5E74\u9F84\u662F" + person[1] + "\u6027\u522B\u662F" + person[2]);
    }
    else {
        //如果是对象...
        console.log(person.name + "\u7684\u5E74\u9F84\u662F" + person.age + "\u6027\u522B\u662F" + person.sex);
    }
}
console.log(fn7(person1));
console.log(fn7(person2));
