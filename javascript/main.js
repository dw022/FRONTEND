//console.log("hello JavaScript")

/* 
자바스크립트 이론
1. 데이터 타입
2. 기본 메서드
3. 연산자
4. 조건문
5. 반복문
6. 변수
7. 함수
8. 배열
9. 객체
10. 클래스
11. 에러
12. 비동기 작업
13. JSON 
*/

//값

// var foo = "bar" // 따옴표 안에 값을 작성한다. '', "" 둘다 가능

// console.log(foo);
// bar라고 출력
// console.log(typeof foo); // typeof: 변수의 타입을 알려준다
// string 이라고 출력

// 각 문자에 접근하기

// var foo ="bar";

//대괄호안에 index를 통해 특정 문자에 접근한다
//index는 0부터 시작
// console.log(foo[0]) // b
// console.log(foo[1]) // a
// console.log(foo[2]) // r

// 글자의 개수 구하기

// var foo ="bar"
// console.log(foo.length);
// 3

/*
    Number 
    값의 종류
    1. 정수
    2. 분수
    3. NaN
    4. +Infinity
    5. -Infinity
*/

//정수
// var year = 2023;
// console.log(year); //2023
// console.log(typeof year); //number

//분수
// var pi=3.14;

// console.log(pi); //3.14
// console.log(typeof pi); //number

//Nan(Not a Number)
// var nan=2 - "foo";

// console.log(nan);
// console.log(typeof nan);

// Number 타입이 저장할 수 있는 가장 큰 수
// var max_value=Number.MAX_VALUE;

// console.log(max_value); //1.79...

//Number 타입이 저장할 수 있는 가장 작은 수

// var negative_max_value = -Number.MAX_VALUE;

// console.log(negative_max_value); //-1.79...

//+Infinity (양의 무한대)

// var infinity = Number.MAX_VALUE * 1.1; 
// console.log(infinity); // Infinity
// console.log(typeof infinity); //number

// -Infinity (음의 무한대)
// var negative_infinity = -Number.MAX_VALUE * 1.1;

// console.log(negative_infinity); //-Infinity 
// console.log(typeof negative_infinity); //number

/* 
    Boolean

    1. 값: 참 또는 거짓(true of false)
*/

// var bool = true;
// console.log(bool); //true
// console.log(typeof bool); //boolean

//비교 연산은 결과로 boolean값을 저장한다
//console.log(1>0);
//true

/*
    null
    없음, 무효를 나타내는 데이터 타입
    1. 값: null
*/

// var foo=null;
// console.log(foo); //null
// console.log(typeof foo); //object

/*
 undefined: 정의되지 않은 변수가 가지는 데이터 타입

  1. 값: undefined 
*/

//  var foo; //선언은 되었지만 정의는 안됨

//  console.log(foo); //undefined
//  console.log(typeof foo); //undefined

/* 
    기본 메서드
    데이터에 특정한 작업을 수행한다

    1. 문자열 메서드
    2. Number 메서드
*/

/* 
    문자열 메서드

    1. toUpperCase
    2. indexOf
    3. trim
    4. substring
*/

/* 
    toUpperCase: 문자열의 모든 문자를 대문자로 변환한다
*/

// var foo="bar";
// console.log(foo.toUpperCase()); // BAR

/*
    indexOf(검색할 문자열)

    인자의 인덱스를 리턴한다
*/

// var foo="bar";

// console.log(foo.indexOf("b")); // 0
// console.log(foo.indexOf("z")); // -1 인자를 포함하지 않을경우 -1 을 리턴한다.

/*
 trim: 문자열의 앞과 뒤의 공백을 제거한다.
*/

// var foo ="  bar ";
// console.log(foo.trim()); // bar: 데이터 정제 작업 등에 사용됨.

/*
    substring(시작 인덱스, 끝 인덱스)
    : 문자열에서 특정 문자들을 추출한다.
*/

// var foo="hello world";
// console.log(foo.substring(0,4)); // hell

/*
    Number 메서드

    1. toPrecision
    2. isString
*/

// toPrecision: 숫자의 정밀도를 조정한다.

// var pi=Math.PI;
// console.log(pi); // 3.14159....(16자리의 숫자까지 표현가능)

