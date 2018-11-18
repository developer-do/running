let currentTemp = 19.5;
// 00b0는 온도를 나타내는 유니코드 코드 포인트입니다.
const message = "The current temperature id " + currentTemp + "\u00b0C";
const message2 = `The current temperature is ${currentTemp}\u00b0C`;