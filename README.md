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
