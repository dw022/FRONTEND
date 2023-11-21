// 나이를 입력받아서 그 나이가 성인인지 아닌지를 판단하는 함수를 선언하고
// 호출해보세요.

function isAdult(age) {
    if (typeof age !=="number") {
        console.log("입력값은 숫자여야 합니다.");
        return; //return 아래의 코드는 실행되지 않는다.
    }

    if (age >=20) {
        console.log("성인");
    } else{
        console.log("미자");
    }
}

isAdult(12)
isAdult(20)
isAdult(24)
isAdult("으악");

/*해당 디렉토리가 있는 경로로 이동후,
사용자가 직접 cmd창에 입력하여 성인, 미자 여부를 가리는 코드*/

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("나이를 입력하세요: ", (age) => {
//     if (parseInt(age) >= 20) {
//         console.log("성인");
//     } else {
//         console.log("미자");
//     }

//     rl.close();
// });

// rl.on("close", () => {
//     process.exit();
// });

