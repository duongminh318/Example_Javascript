// const person = {
//     firstName: "Alex",
//     lastName: "Win",
//     age: 24,
//     city: "CanTho"
// }

// const a= person.fisrtName;
// const b= person.lastName;
// const c= person.age;
// console.log(a);
// console.log(b);
// console.log(c);

// const { firstName, lastName, age, city} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);

// const { firstName: ten, lastName: ho } = person;
// console.log(ten);
// console.log(ho);


// const { firstName, lastName, age, height="175" , city} = person;
// console.log(height);
// person.height


// const user = {
//     name: "Alice",
//     address: {
//         street: "123 Main St",
//         city: "Anytown"
//     }
// };
// // Destructuring nested object
// const { name, address: { city, street } } = user;
// console.log(name); // "Alice"
// console.log(city); // "Anytown"
// console.log(street); // "123 Main St"


// function displayPersonInfo({ firstName, lastName }) {
//     console.log(`Tên: ${firstName} ${lastName}`);
// }

// const person = { firstName: "Peter", lastName: "Parker" };
// displayPersonInfo(person); // Truyền object vào hàm
// function getFullNameAndAge() {
//     return {
//         fullName: "Tony Stark",
//         age: 45
//     };
// }
// const { fullName, age } = getFullNameAndAge();
// console.log(fullName, age);


//ex6

// const order = {
//     orderId: "ORD001",
//     customer: {
//         name: "Le Van C",
//         phone: "0909123456"
//     },
//     status: "pending"
//     // Không có deliveryDate
// };

// const {orderId, customer: {name} , status, deliveryDate="Chưa xác định" } = order;

// console.log(`Mã đơn: ${orderId}, Khách hàng: ${name}, Trạng thái: ${status}, Ngày giao: ${deliveryDate}`);


// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020
// };

//delete car.year; // Xóa thuộc tính 'year'

// console.log(car);
// console.log(car.year); // undefined (thuộc tính không còn tồn tại)


// const book = {
//     title: "The Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     publisher: "first news"
//     // Không có 'publisher'
// };

// if (book.publisher) { // Kiểm tra thuộc tính 'publisher' có tồn tại
//     // console.log(book.publisher);
//      delete book.publisher;
// } else {
//     console.log("Thuộc tính 'publisher' không tồn tại.");
// }
// console.log(book);
// //  console.log(book.publisher);

// const item = {
//     name: "Laptop",
//     price: 1200
// };
// delete item.price; // Xóa thuộc tính 'price'
// console.log(item.price); // undefined (thuộc tính không tồn tại)
// console.log("price" in item); // false (thuộc tính không tồn tại)

// item.price = undefined; // Gán giá trị undefined
// console.log(item.price); // undefined (giá trị là undefined)
// console.log("price" in item); // true (thuộc tính vẫn tồn tại)

// item.price = null; // Gán giá trị null
// console.log(item.price); // null (giá trị là null)
// console.log("price" in item); // true (thuộc tính vẫn tồn tại)

// const student = {
//     name: "Bob",
//     age: 20,
//     "class name": "English",
//     "model-number": "XYZ-123" // Tên thuộc tính có dấu gạch ngang
// };

// //console.log(student.name);

// const propertyName = "age";
//console.log(student["model-number"]); // "XYZ-123" (dấu ngoặc vuông)

// console.log(student.age);
// console.log(student[propertyName]);
// console.log(student["class name"]);

// const data = {
//  "1": "value one",
//  "2": "value two"
// };
// console.log(data[1]); // "value one" (dấu ngoặc vuông)


// const person = {
//  firstName: "Charlie",
//  lastName: "Brown",
//  age: 20

// };

// const keys = Object.keys(person); // Lấy mảng tên thuộc tính ["firstName", "lastName", "age"]

// keys.forEach(key => {
//  console.log(`${key}: ${person[key]}`); // Duyệt và truy cập bằng dấu ngoặc vuông
// });


// class Dog {
//     constructor(name, breed) {
//         this.name = name,
//             this.breed = breed
//     }

//     bark() { // Method 'bark'
//         console.log("Woof!");

//     }

//     describe() { // Method 'describe'
//         console.log(`${this.name} is a ${this.breed}.`);
//     }

// }

// // let a= new Number(3);
// // let b= 5;


// console.log(a);
// const myDog = new Dog("Buddy", "Golden Retriever");
// const myDog2 = new Dog("Buddy2", "Silver Retriever");

// console.log(myDog);
// console.log(myDog2);

// // OOP = Lập trình với đối tượng.
// // Object = Thứ có thuộc tính + hành vi.
// // Class = Bản thiết kế để tạo ra nhiều object giống nhau.

// class Student {
//     constructor(name, age) {
//         this.name = name; // gán tham số name cho thuộc tính name của object
//         this.age = age;   // gán tham số age cho thuộc tính age của object
//     }
// }


// Class Cha (Parent Class/Superclass)
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log(`${this.name} is eating.`);
//     }
// }

// class Cat extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     meow() {
//         console.log("Meow!");
//     }
// }

// const myCat = new Cat("Whiskers", "Siamese");
// console.log(myCat.name);
// console.log(myCat.breed);
// myCat.eat(); // "Whiskers is eating." (method kế thừa từ Animal)
// myCat.meow(); // "Meow!" (method riêng của Cat)

// Class Animal, Cat, Dog - đã định nghĩa ở phần trên
// const genericAnimal = new Animal("Animal");
// const myDog = new Dog("Buddy", "Golden Retriever");
// const myCat = new Cat("Whiskers", "Siamese");

// console.log(myDog instanceof Dog); // true
// console.log(myDog instanceof Animal); //false
// console.log(myCat instanceof Cat);
// console.log(myCat instanceof Animal); 
// console.log(genericAnimal instanceof Animal);
// console.log(genericAnimal instanceof Dog);
// console.log(myDog instanceof Cat); // false (Dog và Cat là anh em, không kế thừa lẫn nhau)
// console.log(myCat instanceof Dog); // false (Cat và Dog là anh em, không kế thừa lẫn nhau)

// Class Cha (Animal) - đã định nghĩa ở phần trên
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating.`);
//     }

//     makeSound() { // Method 'makeSound' trong class cha
//         console.log("Generic animal sound");
//     }
// }

// // Class Con (Dog) kế thừa từ Animal
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
//     bark() {
//         console.log("Woof!");
//     }

//     makeSound() { // Override method 'makeSound' từ class cha
//         console.log("Woof! Woof!"); // Thay đổi hành vi
//     }
// }

// // Class Con (Cat) kế thừa từ Animal
// class Cat extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
//     meow() {
//         console.log("Meow!");
//     }
//     makeSound() { // Override method 'makeSound' từ class cha
//         super.makeSound(); // Gọi method gốc của class cha (Animal.makeSound())
//         console.log("Meow! Meow!"); // Thêm hành vi riêng của Cat
//     }
// }

// const genericAnimal = new Animal("Animal");
// genericAnimal.makeSound(); // "Generic animal sound" (gọi method gốc của Animal)
// const myDog = new Dog("Buddy", "Golden Retriever");
// myDog.makeSound(); // "Woof! Woof!" (gọi method override của Dog)
// const myCat = new Cat("Whiskers", "Siamese");
// myCat.makeSound(); // "Generic animal sound" (gọi super.makeSound() - Animal)
//  // "Meow! Meow!" (thêm hành vi riêng của Cat
