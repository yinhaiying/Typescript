
// ES6中类

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

let s = new Student('小李',25,'男')
console.log(s.getName())
console.log(s.getSex())

// 修饰符
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

let h1 = new Person('小红',24);
// let h2 = new Person('小红',24,10000)
// console.log(h1.getAge());

// 类的继承
class People extends Person{
  constructor(name:string,age:number,sex:string){
    // super(name,age,sex);  // 报错
    super(name,age)
  }
  // getSex():string{
  //   // return this.sex;  // 报错
  // }
}


// readonly

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
// t.name = '李四'

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
