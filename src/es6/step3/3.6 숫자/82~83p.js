let count = 10;           //숫자 리터럴. count는 더블입니다.
const blue = 0x0000ff;    // 16진수, 16진수 ff는 10진수 255와 같습니다.
const umask = 0o0022;     // 8진수, 8진수 22는 십진수 18과 같습니다.
const roomTemp = 21.5;    // 십진수
const c = 3.0e6;          // 지수 (3.0 * 10^6 = 3,000,000)
const e = -1.6e-19;       // 지수 (-1.6 * 10^-19 = 0.00000000000000000016)
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;          // "숫자가 아님"  


const small = Number.EPSILON;               // 1에 더했을 때 1과 구분되는 결과를 만들 수 있는 가장 작은 값입니다. 근사치는 2.2E-16입니다.
const bigInt = Number.MAX_SAFE_INTEGER;     // 표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE;               // 표현할 수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER;     // 표현할 수 있는 가장 작은 정수
const min = Number.MIN_VALUE;               // 표현할 수 있는 가장 작은 숫자
const mInf = Number.NEGATIVE_INFINITY;      // -infinity
const nan2 = Number.NaN;                    // NaN
const inf2 = Number.POSITIVE_INFINITY;      // infinity