// var pi=Math.PI;
// var precisePi = pi.toPrecision(100); //toPrecision(100) //100자리까지 표현
// console.log(precisePi); 

/*
    toString
    Number 타입 값을 문자열 타입 값으로 변환한다.
*/

// var year=2023;
// var yearInString = year.toString();

// console.log(yearInString); //2023
// console.log(typeof yearInString); //string

/*
    연산자

    1. 수리 연산자
    2. 대입 연산자
    3. 비교 연산자
    4. 논리 연산자
    5. 타입 연산자
*/

/* 수리 연산자
    1. 4칙 연산자(+, -, *, /)
    2. 증가 연산자(++)
    3. 감소 연산자(--)
    4. 지수 연산자(**)
    5. 개수 연산자(%)
*/

//4칙 연산자
// var add = 1+1;
// var subtract = 2-1;
// var divide = 1/2;
// var multiply = 1*2;

// console.log("1+1 =", add);
// console.log("2-1 =", subtract);
// console.log("1/2 =", divide);
// console.log("1*2 =", multiply);

//+와 문자열
// var s = "hello" + "world";

// console.log(s); //hello world

// //문자열과 숫자를 더하는 경우
// var s = "hello" + 2024;
// console.log(s); // hello 2024
// console.log(typeof s); //string

// 증가/감소 연산자
// var n=1;
// n++;
// console.log(n); // 2

// //지수 연산자
// var exp=2**7 // 기수 ** 지수 2의 7제곱
// console.log(exp); //128

// 계수 연산자
// var mod = 5 % 2; //5를 2로 나눈 나머지
// console.log(mod); // 1

/*
    대입 연산자
    1. 변수 대입 연산자 =
    2. 더하기 대입 연산자 +=
    3. 빼기 대입 연산자 -=
    4. 곱하기 대입 연산자 *=
    5. 나누기 대입 연산자 /=
    6. 지수 대입 연산자 **=
    7. 계수 대입 연산자 %=
*/

// 변수 대입 연산자
// var foo ="bar";
// console.log(foo); //bar

//더하기 대입 연산자
// var n=1;
// n +=1;
// console.log(n); //2

/*
    비교 연산자 
    
    1. 동등 연산자 ==
    2. 비동등 연산자 !=
    3. 엄격동등연산자 ===
    4. 엄격비동등연산자 !==
    5. gt 연산자 >
    6. gte 연산자 >=
    7. lt 연산자 <
    8. lte 연산자 <=
*/

// 동등 연산자: 같은 경우 true, 다른 경우 false를 리턴한다.

// console.log(1==2); // false
// console.log("foo"=="bar"); //false
// console.log(0==false); //true
// console.log(2023=="2023"); //true

//엄격동등연산자 :같은경우 true, 다른 경우 false를 리턴한다.
// console.log(1===2); //false
// console.log("foo"==="bar"); //false
// console.log(0===false); //false
// console.log(2023==="2023"); // false

/*
    비동등 연산자
    
    표현식1 != 표현식2

    표현식이 비동등하면 true를 리턴한다.
    동등하면 false를 리턴한다.
*/

// console.log(1 != 2); //true
// console.log("foo" != "bar"); //true
// console.log(0 != false); //false
// console.log(2023 != "2023"); //false

/*
    엄격 비동등 연산자
    표현식 1 !== 표현식2
*/
// console.log(1 !== 2) //true 
// console.log("foo" !=="bar") //true
// console.log(0 !== false) //true
// console.log(2023 !== "2023") //true

/*
    논리 연산자

    1. && (AND)
    2. || (OR)
    3. ! (NOT)
*/

// AND 표현식1 && 표현식2 -> 표현식 1, 2가 모두 참이면 true를 리턴한다.
// console.log(1>0 && 1<2); //true

// OR 표현식1 || 표현식2 -> 표현식 1, 2 둘중 하나가 참이면 true 리턴
// console.log(1>2 || 1>0); //true

//NOT ! 표현식
// console.log(!true); //false

