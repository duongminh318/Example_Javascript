// "use strict"
// console.log(this); 

// function show() {
//     console.log(this);
//  }

// show();

// const user= {
//     name: "Ngọc",

//     sayHello() {
//         console.log(this.name);
//     }
// };

//user.sayHello();


// function strictFunction() {
//     "use strict"; // Bật strict mode
//     console.log("Trong strictFunction, this là:", this);
//     console.log("this === undefined:", this === undefined); // Output: true
//    }
//     strictFunction(); // Gọi function độc lập


//    const myCar = {
//     color: "đỏ", // property 'color'
//     brand: "Toyota", // property 'brand'

//     drive: function() { // property 'drive' có giá trị là một function -> đây là METHOD
//     console.log("Xe đang chạy!");
//     },
//     honk: function() { // property 'honk' có giá trị là một function -> đây cũng là METHOD
//     console.log("Bíp bíp!");
//     }
//    };


//     myCar.drive();


// const myObject= {
//     propertyName :"giá trị thuộc tính",

//     myMethod:function(){
//         console.log("Trong myMethod, this là:", this);
//         console.log("this === myObject:", this === myObject); // Output: true
//         console.log("Thuộc tính của object:", this.propertyName); // Output: "Giá trị thuộc tính"
//     }
// }

//  myObject.myMethod();

// const globalFunc = myObject.myMethod; // KHÔNG có dấu ()
// globalFunc(); // this lúc này là window (hoặc undefined nếu strict mode)

// const person = {
//     name :"Alex",

//     sayHello:function(greeting, punctuation){
//         console.log(`${greeting}, my name is ${this.name}${punctuation}`);
//     }
// }

// const anotherPerson={
//     name: "Bob"
// }

// const anotherPerson2={
//     name: "Ngọc"
// }

// person.sayHello.call(anotherPerson,"hello ", "!");
// person.sayHello.call(person, "Hi", "."); 

// --- apply() ---
// person.sayHello.apply(anotherPerson2, ["Greetings", "..."]);

// const person = {
//     name: "Alice",

//     sayHello: function (greeting, punctuation) {
//         console.log(`${greeting}, my name is ${this.name}${punctuation}`);
//     }
// };


// const anotherPerson = {
//     name: "Bob"
// };


// const bobGreeter = person.sayHello.bind(anotherPerson, "good morning");
// bobGreeter("!!!");


// const aliceGreeter = person.sayHello.bind(person); // Tạo function mới, this luôn là person
// aliceGreeter("Bonjour", "~"); // Gọi function mới, truyền greeting và punctuation
// // Output: "Bonjour, my name is Alice~"


// --- Arrow Function định nghĩa tại Global Scope ---
// "use strict"

// const globalArrowFunction = () => {
//     console.log("Trong globalArrowFunction, this là:", this); // this ke thua keyword this tai global scope (window)
// };
// globalArrowFunction();

// const myObjectArrow = {
//     propertyName: "Giá trị object arrow",

//     myMethod: function() {
//         const arrowFunc = () => {
//         console.log("Arrow function, this là:", this); // this kế thừa từ myMethod, là myObjectArrow
//         };

//         arrowFunc.call({ name: 'Attempt to change this' });
//         arrowFunc.apply({ name: 'Another attempt' }); // Thử dùng apply() - KHÔNG CÓ TÁC DỤNG
//         const boundArrowFunc = arrowFunc.bind({ name: 'Bind attempt' }); // Thử dùng bind() - KHÔNG CÓ TÁC DỤN
//         boundArrowFunc(); // Gọi function đã bind - this vẫn không đổi
//         arrowFunc(); // GỌI HÀM Ở ĐÂY
//     }


// };

// myObjectArrow.myMethod();

// const myObjectRegular = {
//     propertyName: "Giá trị object regular",

//     myMethod: function() {
//     const regularFunc = function() {
//     console.log("Regular function, this là:", this);
//     };

//     regularFunc.call({ name: 'Call context' }); // call() CÓ TÁC DỤNG
//     regularFunc.apply({ name: 'Apply context' }); // apply() CÓ TÁC DỤNG
//     const boundRegularFunc = regularFunc.bind({ name: 'Bind context' }); // bind() CÓ TÁC DỤNG
//     boundRegularFunc();

//     regularFunc(); // Gọi regular function bình thường (this = global/undefined)


// }
// }

// myObjectRegular.myMethod();


const myObject = {
    value: 20,
    regularMethod: function () {
        const arrowFunc = () => {
            console.log("this.value trong arrowFunc:", this.value);
        };
        arrowFunc();
    },
    arrowMethod: () => {
        console.log("this.value trong arrowMethod:", this.value);
    }
};
myObject.regularMethod();
myObject.arrowMethod();
