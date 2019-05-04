
function getInfo1(name:string):string{
  return name;
}

getInfo1('张三');
// getInfo1(123);


function getInfo2(value:any):any{
  return value;
}

console.log( getInfo2('张三') );
console.log( getInfo2(123));

function getInfo3<T>(value:T):T{
  return value;
}

// 第一种调用方式
console.log( getInfo3<string>('李四') )
getInfo3<number>(24)

// 第二种调用方式
console.log(getInfo3('王五'))
getInfo3(26)

// 泛型类

class Sort{
  list:number[];
  constructor(list:number[]){
    this.list = list;
  }
  sort(list:number[]):number{
    let min= this.list[0];
    for(let i = 0; i < this.list.length;i++){
      if(min > this.list[i]){
        min = this.list[i]
      }
    }
    return min;
  }
}

let mySort = new Sort([1,6,2,4,5]);
console.log(mySort.sort([1,6,2,4,0]))


class Sort2<T>{
  list:T[];
  constructor(list:T[]){
    this.list = list;
  }
  sort(list:T[]):T{
    let min= this.list[0];
    for(let i = 0; i < this.list.length;i++){
      if(min > this.list[i]){
        min = this.list[i]
      }
    }
    return min;
  }
}

// number类型
let mySort2 = new Sort2([1,6,2,4,5]);
console.log(mySort2.sort([1,6,2,4,0]))
// string类型
let mySort3 = new Sort2(['a','f','z','d']);
console.log(mySort3.sort(['a','f','z','d']))
