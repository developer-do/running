console.clear();
const Car = (function () {
  const carProps = new WeakMap(); // 인스턴스생성.
  class Car {
    constructor(make, model) {
      this.make = make;// Car의 메이크는 인자1.
      this.model = model;//Car의 모델은 인자2
      this._userGears = ['P', 'N', 'R', 'D'];//가짜 접근 제한으로, Car의 _userGears는 배열.
      carProps.set(this, { // WeakMap이라는 인스턴스 Car에다가, 객체를 넣을거다. carProps이친구가 프로토타입으로 Car을 링킹해서 userGear를 생성해준건대.
        userGear: this._userGears[0] // 아래와 같이. 하지만 userGear: Car._userGears[0]이기 때문에 P
      });

    }
    get userGear() {
      return carProps.get(this).userGear; //carProps에서 가져온다 car의userGear을.
    }

    set userGear(value) {// 셋팅한다. userGear을, 벨류값으로.
      if (this._userGears.indexOf(value) < 0) { // Car의_userGears의 인덱스가 0보다 작을때, 즉 해당하는 값이 없을때.
        throw new Error(`Invalid gear: ${value}`);// 오류를 뿜어라. Invalid hear: value값
      }
      carProps.get(this).userGear = value;// 값이 있다면 carProps에서 가져와라 userGear의 값을.
    }

    shift(gear) {
      this.userGear = gear; //Car의 userGear을 인자1 값으로 수정.
    }
  } // class Car construcor
  return Car; // Car을 반환.
})(); // 실행.




const car1 = new Car();
const car2 = new Car();
console.log(car1.shift === Car.prototype.shift);
car1.shift('D');
// car1.shift('d');
console.log(car1.userGear);
console.log(car1.shift === car2.shift);

car1.shift = function (gear) {
  this.userGear = gear.toUpperCase();
};

console.log(car1.shift === Car.prototype.shift);
console.log(car1);
console.log(car1.shift === car2.shift);
console.log(car2.shift === Car.prototype.shift);
console.log(car2);
car1.shift('d');
console.log(car1.userGear);



// let a = new Car();
// console.log(a.userGear); // P가 나오면됨. Car라는 클래스에 userGear어가 
// const car1 = new Car("Tesla", "Model S");//카를 찍어보면 인자1, 인자2이 테슬라, 모델 s
// const car2 = new Car("Mazda", "3i");
// car1.shift('D'); // userGear을 D로 셋팅.
// console.dir(car1.carProps instanceof WeakMap);
// car2.shift('R');
// console.dir(car1);

/*
console.log(car1);
console.log(car2);
console.log(car1 instanceof Car);
console.log(car1 instanceof Array);

console.log(car1.userGear);
console.log(car2.userGear);
*/

// let tObj = function (t) {
//   this.Hello = (t) => {
//     return `${t} Hello world`;
//   };
//   this.name = "Hello";
// };
// tObj.prototype.ggg = ['A', 'B', 'C', 'D'];

// let tIns = new tObj();
// console.log(tIns.Hello('도현.'));
// console.log(tIns.ggg);



// class TestHello{
//   constructor(wow){
//     this.gemi = function (wow) {
//       return wow;
      
//     };
//     this.t = function (wow) {
//       return `${wow}님 안녕하세요.`;
      
//     };
//   }
// }

// let abb = new TestHello();
// console.log(abb.gemi('fucnk!!!'));
// let afw = new TestHello();
// console.log(afw.t('도현쓰.'));




/* 연습 */
// (function () {

//   let colorFunc = () => {
//     document.getElementsByClassName('list')[0].style.color = 'red';
//   };

//   function main() {
//     return {
//       consoleFunc: function (msg) {
//         return console.log(msg);
//       },
//       eventFunc(t, e, f) {
//         return document.getElementById(t).addEventListener(e, f);
//       }
//     };
//   }
//   main().consoleFunc('뭐라했냐');
//   main().eventFunc('target', 'click', colorFunc('red'));
//   return {
//     eventFunc: function eventFunc() {
      
//     }
//   };
// })();

