"use strict";
// 属性接口
// 这里的传给person的是一个对象
function getInfo(person) {
    if (person.salary) {
        console.log("\u59D3\u540D:" + person.name + ",\u5E74\u9F84\u662F" + person.age + ",\u85AA\u6C34\u662F" + person.salary);
    }
    else {
        console.log("\u59D3\u540D:" + person.name + ",\u5E74\u9F84\u662F" + person.age);
    }
}
getInfo({ name: '刘亦菲', age: 30 });
getInfo({ name: '刘亦菲', age: 30, salary: 10000 });
function getPoint(point) {
    console.log("\u5750\u6807x:" + point.x + ",\u5750\u6807y:" + point.y);
}
var point = {
    x: 13,
    y: 14
};
getPoint(point);
// 使用函数类型的接口
var bar = function (name, age) {
    return "\u59D3\u540D:" + name + ",\u5E74\u9F84:" + age;
};
bar('张三', 24);
// 可索引接口
var myArr = ['hello', 'world'];
var arr = ['hello', 'world'];
// 其他类实现这个类接口
var MyDog = /** @class */ (function () {
    function MyDog(food, ball) {
        this.food = food;
        this.ball = ball;
    }
    MyDog.prototype.eat = function () {
        console.log('狗吃' + this.food);
    };
    MyDog.prototype.play = function () {
        console.log('狗玩' + this.ball);
    };
    return MyDog;
}());
var myDog = new MyDog('骨头', '篮球');
myDog.eat();
myDog.play();
