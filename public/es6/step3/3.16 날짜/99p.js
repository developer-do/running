const now = new Date();
now; // Mon Nov 12 2018 01:24:15 GMT+0900 (한국 표준시)

const halloween = new Date(2018, 10, 11); // 월은 0 에서 시작합니다. 즉, 9 는 10 입니다.

const halloween2 = new Date(2018, 10, 11, 20, 25); //  20:25 = 8시 25분 pm

halloween2.getFullYear();    // 2018
halloween2.getMonth();       // 10
halloween2.getDate();        // 11
halloween2.getDay();         // 0 (0 은 일요일 입니다.)
halloween2.getHours();       // 20
halloween2.getMinutes();     // 0
halloween2.getSeconds();     // 0
halloween2.getMilliseconds();// 0