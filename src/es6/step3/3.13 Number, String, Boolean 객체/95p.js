const s = "hello";
s.toUpperCase(); // "HELLO"

const s2 = "hello";
s.rating = 3; // 에러가 없습니다. 성공일까요 ?
s.rating;     // undefined

// 임시 객체는 즉시 파괴되므로 변수를 선언해서 값을 넣어 주지 않는 이상 값은 undefined가 나온다.