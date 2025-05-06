// const colors = ["red", "green", "blue"];
// for (const color of colors) {
//     console.log(`Màu: ${color}`);
// }

// const prettyGirls = ["Linh", "Trang", "Hà"];

// for (const girl of prettyGirls) {
//   console.log(`Mời ${girl} lên nhận hoa 🌸`);
// }


// const bestFriend = ["Hà", "Tuấn"];
// bestFriend.push("Phương");
// console.log(bestFriend);

// const animals = ["dog", "cat"];
// animals.push("bird");
// console.log(animals); // Output: ["dog", "cat", "bird"]
// animals.push("fish", "hamster");
// console.log(animals); // Output: ["dog", "cat", "bird", "fish", "hamster"]


// const bestFriends = ["Minh", "Nam", "Phương"];
// const removed= bestFriends.pop(); // xoá phần tử cuối cùng ra khỏi mảng
// console.log(bestFriends);
// console.log(`tạm biệt ${removed} 😢`);

// const squad = ["Nam", "Phương"];
// squad.unshift("Quân");   //Quân mới vô team, được ưu tiên đứng đầu 🤝
// console.log(squad); // ["Quân", "Nam", "Phương"]


// bạn cũ chuyển trường
// const squad = ["Quân","Nam", "Phương"];
// const movingFriend= squad.shift();   // xoá phần tử đầu tiên ra khỏi mảng
// console.log(`Tạm biệt ${movingFriend}`);
// console.log(squad); // ["Nam", "Phương"]


// const team = ["tiến", "tùng", "tâm", "tèo"];
// team.splice(1, 2,"Thắng");
// console.log(team);


// const students = ["Huy", "Lan", "Linh"];
// students.forEach((student, index) => {
//     console.log(`Bạn ${student} đứng vị trí ${index + 1}`);
// })

// const students = ["Huy", "Lan", "Linh"];

// function inThongTinHocSinh(student, index) {
//     console.log(`Bạn ${student} đứng vị trí ${index + 1}`);
// }

// // Bạn Huy đứng vị trí 1

// students.forEach(inThongTinHocSinh);


// const students = ["Huy", "Lan", "Linh"];
// students.forEach(function(student, index) {
//  console.log(`Bạn ${index + 1}: ${student}`);
// });


// const heights = [165, 172, 180, 158];
// const tallStudent = heights.filter(height=>height>170);
// console.log(tallStudent);

// console.log(heights);


// const numbers = [1, 2, 3, 4, 5];
// const foundNumber = numbers.find(function(number) {
//  return number > 3; // Điều kiện: số lớn hơn 3
// });
// console.log(foundNumber); // Output: 4

// const scores = [6, 8, 10, 7];
// const perfectScore = scores.find(score => score === 10);
// console.log(perfectScore); // 10

// const numbers = [3, 2, 1, 4, 5];
// const foundIndex = numbers.findIndex(function(number) {
//  return number < 2; // Điều kiện: số nhỏ hơn 2
// });
// console.log(foundIndex); // Output: 2 (index của số 1)

// const salaries = [1000, 2000, 3000];
// const increased = salaries.map(salary => salary*1.5);
// console.log(salaries);
// console.log(increased);

// const topStudents=["Mai", "Long", "An", "Tuấn"];
// const top3= topStudents.slice(0);
// console.log(top3);

const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[-1]);
// // Trích xuất từ index 1 đến (nhưng không bao gồm) index 3
// const subArray1 = numbers.slice(1, 3);
// console.log(subArray1); // Output: [2, 3]
// console.log(numbers); // Output: [1, 2, 3, 4, 5] (mảng gốc không đổi)

// const subArray2 = numbers.slice(2);
// console.log(subArray2);

// const lastTwo = numbers.slice(-2);
// console.log(lastTwo); // Output: [4, 5]

// const copyArray = numbers.slice();
// console.log(copyArray); // Output: [1, 2, 3, 4, 5]



