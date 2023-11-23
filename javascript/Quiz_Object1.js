//korea 객체 추가
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

//기네스가 재입고되었습니다. 판매여부를 업데이트 해보세요.
var irishBeer = {
    name: "기네스",
    origin: "아일랜드",
    available: false // 판매여부
}

irishBeer.available = true;

console.log(irishBeer.available);