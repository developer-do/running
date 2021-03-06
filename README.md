# CHAPTER 3, 리터럴과 변수, 상수, 데이터 타입

* 변수란?
    *변수(variable)란 간단히 말해 이름이 붙은 값으로, 변수라는 이름이 암시하듯 값은 언제든 바뀔 수 있습니다.

* 상수란?
    *상수(constant)란 변하지 않는 값, 불변의 값으로 보면 됩니다. 생각보다 변수가 필요한 상황이 적다는 걸 알 수 있을 것입다.

* 식별자 이름
    *변수와 상수, 함수 이름을 => 식별자 이름이라 부릅니다. 그리고 식별자에는 규칙이 있습니다.
***
    1. 식별자는 반드시 글자나 달러 기호($), 밑줄(_)로 시작해야 합니다.
    2. 식별자에는 글자와 숫자, 달러 기호, 밑줄만 쓸 수 있습니다.
    3. π 와 유니코드와 같은 문자도 쓸 수 있습니다.
    4. 예약어는 식별자로 쓸 수 없습니다.(부록 A에 예약어를 정리했습니다.)
***
*식별자 표기법
***
    1. 카멜 케이스
        * currentTempC, anIdentifierName 등은 카멜 케이스에 따라 이름을 지은 겁니다. 카멜이라는 이름은 중간중간의 대문자가 낙타의 훅처럼 보인다고 해서 붙었습니다.
    2. 스네이크 케이스
        * current_temp_c, an_indetifier_name 등은 스네이크 케이스에 따라 이름을 지은 겁니다. 스네이크 케이스는 카멜 케이스 보다는 조금 덜 쓰입니다.
***

*식별자를 만들 때 주의 할 점
***
    1. 식별자는 대문자로 시작해서는 안 됩니다. 클래스이기때문에!
    2. 밑줄 한개 또는 두 개로 시작하는 식별자는 아주 특별한 상황, 도는 '내부' 변수에서만 사용합니다. 자신만의 특별한 변수 카테고리를 만들지 않는 한, 변수나 상수 이름을 밑줄로 시작하지 마십시오.
    3. 제이쿼리를 사용할 경우, 달러 기호로 시작하는 식별자는 보통 제이쿼리 객체라는 의미입니다. 제이쿼리는 19장에서 설명합니다.
***

*리터럴
***
    *리터럴 이라는 단어는 ! 값을 프로그램 안에서 직접 지정한다는 의미입니다. ! 리터럴은 값을 만드는 방법입니다. 자바스크립트는 당신이 제공한 리터럴 값을 받아 데이터를 만듭니다.

    let room1 = "conference_room_a";    // "conference_room_a" (따옴표 안)은 리터럴 입니다.
    let currentRoom = room1;                // 이제 currnetRoom의 값은 room1 의 값 ("conference_room_a")과 같습니다.
    currentRoom = conference_room_a; // 에러가 일어납니다. conference_room_a란 식별자는 존재하지 않습니다.

***

*원시 타입과 객체
    *자바스크립트의 값은 원시 값(primitive) 또는 객체(object) 입니다. 문자열과 숫자같은 원시타입은 불변 입니다.  
    ex) "alpha" + "omega"처럼 문자열을 병합한다면, 전혀 다른 문자열이 생성 됩니다.
***
    원시 타입에는 6가지가 있습니다.
    1. 숫자
    2. 문자열
    3. 불리언
    4. null
    5. undefined
    6. 심볼(symbol)  

    다만 불변성이라는 말이 변수의 값이 바뀔 수 없다는 뜻은 아닙니다.
***

*위의 원시 타입 객체 외에 객체가 있습니다. 원시 값과 달리 객체는 여러가지 형태와 값을 가질 수 있습니다.  

***
    자바스크립트에는 다음과 같이 몇 가지 내장된 객체 타입이 있습니다.
    1. Array
    2. Date
    3. RegExp
    4. Map과 WeakMap
    5. Set과 WeakSet

    마지막으로 원시 타입 중 숫자와 문자열, 부리언에는 각각 대응하는 객체 타입인
    1. Number
    2. String
    3.Boolean이 있습니다.
***