// Boolean타입이 아닌 값을 부정하는 경우
// console.log("0: 부정:", !0); //true 
// console.log("0이 아닌 숫자 부정:", !2023); //false
// console.log("빈 문자열 부정:", !""); //true
// console.log("문자열 부정:", !"abcd"); //false
// console.log("null 부정:", !null); //true
// console.log("undefined 부정:", !undefined); //true

/*
    타입 연산자: 변수의 타입을 리턴한다
*/

// var foo="bar";
// console.log(typeof foo); //string

/*
    조건문
    1. if문
    2. if/else문
    3. if/else if/else문
    4. switch문
    5. 삼항연산자 조건문
*/

/*
    if 문

    if(조건){
        조건이 참인 경우 실행되는 코드
    }
*/
// var year = 2023
// if (year ==2023) {
//     console.log("2023년아 가지마 ㅠㅠ");
// }

/*
    if / else 문
    
    if(조건) {
        조건이 참인 경우 실행되는 코드
    } else {
        그 이외의 조건이 해당되는 경우 실행되는 코드
    }
*/
// var year = 2023;
// if(year ==2023) {
//     console.log("올해는 2023")
// } else {
//     console.log("내년은 2024")
// }

/*
    if / else if / else문
*/
// var year=2023;
// if (year==2022) {
//     console.log("작년");
// } else if(year==2023) {
//     console.log("올해");
// } else {
//     console.log("내년");
// }

/* switch문: 엄격 동등 연산을 수행한다
- 기본 사용 방법
- default값
*/
// var year = 2023;
// switch(year) {
//     case 2022:
//         console.log("작년");
//         break;
    
//     case 2023:
//         console.log("올해");
//         break;
    
//     case 2024:
//         console.log("내년");
//         break;
// }
// var year=2030;

// switch(year) {
//     case 2022:
//         console.log("작년");
//         break;
    
//     case 2023:
//         console.log("올해");
//         break;
    
//     case 2024:
//         console.log("내년");
//         break;

//     default: //모든 case가 거짓일때 실행됨
//         console.log("가까운 년도가 아님다.");
// }

/*
    삼항 연산자 (?) 조건문
    조건 ? 값1 : 값2
    조건이 참인경우 값1을 리턴한다.
    조건이 거짓인 경우 값2를 리턴한다.
*/
// var year =2023;
// var r = year == 2023 ? "올해" : "올해가 아닙니다.";
// console.log(r);

/*
    반복문
    블록의 코드를 반복실행한다.
    - for문
    - while문
*/

/* for문 
1. 기본 사용
2. 사용 예시
3. break
*/

/* 기본 사용 방법 
for (표현식1; 표현식2; 표현식3) {
    반복할 코드
} 

표현식1: 변수의 선언 및 초기값 설정
표현식2: 반복조건
표현식3: 변수 업데이트 연산
*/
// for (var n=1; n<=10; n++) {
//     console.log(n + "번 실행되었습니다");
// }

//1~10까지의 합
// var sum=0;
// for (var n=1; n<=10; n+=2) { //2씩 더하게 하려면 n+=2
//     sum +=n;
// }
// console.log(sum); //55

/* break: 반복문을 빠져나온다. */

// for (var speed=0; speed <200; speed+=10) {
//     if(speed > 60) {
//         console.log("속도를 낮추세요!");
//         break;
//     }
//     console.log(speed + "km/h");
// }

/*
    while문
    
    while(반복 조건) {
        반복할 코드
    }
*/
// var n=1;
// while(n<=10) {
//     console.log(n+"번 실행되었습니다.");
//     n++;
// }

/* 변수 (Variable) : 값을 저장하는 컨테이너
1. 기본 사용 방법
2. 전역변수와 지역변수
*/

//기본 사용 방법 - 변수 선언 및 정의, 재정의도 가능
// var foo ="bar";
// foo = "bax";
// console.log(foo); //bax


/* 전역 변수 (Global variable)

함수 밖에서 선언된 변수로, 소스코드 어디에서든지 사용가능 */
// var varInGlobal=true;
// console.log(varInGlobal);

/* 지역 변수 (Local variable)

함수 내에서 선언된 변수로, 선언된 함수내에서만 사용가능 */
// function f() {
//     var varInFunction = true;
//     console.log(varInFunction);
// }
// f() //함수 호출
