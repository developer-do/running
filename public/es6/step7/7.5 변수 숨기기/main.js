{
  // block1
  const x = 'blue';
  console.log(`block1 의 x = ${x} 입니다.`);
}
console.log(typeof x);
// undefined 입니다. x는 스코프 밖에 있습니다.
{
  // block2
  const x = 3;
  console.log(`block2 의 x = ${x} 입니다.`);
}
console.log(typeof x);
// undefined 입니다. x는 스코프 밖에 있습니다.


/*
 *  스코프 중첩 되는 경우 
 */

{
  // outter block
  let x = 'blue';
  console.log(x);   // 'blue'
  {
    // inner block
    let x = 3;
    console.log(x);   // '3'
  }
  console.log(x);   // 'blue'
}
console.log(typeof x);
// undefined 입니다. x는 스코프에 있지 않습니다. 

{
  // outter block
  let x = {
    color: "blue"
  };
  let y = x;
  let z = 3;
  {
    // inner block
    let x = 5;            // 이제 바깥의 x는 가려졌습니다.
    console.log(x);       // 5;
    console.log(y.color); // "blue"; y가 가리키는 외부 스코프의 x가 가리키는 객체는 스코프 안에 있습니다.

    y.color = "red";
    console.log(z);
  }
  console.log(x.color);   // "red"; 객체는 내부 스코프에서 수정됐습니다.
  console.log(y.color);   // "red"; x와 y는 같은 객체를 가리킵니다.
  console.log(z);         // 3
}