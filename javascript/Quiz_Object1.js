// 문제1. korea 객체 추가
var korea = {
    capital: "서울",
    population: 1232321,
    language: "Korean",
    isG7: Boolean,
    kpop: function () {
        return "music ON";
    }
}

console.log(korea.isG7);
console.log(korea.kpop());

// 문제2. 기네스가 재입고되었습니다. 판매여부를 업데이트 해보세요.
var irishBeer = {
    name: "기네스",
    origin: "아일랜드",
    available: false // 판매여부
}

irishBeer.available = true;

console.log(irishBeer.available);

// 문제3. 배열 순회를 활용하여 맥주의 각 이름을 대문자로 출력해보세요
/*
    결과: 
    GUINNESS
    HEINEKEN
    BUDWISER
*/

var beers= [
    { name: "Guinness", origin: "Ireland", available: false },
    { name: "Heineken", origin: "Netherlands", available: true },
    { name: "Budwiser", origin: "USA", available: true },
]

// beers[0][0]="GUINNESS";
// beers[1][0]="HEINEKEN";
// beers[2][0]="BUDWISER";

// for (var i=0; i<3; i++) {
//     console.log(beers[i][0])
// }

// //다른 예시
// for(var i=0; i<beers.length; i++) {
//     console.log(beers.[i].name.toUpperCase());
// }

// 문제4. 품절된 맥주의 이름을 출력해보세요. (배열 순회 활용) 
// 결과: Guinness

for(var i=0; i<beers.length; i++){
    if(beers[i].available == false) {
        console.log(beers[i].name);
    }
}