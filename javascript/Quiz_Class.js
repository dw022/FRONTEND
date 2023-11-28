/* 다음을 만족하는 <Car> 클래스를 정의해보세요.

1. 변수 멤버
name(이름)
brand(브랜드)
color(색상)

2. 생성자 있음

3. 함수 멤버
sound - 자동차 소리를 낸다.

4. static 함수
getAge - 구매년도를 입력하면 차의 나이를 알려준다.
*/

class Car {
    //클래스의 변수 멤버
    name;
    brand;
    color;

    //생성자
    constructor (name, brand, color) {
        this.name = name;
        this.brand = brand;
        this.color= color;
    }

    //함수 멤버
    sound () {
        return "부르릉~~";
    }

    //static 함수
    static getAge(year) {
        return "차의 나이:" + (2023 - year);
    }
}

var car = new Car("GV80", "제네시스", "블랙");

console.log(car);
console.log(car.sound());
console.log(Car.getAge(2020));