// console.log("Hello world!");

// const constVar = "Hello";

// // constVar = 10;

// let letVar = "123456";
// var varVar = "654321";

// console.log(letVar, varVar);

// letVar = 100;
// varVar = true;

// console.log(letVar, varVar);

// var undefinedVar = null;
// undefinedVar = "String";
// undefinedVar = 10000;
// undefinedVar = true;
// console.log(typeof(undefinedVar));

// var obj = {
//     key: 100,
//     key2: "ioasdjoidas",
//     obj2: {
//         nested: "hello",
//     },
// };

// console.log(obj.key);
// console.log(obj.obj2.nested);
// console.log(obj["key2"]);

// obj.key3 = "asdasddas";

// console.log(obj);

// delete obj.key2;

// console.log(obj);

// var arr = [0, "item", true, null];

// arr[1];

// arr.push(100);

// console.log(arr.length);

// // for (let index = 0; index < arr.length; index++) {
// //     const element = arr[index];
// // }

// funcName(1, 2);

// function funcName(paramA, paramB) {
//     console.log(paramA, paramB);
// }

// const variable = function() {

// }

// variable()

// const arrFunc = () => {
    
// }

// console.log("HasdijOJojsdalUIHIO".replace("Hasd", "Hasagi"));
// console.log((1230.18923).toFixed(2));

// const now = new Date();
// console.log(now.toLocaleString("us"));

// console.log(/([A-Z])\w+/g.test("Adslsadkla"));

// const err = new Error("Nhân phẩm không đủ!");

// throw err;

// var - function scope

// var a = 10;

// function funcA() {
//     var b = 15;

//     console.log(a); //10
//     console.log(b); //15
// }

// funcA();

// if (true) {
//     var c = 25;
// }

// console.log(a); //10
// console.log(c); //25
// // console.log(b); //

// let - block scope {}

// let a = 10;

// function funcA() {
//     let b = 15;

//     console.log(a); //10
//     console.log(b); //15
// }

// funcA();

// if (true) {
//     let c = 25;
//     console.log(c); //25
// }

// console.log(a); //10
// console.log(b); //15

// function print(num, countTime) {
//     setTimeout(function() {
//         console.log(num);
//     }, countTime*1000);
// }

// function countDown(countNum) {
//     // var i; // -1
//     for (var i = countNum; i >= 0; i--) {
//         print(i, countNum - i);
//     }
// }

// countDown(5);

console.log("A");

setTimeout(
    function() {
        console.log("B");
    },
    1000
);

console.log("C");