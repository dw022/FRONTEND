/* Q1. 자동차 리스트에 새 자동차를 추가해보세요. */

var cars=["스타리아", "아반떼", "아이오닉s"];
var newCar ="캐스퍼";

cars.push(newCar);
console.log(cars);

/* Q2. b로 시작하는 아이템만 출력해보세요. (배열 순회 활용) */

var arr=["foo", "bar", "baz"];

for (var i=0; i<arr.length; i++) {
    if(arr[i][0]=="b") {
        console.log(arr[i]);
    }
}

// for (var i=0; i<arr.length; i++){
//     if(arr[i].startsWith("b")) {       //startsWith("b") 활용
//         console.log(arr[i]);
//     }
// }