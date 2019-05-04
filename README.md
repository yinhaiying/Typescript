# Typescript
## 一、安装与自动编译
1. 安装
```
npm i -g typescript
```
2. 自动编译
- 通过tsc --init 生成tscconfig.json配置文件
```
tsc --init
```
- 修改配置文件中的outdir。outdir表示ts编译成js后的输出路径。这里我们将编译后的文件打包到js文件夹中
```
 "outDir": "./js",
```
- 通过vscode进行自动编译
```
Terminal > Run task > tsc -watch tsconfig.json
```

## 二、数据类型

Typescript中为了使代码编写更加规范，更加易于维护。
增加了**类型校验**。所谓类型校验就是定义的变量始终只能是定义时指定的数据类型。也就是说定义变量的时候必须指定类型。当然typescript也支持原生js的写法。

### 布尔类型(boolean)
```
let flag:boolean = false;
console.log(flag)
flag = true;

flag = false;

// flag = 1;  在js中1能够代表true。但是在ts中1表示Number类型。因此会出现错误。
// 也就是说在ts中boolean类型只有true和false.
```

### 数字类型(number)
```
let num:number = 12;
num = 12.4444;
console.log(num)
```

### 字符串类型(string)
```
let str:string = 'helloworld';
console.log(str)
```

### 数组类型(Array)
typescript中定义数组有两种方式：
第一种定义数组的方式:在元素类型后面接上[]，表示由此类型元素组成的一个数组

```
let arr1:number[] = [1,2,3];
console.log(arr1)
let arr2:string[] = ['hello','world'];
console.log(arr2)
```

第二种定义数组的方式:使用数组泛型，Array<元素类型>：
```
let arr3:Array<number> = [11,22,33];
```
### 元组类型(tuple)
元组类型是数组类型的一种特例。数组类型只允许元素是一种数据类型。而元组类型允许元素是多种数据类型。比如，你可以定义一对值分别为 string和number类型的元组。
```
let tuple1:[string,number] = ['hello',12]
console.log(tuple1[0])
```
但是，元组类型和元素必须一一对应。
```
let tuple2:[string,number] = [20,'world']  // 没有一一对应
```

### 枚举类型(enum)
在计算机科学中，我们经常使用数值来表示一种状态。但是对于较多的状态使用数值来表示可能导致易读性差。比如十二生肖如果我们用0,1,2,3,4...11来表示，那么可能根本不知道究竟每一个代表什么。但是如果我们用有含义的单词来表示，那么程序就比较容易理解与阅读。比如看到猪我就知道这个生肖是猪。枚举就是考虑到所有的可能出现的值，然后用具有函数的单词来表示它。

枚举又可以成为一一列举，在计算机计算中，将一个有穷序列集所有可能的值列举出来就称为枚举。比如：星期可以使用Sunday、Monday、Tuesday、Wednesday、Thursday、Friday、Saturday来进行枚举。生肖可以使用龙、蛇、狗等十二种来进行枚举。
```
enum 枚举名{
  标识符=[整型常数],
  标识符=[整型常数],
  标识符=[整型常数],
}
```
枚举类型的使用：枚举类型如果没有指定值，那么默认是从0开始。
```
enum data {
  success,
  error
}
console.log(data.success)  // 0
console.log(data.error)    // 1
```
如果指定了值，那么从指定的值往下递增。
```
enum data {
  pedding,
  success = 100,
  error
}
console.log(data.pedding)  // 0
console.log(data.success)  // 100
console.log(data.error)    //101
```
### 任意类型(any)
在typescript中定义变量时通常需要指定类型，但是有时候我们可能不知道这个变量会是什么类型(比如这个变量是用来接收后段发送过来的数据，这个数据类型可能不太确定。)。这时候我们就可以指定any类型。表示可以是任意类型。
```
let anyVar:any;
anyVar = 123;
console.log(anyVar)
anyVar = [1,2,3];
console.log(anyVar)
```
另外，当我们只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：我们可以指定数组中元素类型为any。这样的话我们就可以随意地修改数组中的元素了。
```
let list:any[] = [1,'hello',false];
list[1] = true;  // 将数组第二个元素从string类型修改为boolean
console.log(list[1])

```
### Null 和 Undefined
null和undefined是其他数据类型的子类型。
我们知道在js中定义了变量但是赋值，那么得到的就是undefined。比如：
```
let u ;
console.log(u)  // undefined
```
但是在ts中，如果我们定义了一个变量，没有进行赋值。如果我们使用它会出现报错。比如:
```
let u:number;
console.log(u) // Variable 'u' is used before being assigned
```
但是很多情况下，我们定义了一个变量没有进行赋值，在后续我们需要根据这个变量是否有值来进行判断。但是这种情况下就会报错。因此：我们希望能够
在没有获取值的情况下不会报错，这时候就可以使用undefined了。
```
let u2:number|undefined;
console.log(u2)
u2 = 123;
console.log(u2)
```
同理Null类型也是为了处理值为null时的情况。

