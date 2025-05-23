// console.log("1. Bắt đầu tác vụ đồng bộ"); // 1

// function hamDongBo() {
//     let sum = 0;
//     for (let i = 0; i < 100000; i++) { // Giả lập tác vụ tốn thời gian (tính toán)
//         sum += i;
//     }
//     console.log("2. Tác vụ đồng bộ hoàn thành, tổng là:", sum); // 2
// }

// hamDongBo();

// console.log("3. Kết thúc chương trình đồng bộ"); // 3


// console.log("1. Bắt đầu tác vụ bất đồng bộ"); // 1

// setTimeout(function() { // Bắt đầu tác vụ bất đồng bộ (delay 1 giây)
//     console.log("2. Tác vụ bất đồng bộ hoàn thành sau 1 giây"); // 3 (sau 1 giây)
// }, 1000);

// setTimeout(function() { // Bắt đầu tác vụ bất đồng bộ (delay 1 giây)
//     console.log("2. Tác vụ bất đồng bộ hoàn thành sau 2 giây"); // 3 (sau 1 giây)
// }, 2000);

// console.log("3. Tiếp tục công việc khác..."); // 2 (in ra ngay lập tức)


// callback hell

// function tacVuA(callback) {
//     setTimeout(function() {
//         console.log("Tác vụ A hoàn thành");
//         callback(); // Gọi callback khi tác vụ A xong
//     }, 500); // Mô phỏng 500ms delay cho tác vụ A
// }

// function tacVuB(callback) {
//     setTimeout(function() {
//         console.log("Tác vụ B hoàn thành");
//         callback(); // Gọi callback khi tác vụ B xong
//     }, 500); // Mô phỏng 500ms delay cho tác vụ B
// }

// function tacVuC(callback) {
//     setTimeout(function() {
//         console.log("Tác vụ C hoàn thành");
//         callback(); // Gọi callback khi tác vụ C xong
//     }, 500); // Mô phỏng 500ms delay cho tác vụ C
// }

// // Gọi Callback Hell (lồng tác vụ B vào callback của A, và tác vụ C vào callback của B)
// tacVuA(function() { // Callback của tác vụ A
//     tacVuB(function() { // Callback của tác vụ B (lồng trong callback của A)
//         tacVuC(function() { // Callback của tác vụ C (lồng trong callback của B)
//             console.log("Cả ba tác vụ A, B, C đã hoàn thành (Callback Hell)");
//         });
//     });
// });

// console.log("Chương trình chính vẫn chạy..."); // In ra trước khi các tác vụ hoàn thành


// function run1(callback) {
//   setTimeout(() => {
//     console.log("Người 1 chạy");
//     callback();
//   }, 1000);
// }

// function run2(callback) {
//   setTimeout(() => {
//     console.log("Người 2 chạy");
//     callback();
//   }, 1000);
// }

// function run3(callback) {
//   setTimeout(() => {
//     console.log("Người 3 chạy");
//     callback();
//   }, 1000);
// }

// function run4(callback) {
//   setTimeout(() => {
//     console.log("Người 4 chạy");
//     callback();
//   }, 1000);
// }

// // Bắt đầu chạy bằng callback lồng nhau
// run1(() => {
//   run2(() => {
//     run3(() => {
//       run4(() => {
//         console.log("Hoàn thành!");
//       });
//     });
//   });
// });


// const myFirstPromise = new Promise(function(resolve, reject) {
//     console.log("Promise đang được tạo...");
//     setTimeout(function() {
//         resolve("Promise đã thành công!"); // Gọi resolve sau 1 giây
//     }, 1000);
// });

// console.log("Promise đã được tạo (trạng thái ban đầu: pending)");




// function muaSua() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("✅ Đã mua xong sữa 🥛");
//       resolve();
//     }, 500);
//   });
// }

// function muaBanh() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("✅ Đã mua xong bánh 🍞");
//       resolve();
//     }, 500);
//   });
// }

// function muaTraiCay() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("✅ Đã mua xong trái cây 🍎");
//       resolve();
//     }, 500);
//   });
// }

// muaSua()
//   .then(muaBanh)
//   .then(muaTraiCay)
//   .then(() => {
//     console.log("🎉 Đã có đủ sữa, bánh và trái cây!");
//   });

