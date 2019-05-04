// 属性接口


// function getInfo(person:{name:string,age:number}):void{
//   console.log(`姓名:${person.name},年龄是${person.age}`)
// }

// getInfo({name:'hello',age:24})  // 需要传入一个对象，对象中包含有string类型的name和number类型的age
// getInfo({name:'hello'})  // 报错 缺少age属性
// getInfo({name:'hello',age:'24'})  // 报错age属性为number

// 通过接口来实现这个规范
interface PersonInterface{
  name:string;  // 这里是分号；
  age:number;
  salary?:number;
}

// 这里的传给person的是一个对象
function getInfo(person:PersonInterface):void{
  if(person.salary){
    console.log(`姓名:${person.name},年龄是${person.age},薪水是${person.salary}`)
  }else{
    console.log(`姓名:${person.name},年龄是${person.age}`)
  }
}

getInfo({name:'刘亦菲',age:30})
getInfo({name:'刘亦菲',age:30,salary:10000})

interface Point{
  readonly x:number;
  readonly y:number;
}

function getPoint(point:Point):void{
  console.log(`坐标x:${point.x},坐标y:${point.y}`)
}
let point:Point = {
  x:13,
  y:14
}
getPoint(point)

// point.x = 100; // 报错。readonly的接口在第一次赋值后就无法进行修改了
// getPoint(point)


// 函数类型接口

interface BarFunc{
  (name:string,age:number):string;
}
// 使用函数类型的接口
let bar:BarFunc = function(name:string,age:number):string{
  return `姓名:${name},年龄:${age}`
}

bar('张三',24)


// 可索引接口

let myArr:string[] = ['hello','world'];

interface Arr {
  [index:number]:string;
}

let arr:Arr = ['hello','world']
// let arr:Arr = [1,'world']; 报错。元素类型必须是strig


// 类类型接口

interface AnimalClass{
  food:string;
  ball:string;
  eat():void;
  play():void;
}

// 其他类实现这个类接口

class MyDog implements AnimalClass{
  food:string;
  ball:string;
  constructor(food:string,ball:string){
    this.food = food;
    this.ball = ball;
  }
  eat():void{
    console.log('狗吃' + this.food)
  }
  play():void{
    console.log('狗玩' + this.ball)
  }
}

let myDog = new MyDog('骨头','篮球')
myDog.eat()
myDog.play()
