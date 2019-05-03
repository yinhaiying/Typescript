// 类型校验
let a:number = 12;
// a = 'hello'  报错'num' refers to a value, but is being used as a type



let flag:boolean = false;
console.log(flag)
flag = true;

flag = false;

// flag = 1;  在js中1能够代表true。但是在ts中1表示Number类型。因此会出现错误。
// 也就是说在ts中boolean类型只有true和false.

// 数字类型(number)
let num:number = 12;
num = 12.4444;
console.log(num)


// 字符串类型(string)

let str:string = 'helloworld';
console.log(str)

// 数组类型(Array)

// 第一种定义数组的方式
let arr1:number[] = [1,2,3];
console.log(arr1)
let arr2:string[] = ['hello','world'];
console.log(arr2)

// 第二种定义数组的方式

let arr3:Array<number> = [11,22,33];


// 元组类型(tuple)  属于数组的一种
let tuple1:[string,number] = ['hello',12]
console.log(tuple1[0])
// let tuple2:[string,number] = [20,'world']

// 枚举类型(enum)
enum data {
  pedding,
  success = 100,
  error
}
console.log(data.pedding)  // 0
console.log(data.success)  // 100
console.log(data.error)    //101

// 任意类型(any)

let anyVar:any;
anyVar = 123;
console.log(anyVar)
anyVar = [1,2,3];
console.log(anyVar)

let list:any[] = [1,'hello',false];
list[1] = true;
console.log(list[1])

// Undefined

// let u ;js
// console.log(u)  // undefined

let u:number;
// console.log(u) // Variable 'u' is used before being assigned
let u2:number|undefined;
console.log(u2)
u2 = 123;
console.log(u2)


//
let n:never;
n = (() => {throw new Error('抛出异常')})()
console.log(n)  // Uncaught Error: 抛出异常

// 如果有确定的值，那么使用never类型就会报错

let n1:never;
// n1 = 123;


// Object类型
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK
create([1,2,3])
create(function(){})
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
