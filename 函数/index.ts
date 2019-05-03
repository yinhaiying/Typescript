

// 定义有名函数
function fn():number{
  return 123;
}
console.log(fn())
// 定义匿名函数
let fn1 = function():number{
  return 456;
}
console.log(fn1())

// 参数类型

function fn3(name:string,age:number):string{
  return `${name}的年龄是${age}岁`
}
console.log(fn3('小明',25))

function fn4():void{
  console.log('这是一个没有返回值的函数')
}
console.log(fn4())


function fn5(name:string,age?:number):void{
  if(age){
    console.log(`${name}的年龄是${age}`);
  }else{
    console.log(`${name}`);
  }
}
fn5('小红')
fn5('小红',20)

function fn6(name:string,age:number = 50):void{
  if(age){
    console.log(`${name}的年龄是${age}`);
  }else{
    console.log(`${name}`);
  }
}
fn6('小明')
fn6('小明',20)


// 剩余参数
// function sum(a:number,b:number,c:number):number{
//   return a + b + c;
// }
// console.log(sum(1,2,3))
// console.log(sum(1,2,3,4))
// console.log(sum(1,2,3,4,5))


function sum(a:number,...rest:number[]):number{
    let sum = 0;
    for(let i = 0;i < rest.length;i++){
      sum += rest[i]
    }
    return sum;
}
console.log(sum(1,2,3))
console.log(sum(1,2,3,4))
console.log(sum(1,2,3,4,5))

// 函数的重载
const person1 = {
  name:'小明',
  age:24,
  sex:'男'
}
const person2 = ['小红',26,'女']

function fn7(person:[string,number,string]):string;
function fn7(person:object):string;
function fn7(person:any):any{
  // 判断传递进来的参数类型
  if(Array.isArray(person) == true){
    //如果是数组...
    console.log(`${person[0]}的年龄是${person[1]}性别是${person[2]}`)
  }else{
    //如果是对象...
    console.log(`${person.name}的年龄是${person.age}性别是${person.sex}`)
  }
}
console.log(fn7(person1))
console.log(fn7(person2))
