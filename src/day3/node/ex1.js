
console.log("Hello World!");
// 기본적인 변수 선언 방법
/** 
변수
변수는 데이터를 저장하고 나중에 사용할 수 있도록 하는데 사용됩니다.
ES6에서는 var 대신 let과 const 키워드로 변수를 선언할 수 있으며,
변수에 할당되는 값은 자료형에 따라 달라집니다.
*/
let name = "John"; // 문자열 변수
const age = 30; // 숫자 상수
let isStudent = true; // 불리언 변수

let x = 10;
const y = 20;
x = 5; // 가능
// y = 30; // 에러 발생: y는 상수로 재할당이 불가능합니다.


// 기존 함수 선언 방식
function addOld(a, b) {
    return a + b;
}

// 화살표 함수 
// 화살표 함수는 function 키워드를 대신하여 간결한 함수를 작성할 수 있습니다.
let add = (a, b) => a + b;
console.log(add(1, 2))

console.log(addOld(1, 4));

// 매개변수 기본값
// 매개변수 기본값을 사용하여 매개변수가 전달되지 않았을 경우에 기본값을 설정할 수 있습니다.
let greet = (name = "World") => console.log(`Hello, ${name}! in greet()`);
greet(); // "Hello, World!"
greet("John"); // "Hello, John!"

function greetOld(name = "World") {
    console.log(`Hello ${name}! in greetOld()`);
}

greetOld();
greetOld("James");




// Rest 매개변수
// Rest 매개변수는 함수에 전달된 인수들을 배열로 모아서 받아올 수 있습니다.
// python의 kwargs와 유사하다.
let sum = (...args) => {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }
    return result;
};

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15



// Spread 연산자
// Spread 연산자는 배열을 전개하여 함수에 전달할 수 있습니다.
let arr = [1, 2, 3];
let sumForSpread = (a, b, c) => a + b + c;
console.log(sumForSpread(...arr)); // 6


// 템플릿 리터럴
// 템플릿 리터럴을 사용하여 문자열 내에 변수나 표현식을 삽입할 수 있습니다.
let nameForTemplate = "John";
let ageForTemplate = 30;
console.log(`My name is ${nameForTemplate} and I'm ${ageForTemplate} years old.`);




// 클래스
// ES6에서는 클래스(class)를 사용하여 객체 지향 프로그래밍을 구현할 수 있습니다.
class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}.`);
    }
}

let cat = new Animal("Tom");
cat.sayName(); // "My name is Tom."






// 모듈
// 모듈은 코드를 여러 파일로 나누어 작성할 수 있게 해주며,
// 코드의 재사용성과 유지보수성을 높여줍니다.
// ES6에서는 import와 export 키워드를 사용하여 모듈화된 코드를 작성할 수 있습니다.
// add.js
// export let addForModule = (a, b) => a + b;

// // main.js
// import { addForModule } from ".";
// console.log(addForModule(10, 20)); // 30






// 네임스페이스
// 네임스페이스는 서로 관련된 기능들을 하나의 객체로 묶어서 사용할 수 있게 해줍니다.
// export와 import를 조합하여 네임스페이스를 만들 수 있습니다.

// math.js
// let add = (a, b) => a + b;
// let subtract = (a, b) => a - b;
// let multiply = (a, b) => a * b;
// let divide = (a, b) => a / b;

// export default {
//     add,
//     subtract,
//     multiply,
//     divide,
// };

// // main.js
// import math from "./math.js";
// console.log(math.add(10, 20)); // 30
// console.log(math.subtract(10, 20)); // -10
// console.log(math.multiply(10, 20)); // 200
// console.log(math.divide(10, 20)); // 0.5


/* 


ECMAScript 5(이하 ES5)와 ECMAScript 6(이하 ES6)는 자바스크립트의 버전 차이를 나타내는 용어입니다. ES5는 2009년에 출시되었고, ES6는 2015년에 출시되었습니다. ES6에서는 ES5에서 부족했던 기능들이 추가되었고, 코드의 가독성과 유지보수성이 높아졌습니다.

ES6에서 추가된 주요 기능들은 다음과 같습니다.

let과 const 변수: var 대신 let과 const 키워드를 사용하여 변수를 선언할 수 있습니다. let 변수는 블록 스코프(block scope)를 가지며, const 변수는 상수로서 재할당이 불가능합니다.

화살표 함수: function 키워드를 대신하여 간결한 함수를 작성할 수 있습니다.

템플릿 리터럴: 문자열 내에 변수나 표현식을 삽입할 수 있습니다.

객체 리터럴 확장: 객체의 속성명과 속성값을 간결하게 작성할 수 있습니다.

클래스: 객체 지향 프로그래밍을 구현할 수 있는 클래스를 사용할 수 있습니다.

모듈: 코드를 여러 파일로 나누어 작성할 수 있게 해주며, 코드의 재사용성과 유지보수성을 높여줍니다.

매개변수 기본값과 Rest 매개변수: 매개변수 기본값을 사용하여 매개변수가 전달되지 않았을 경우에 기본값을 설정할 수 있고, Rest 매개변수는 함수에 전달된 인수들을 배열로 모아서 받아올 수 있습니다.

Spread 연산자: 배열을 전개하여 함수에 전달할 수 있습니다.

Promise: 비동기 처리를 위한 새로운 패턴으로, 콜백 지옥(callback hell)을 해결할 수 있습니다.

ES6에서 추가된 기능들은 기존의 코드와 호환성이 부족하므로, 모든 브라우저에서 ES6의 기능을 사용할 수는 없습니다. 하지만 Babel 같은 도구를 사용하면 ES6의 코드를 ES5 코드로 변환하여 모든 브라우저에서 사용할 수 있도록 할 수 있습니다.

*/

function httpPost(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch(error => console.error(error));
}


function httpGet(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
}


httpGet('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error));
httpPost('https://jsonplaceholder.typicode.com/posts/1', { name: 'John', age: 30 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
