"use strict";
// 类型校验
var a = 12;
// a = 'hello'  报错'num' refers to a value, but is being used as a type
var flag = false;
console.log(flag);
flag = true;
flag = false;
// flag = 1;  在js中1能够代表true。但是在ts中1表示Number类型。因此会出现错误。
// 也就是说在ts中boolean类型只有true和false.
// 数字类型(number)
var num = 12;
num = 12.4444;
console.log(num);
// 字符串类型(string)
var str = 'helloworld';
console.log(str);
// 数组类型(Array)
// 第一种定义数组的方式
var arr1 = [1, 2, 3];
console.log(arr1);
var arr2 = ['hello', 'world'];
console.log(arr2);
// 第二种定义数组的方式
var arr3 = [11, 22, 33];
// 元组类型(tuple)  属于数组的一种
var tuple1 = ['hello', 12];
console.log(tuple1[0]);
// let tuple2:[string,number] = [20,'world']
// 枚举类型(enum)
var data;
(function (data) {
    data[data["pedding"] = 0] = "pedding";
    data[data["success"] = 100] = "success";
    data[data["error"] = 101] = "error";
})(data || (data = {}));
console.log(data.pedding); // 0
console.log(data.success); // 100
console.log(data.error); //101
// 任意类型(any)
var anyVar;
anyVar = 123;
console.log(anyVar);
anyVar = [1, 2, 3];
console.log(anyVar);
var list = [1, 'hello', false];
list[1] = true;
console.log(list[1]);
// Undefined
// let u ;js
// console.log(u)  // undefined
var u;
// console.log(u) // Variable 'u' is used before being assigned
var u2;
console.log(u2);
u2 = 123;
console.log(u2);
//
var n;
n = (function () { throw new Error('抛出异常'); })();
console.log(n); // Uncaught Error: 抛出异常
// 如果有确定的值，那么使用never类型就会报错
var n1;
create({ prop: 0 }); // OK
create(null); // OK
create([1, 2, 3]);
create(function () { });
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
