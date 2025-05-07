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
function getFullNameAndAge() {
    return {
        fullName: "Tony Stark",
        age: 45
    };
}
const { fullName, age } = getFullNameAndAge();
console.log(fullName, age);
