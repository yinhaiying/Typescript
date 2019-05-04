"use strict";
// ES6中类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var p1 = new Person('小红', 24);
console.log(p1.getName());
// 类的继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, sex) {
        var _this = _super.call(this, name, age) || this;
        _this.sex = sex;
        return _this;
    }
    Student.prototype.getSex = function () {
        return this.sex;
    };
    return Student;
}(Person));
var s = new Student('小李', 25, '男');
console.log(s.getName());
console.log(s.getSex());
// 修饰符
var Human = /** @class */ (function () {
    function Human(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Human.prototype.getName = function () {
        return this.name;
    };
    Human.prototype.getAge = function () {
        return this.age;
    };
    Human.prototype.getSalary = function () {
        return this.salary;
    };
    return Human;
}());
var h1 = new Person('小红', 24);
// let h2 = new Person('小红',24,10000)
// console.log(h1.getAge());
// 类的继承
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People(name, age, sex) {
        // super(name,age,sex);  // 报错
        return _super.call(this, name, age) || this;
    }
    return People;
}(Person));
// readonly
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
    }
    Teacher.prototype.getName = function () {
        return this.name;
    };
    return Teacher;
}());
var t = new Teacher('张三');
console.log(t.name);
console.log(t.getName());
// t.name = '李四'
// 静态方法
var Foo = /** @class */ (function () {
    function Foo(name) {
        this.name = name;
    }
    // 静态方法
    Foo.getAge = function () {
        // 调用静态属性时需要使用类来调用。
        return Foo.obj.age;
    };
    Foo.prototype.getName = function () {
        return this.name;
    };
    // 静态属性
    Foo.obj = {
        name: '刘亦菲',
        age: 30
    };
    return Foo;
}());
var f = new Foo('晓明');
console.log(Foo.getAge()); // 调用静态方法
console.log(f.getName()); // 调用实例方法
// 抽象类
var Animal = /** @class */ (function () {
    function Animal(food, ball) {
        this.food = food;
        this.ball = ball;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(food, ball) {
        return _super.call(this, food, ball) || this;
    }
    // 必须实现抽象类中的抽象方法
    Dog.prototype.eat = function () {
        console.log("\u5C0F\u72D7\u5728\u5403" + this.food);
    };
    Dog.prototype.play = function () {
        console.log("\u5C0F\u72D7\u5728\u73A9" + this.ball);
    };
    return Dog;
}(Animal));
var dog = new Dog('骨头', '篮球');
dog.eat();
dog.play();