// console.log("📌 Bạn vẫn có thể làm việc khác trong lúc chờ mua đồ...");


// const loiHuaMuaDoAn = new Promise(function(thanhCong, thatBai) {
//     console.log("Lời hứa mua đồ ăn đang được tạo ra..."); // 1. Báo hiệu lời hứa bắt đầu

//     setTimeout(function() {
//         const coDoAnKhong = true; // Giả sử hôm nay quán có đồ ăn

//         if (coDoAnKhong) {
//             thanhCong("Đồ ăn đã mua xong!"); // 🍕 Thành công! Gọi thanhCong khi mua được đồ ăn
//         } else {
//             thatBai("Hôm nay quán hết đồ ăn rồi!"); // 😭 Thất bại! Gọi thatBai nếu quán hết đồ ăn
//         }
//     }, 1000); // Chờ 1 giây để đi mua đồ ăn
// });

// console.log("Lời hứa đã được tạo ra (đang chờ đi mua đồ ăn)"); // 2. Báo hiệu lời hứa đã sẵn sàng

// loiHuaMuaDoAn
//     .then(function(thanhCong) {
//         // Hàm này chạy NẾU MUA ĐƯỢC ĐỒ ĂN (thanhCong)
//         console.log(".then() được gọi - MUA ĐỒ ĂN THÀNH CÔNG!"); // 4. Báo hiệu thành công
//         console.log("Kết quả:", thanhCong); // In ra: "Đồ ăn đã mua xong!"
//     })
//     .catch(function(thatBai) {
//         // Hàm này chạy NẾU KHÔNG MUA ĐƯỢC ĐỒ ĂN (thatBai)
//         console.log(".catch() được gọi - MUA ĐỒ ĂN THẤT BẠI!"); // Sẽ không chạy nếu có đồ ăn
//         console.error("Lý do:", thatBai); // In ra lý do thất bại
//     })
//     .finally(function() {
//         // Hàm này chạy SAU KHI MUA XONG (dù thành công hay thất bại)
//         console.log(".finally() được gọi - KẾT THÚC VIỆC MUA ĐỒ ĂN!"); // 5. Báo hiệu kết thúc
//     });

// console.log("Bạn vẫn đang làm việc khác trong khi chờ mua đồ ăn..."); // 3. Báo hiệu bạn không phải chờ mua đồ ăn xong


// function tacVuPromiseA() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Tác vụ Promise A hoàn thành");
//             resolve("Kết quả từ Task A");
//         }, 500);
//     });
// }

// function tacVuPromiseB(dataFromA) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Tác vụ Promise B hoàn thành (dựa trên:", dataFromA, ")");
//             resolve("Kết quả từ Task B");
//         }, 500);
//     });
// }

// function tacVuPromiseC(dataFromB) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Tác vụ Promise C hoàn thành (dựa trên:", dataFromB, ")");
//             resolve("Kết quả từ Task C (cuối cùng)");
//         }, 500);
//     });
// }

// // Promise Chain (thay thế Callback Hell)
// tacVuPromiseA()
//     .then(dataA => tacVuPromiseB(dataA)) // Chaining: trả về Promise từ .then()
//     .then(dataB => tacVuPromiseC(dataB)) // Chaining tiếp
//     .then(finalResult => {
//         console.log("Chuỗi Promise hoàn thành, kết quả cuối cùng:", finalResult);
//     })
//     .catch(error => {
//         console.error("Lỗi trong chuỗi Promise:", error);
//     });

// console.log("Chương trình chính vẫn chạy..."); // In ra trước khi chuỗi Promise xong
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Promise 1 đã resolve sau 2 giây");
        resolve(1);
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 đã bị reject sau 1 giây");
         resolve(2);
    }, 1000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Promise 3 đã resolve sau 1.5 giây");
        resolve(3);
    }, 1500);
});

console.log("Bắt đầu chạy Promise.all...");

Promise.all([promise1, promise2, promise3])
    .then((results2) => {
        console.log("Promise.all đã resolve!");
        console.log("Tất cả Promise thành công:", results2);
    })
    .catch((error) => {
        console.error("Ít nhất một Promise thất bại:", error);
    });

console.log("Chương trình chính vẫn chạy...");