### void类型
void类型表示没有任何类型，一般用于定义方法的时候，方法没有返回值。
```
function warnUser(): void {
    console.log("This is my warning message");
}
```
### never类型
 never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
 ```
let a:never;
a = (() => {throw new Error('抛出异常')})()
 ```
如果变量有确定的类型，那么使用never类型就会报错。比如：
定义变量n为never类型。但是将n赋值为number类型了，那么就会报错。
```
let n1:never;
n1 = 123;
```
### object类型
object类型表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
```
declare function create(o: object | null): void;
```
object类型的值与js中相同。数组，函数，null等都可以是Object类型。
```
create({ prop: 0 }); // OK
create(null); // OK
create([1,2,3]); // OK
create(function(){})  // OK
create(42); // 报错
create("string"); // 报错
create(false); // 报错
```

## 三、函数
### 函数的定义
和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。 你可以随意选择适合应用程序的方式，不论是定义一系列API函数还是只使用一次的函数。
定义有名字的函数:
```
function fn(){
  return 123;
}
console.log(fn())
```
定义匿名函数:
```
let fn1 = function(){
  return 456;
}
console.log(fn1())
```
### 函数定义类型
函数类型包含两个部分：参数类型和返回值类型。当写出完整函数的时候，两部分类型都是需要的。我们需要给每个参数添加类型之后再为函数本身添加返回值类型。
```
function fn3(name:string,age:number):string{
  return `${name}的年龄是${age}岁`
}
console.log(fn3('小明',25))

```
如果函数没有返回值，那么函数返回值类型是void
```
function fn4():void{
  console.log('这是一个没有返回值的函数')
}
console.log(fn4())

```
### 可选参数
在javascript中，函数的实参和形参可以不一致，也就是说实参的个数和形参的个数可以不相同。比如：下面的函数形参要求两个参数，但是实参只传递了一个参数。这种情况在js中不会报错。
```
function fn5(name,age){
  console.log(`${name}的年龄是${age}`)
}

fn5('小红')
```
但是在ts中，实参个数和形参个数必须一致。如果不一样就需要配置可选参数。将没有传入的参数设置为可选参数。通过在可传可不传的参数类型前面加上?表示该参数为可选参数。
```
function fn5(name:string,age?:number):void{
  if(age){
    console.log(`${name}的年龄是${age}`);
  }else{
    console.log(`${name}`);
  }
}
fn5('小红')
fn5('小红',20)
```
**注意：可选参数最好放到参数最后面**
### 默认参数
在ES6中我们可以在参数后面直接设置默认参数
```
function fn6(name, age = 40) {
  if (age) {
      console.log(name + "\u7684\u5E74\u9F84\u662F" + age);
  }
  else {
      console.log("" + name);
  }
}
fn6('小红');
fn6('小红', 20);

```
同样在ts中，我们可以在参数类型后面设置默认参数:
```
function fn6(name:string,age:number = 50):void{
  if(age){
    console.log(`${name}的年龄是${age}`);
  }else{
    console.log(`${name}`);
  }
}
fn6('小明')
fn6('小明',20)
```
### 剩余参数
在前面我们知道在ts中，形参的个数和实参的个数必须是一致的。但是有些情况下我们并不知道实参个数究竟是多少。实参的个数有可能取决于用户的输入。我们不可能每次都根据实参的个数来修改用户的输入。比如：计算多个数的和：
```
function sum(a:number,b:number,c:number):number{
  return a + b + c;
}
console.log(sum(1,2,3))
console.log(sum(1,2,3,4))
console.log(sum(1,2,3,4,5))
```
我们可以观察到：用户可能需要求得是三个数的和，也可能需要求得是四个数的和。也可能需要求得是五个数的和。我们不能可能每次都根据用户的输入来修改形参的个数。在js中我们通过arguments来收集所有的参数。arguments是一个伪数组。在ts中我们同样通过一个数组来收集所有的参数。只不过这个数组编译器会帮助我们创建。名字是...后面的变量名字。
```
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


```
### 函数的重载
JavaScript本身是个动态语言。 JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的。比如：
```
const person1 = {
  name:'小明',
  age:24,
  sex:'男'
}
const person2 = ['小红',26,'女']
function info(person){
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
```
info函数会根据传递进来的参数类型，来进行相应的操作。ts中重载的实现是通过为同一个函数提供
多个函数类型定义来进行函数重载。
```
function fn7(person:[string,number,string]):string;  // 第一个函数类型定义
function fn7(person:object):string;// 第二个函数类型定义
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
```
## 四、类
### 类的实现
在ES6中新增了类的概念。我们先看ES6中类的实现。
```
class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  getName(){
    return this.name;
  }
}
let p1 = new Person('小张',24)
console.log(p1.getName())

```
在ts中类的定义。ts中类的定义跟ES6差别不大。只是ts中新增了对属性的类型的校验。因此我们在使用属性之前必须先定义属性的类型。比如下面Person类中的name和age属性。在constructor和getName中使用之前必须先指定其类型。
```
class Person {
  // 指定参数类型
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }

  getName():string{
    return this.name;
  }

}

let p1 = new Person('小红',24)
console.log(p1.getName())
```
### 类的继承
ES6中的继承:在ES6中通过extends和super来实现继承。
```
// ES6中的继承
class Student extends Person{
  constructor(name,age,sex){
    super(name,age);
    this.sex = sex;
  }
  getSex(){
    return this.sex
  }
}

let s = new Student('小李',25,'男')
console.log(s.getName())
console.log(s.getSex())
```
ts中类的继承和ES6中非常相似。
```
class Person {
  // 指定参数类型
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }

  getName():string{
    return this.name;
  }

}

let p1 = new Person('小红',24)
console.log(p1.getName())

// 类的继承
class Student extends Person{
  sex:string;
  constructor(name:string,age:number,sex:string){
    super(name,age);
    this.sex = sex;
  }
  getSex():string{
    return this.sex
  }
}

```
### 修饰符
在ts中定义属性的时候，提供了三种修饰符。分别是public,protected和private。这三种修饰符用来表示属性能够被访问的范围。
```
public    表示公有的 可以在类中，类外面，子类中被访问。

protected  表示被保护的类型 可以在类中和子类中被访问。不能在类外面被访问。

private 表示私有类型 可以在类中访问。在子类和类外部都无法访问。
```
1. **public、protected和private修饰符定义的属性在类内部都可以被访问。**
```
class Human {
  // 指定参数类型
 public name:string;
 protected age:number;
 private salary:string;
  constructor(name:string,age:number,salary:string){
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  getName():string{
    return this.name;
  }
  getAge():number{
    return this.age;
  }
  getSalary():string{
    return this.salary;
  }
}
```
2. **public修饰符定义的属性在类外部可以被访问。protected和private修饰符定义的属性在类外部无法被访问。**
当我们在外部访问privagte定义的属性时，会出现报错。
这里的salary是private修饰的属性，无法进行设置。
```
let h2 = new Person('小红',24,10000) // Expected 2 arguments, but got 3.
console.log(h1.getAge()); // 报错 protected修饰的age属性无法在外部被访问。
```
3. **public和protected修饰符定义的属性可以在子类中被访问。但是private修饰符定义的属性无法在子类中访问。**
比如，当子类继承父类。调用super()方法时，如果传入了父类中私有的属性那么会报错。如果在子类方法中想要获取父类
私有属性也会报错。
```
class People extends Person{
  constructor(name:string,age:number,sex:string){
    super(name,age,sex);  // 报错
  }
  getSex():string{
    return this.sex;  // 报错
  }
}
```
**readonly修饰符**
在ts中还提供了readonly修饰符来将属性设置为只读。只读属性必须在生明时或者构造函数中被初始化。
```
class Teacher {
  readonly name:string;
  constructor(name:string){
    this.name = name;
  }
  getName():string{
    return this.name
  }
}

let t = new Teacher('张三')
console.log(t.name);
console.log(t.getName());
t.name = '李四'  // 修改readonly 修饰的属性时报错。
```

### 静态方法
在ES6中，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
```
class Foo{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  getName(){
    return this.name;
  }
  static getAge(){
    return this.age;
  }
}

let f  = new Foo('刘亦菲',24);
console.log(f.getName())  // 刘亦菲
console.log(Foo.getAge()) // undefined 这里的this指的是类Foo
console.log(f.getAge()) // 静态方法无法被实例调用
```
ts中静态方法的使用:通过使用static关键字定义静态属性和静态方法。
静态属性和静态方法只能通过类名来进行访问。实例和this都无法进行访问。
```
// 静态方法
class Foo{
  // 静态属性
  static obj = {
    name:'刘亦菲',
    age:30
  }
  public name:string
  constructor(name:string){
    this.name = name;
  }
  // 静态方法
  static getAge(){
    // 调用静态属性时需要使用类来调用。
    return Foo.obj.age
  }
  getName(){
    return this.name
  }
}

let f = new Foo('晓明')
console.log(Foo.getAge())  // 调用静态方法
console.log(f.getName())  // 调用实例方法

```
### 抽象类

抽象类是作为其他继承类的基类使用。他们一般不会被实例化。在ts中用abstract定义抽象类和抽象方法。
```
abstract class Animal{
  abstract eat():any;
}
```
1. 抽象类无法被实例化
```
abstract class Animal{
  abstract eat():any;
}
let a = new Animal() // 报错Cannot create an instance of an abstract class

```
2. 抽象类中的抽象方法，不包含具体实现。只定义方法签名，不定义方法体。
```
abstract class Animal{
  abstract eat():any; // 只有方法名，没有方法体
  abstract play:any{} // 报错  抽象方法不能有实现，也就是说不能有方法体。
}
```
3. 抽象类的子类必须实现抽象类中的抽象方法。
```
// 抽象类
abstract class Animal{
  protected food:string;
  protected ball:string;
  constructor(food:string,ball:string){
    this.food = food;
    this.ball = ball;
  }
  abstract eat():any;
  abstract play():any;
}

// 子类
class Dog extends Animal{
  constructor(food:string,ball:string){
    super(food,ball)
  }
  // 必须实现抽象类中的抽象方法
  eat(){
    console.log(`小狗在吃${this.food}`)
  }
  play(){
    console.log(`小狗在玩${this.ball}`)
  }
}

let dog = new Dog('骨头','篮球')
dog.eat()
dog.play()
```
