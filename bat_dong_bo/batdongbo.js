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



// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Promise 1 đã resolve sau 2 giây");
//         resolve(1);
//     }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise 2 đã bị reject sau 1 giây");
//          reject("lỗi ở đây");
//     }, 1000);
// });

// const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Promise 3 đã resolve sau 1.5 giây");
//         resolve(3);
//     }, 1500);
// });

// console.log("Bắt đầu chạy Promise.all...");

// Promise.all([promise1, promise2, promise3])
//     .then((results2) => {
//         console.log("Promise.all đã resolve!");
//         console.log("Tất cả Promise thành công:", results2);
//     })
//     .catch((error) => {
//         console.error("Ít nhất một Promise thất bại:", error);
//     });

// console.log("Chương trình chính vẫn chạy...");


//race

// const promiseFast = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Promise nhanh đã resolve sau 500ms");
//         resolve("Promise nhanh thắng cuộc!");
//     }, 500); // Resolve sau 500ms (nhanh hơn)
// });

// const promiseSlow = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Promise chậm đã resolve sau 1500ms");
//         resolve("Promise chậm về sau...");
//     }, 1500); // Resolve sau 1500ms (chậm hơn)
// });

// console.log("Bắt đầu chạy Promise.race (đua giữa promiseFast và promiseSlow)...");

// Promise.race([promiseFast, promiseSlow])
//     .then((ketQua) => {
//         console.log("Promise.race đã resolve!");
//         console.log("Kết quả từ Promise.race:", ketQua); // Kết quả sẽ là "Promise nhanh thắng cuộc!"
//     })
//     .catch((error) => {
//         console.error("Promise.race bị reject (không mong đợi trong ví dụ này):", error);
//     });

// console.log("Chương trình chính vẫn chạy...");


// const p1 = new Promise(resolve => setTimeout(() => {
//     console.log("✅ P1 xong sau 2s");
//     resolve("P1");
// }, 2000));

// const p2 = new Promise((resolve, reject) => setTimeout(() => {
//     console.log("❌ P2 xong sau 1s nhưng bị rejected");
//     reject("P2 lỗi");
// }, 1000));

// const p3 = new Promise(resolve => setTimeout(() => {
//     console.log("✅ P3 xong sau 1.5s");
//     resolve("P3");
// }, 1500));

// console.log("🚀 Bắt đầu Promise.race...");

// Promise.race([p1, p2, p3])
//   .then(result => {
//     console.log("🎯 Ai nhanh hơn thì dùng:", result);
//   })
//   .catch(error => {
//     console.error("💥 Có một Promise thất bại đầu tiên:", error);
//   });

// console.log("🏃 Chương trình chính vẫn tiếp tục...");


// Promise.resolve(20).then(data => {
//  console.log("Promise đã resolve với giá trị:", data); // In ra: Promise đã resolve với giá trị: 20
// });


// Promise.reject("Lỗi").catch(error => console.error(error)); // Lỗi


// async function helloAsync() {
//     return "Xin chào từ async function!";
// }

// helloAsync().then(result => console.log(result));

// async function asyncError() {
//     throw new Error("Lỗi từ async function!");
// }

// asyncError().catch(error => console.error(error));
 

// promise.then().


// async function hamViDu() {
//     console.log("Hàm async bắt đầu..."); // 1. In ra đầu tiên

//     console.log("Bắt đầu chờ 1 giây và lấy giá trị...");
//     const ketQuaCho1Giay =  await new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Promise 1 giây đã resolve!");
//             resolve("Giá trị sau 1 giây"); // Resolve với một giá trị cụ thể
//         }, 1000); // Chờ 1 giây (Promise resolve sau 1 giây)
//     });

//     console.log("Đã chờ xong 1 giây và nhận giá trị:", ketQuaCho1Giay); // 3. In ra sau khi chờ 1 giây, hiển thị giá trị

//     console.log("Bắt đầu chờ 0.5 giây và lấy giá trị khác...");

//     const ketQuaChoNuaGiay = await new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Promise 0.5 giây đã resolve!");
//             resolve("Giá trị sau 0.5 giây"); // Resolve với một giá trị cụ thể khác
//         }, 500);  // Chờ 0.5 giây (Promise resolve sau 0.5 giây)
//     });

//     console.log("Đã chờ xong 0.5 giây và nhận giá trị:", ketQuaChoNuaGiay); // 4. In ra sau khi chờ 0.5 giây, hiển thị giá trị

//     console.log("Hàm async kết thúc."); // 5. In ra cuối cùng
//     return "Hoàn thành!"; // Trả về giá trị khi hàm async kết thúc
// }



// hamViDu().then(ketQuaCuoiCung => {
//     console.log("Kết quả trả về từ hàm async:", ketQuaCuoiCung); // 6. In ra kết quả trả về
// });

// console.log("Chương trình chính vẫn chạy..."); // 2. In ra thứ hai (không chờ hàm async)


// nếu không có asyn/ await thì sao


// function promise1Giay() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Promise 1 giây đã resolve!");
//             resolve("Giá trị sau 1 giây");
//         }, 1000);
//     });
// }

// function promiseNuaGiay() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Promise 0.5 giây đã resolve!");
//             resolve("Giá trị sau 0.5 giây");
//         }, 500);
//     });
// }

// function hamViDuPromise() {
//     return promise1Giay()
//         .then(ketQua1 => {
//             console.log(ketQua1);
//             return promiseNuaGiay();
//         })
//         .then(ketQua2 => {
//             console.log(ketQua2);
//             return "Hoàn thành!";
//         });
// }

// hamViDuPromise().then(kq => {
//     console.log(kq);
// });

// console.log("Chương trình chính vẫn chạy...");


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       //.then(response => response.json())
//       .then(json => console.log(json))


// async function layBaiViet() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await response.json();
//   console.log("📄 Bài viết:", data);
// }


// layBaiViet();




// fetch('https://jsonplaceholder.typicode.com/postss') // URL của JSONPlaceholder API endpoint để lấy danh sách posts
//     .then(response => {  //ReadableStream 
//         console.log("Response status:", response.status); // In ra HTTP status code (ví dụ: 200 OK)
//         if (!response.ok) { // Kiểm tra nếu response không thành công (ví dụ: 404, 500)
//             throw new Error(`lỗi không tìm thấy máy chủ status: ${response.status}`);
//         }
//         //Chuyển đổi response từ dạng ReadableStream thành JavaScript object (dùng .json()).
//         return response.json(); // Parse body response thành JSON (trả về Promise)
//     })

//     .then(posts => {
//         console.log("Dữ liệu Posts từ JSONPlaceholder API:", posts); // In ra danh sách posts (dạng mảng object)
//         // Ở đây bạn có thể xử lý dữ liệu posts, ví dụ: hiển thị lên trang web
//     })
//     .catch(error => {
//         console.error("Lỗi Fetch API:", error); // Xử lý lỗi fetch
//     });

// console.log("Chương trình chính vẫn chạy...");


// async function layDanhSachPosts() {
//     try {
//         console.log("Bắt đầu fetch danh sách posts từ JSONPlaceholder...");
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//         console.log("Response status:", response.status);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const posts = await response.json(); // chuyển JSON string → object
//         console.log("Dữ liệu Posts từ JSONPlaceholder API:", posts);
//         return posts; // Trả về danh sách posts để có thể dùng ở nơi khác (ví dụ: hiển thị)

//     } catch (error) {
//         console.error("Lỗi Fetch API (async/await):", error);
//         // Có thể return một giá trị mặc định hoặc re-throw lỗi tùy theo yêu cầu
//         return error;
//     }
// }

// layDanhSachPosts(); // Gọi hàm async để fetch và xử lý posts
// console.log("Chương trình chính vẫn chạy...");


// Định nghĩa một hàm async để có thể sử dụng await

async function taoPostMoi() {
    try {
        // Thông báo bắt đầu gửi POST request
        console.log("Bắt đầu tạo post mới (POST request)...");

        // Gửi POST request tới server JSONPlaceholder (fake API)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', // Sử dụng phương thức POST để tạo dữ liệu mới
            headers: {
                'Content-Type': 'application/json; charset=UTF-8' // Gửi dữ liệu dưới dạng JSON
            },
            body: JSON.stringify({ // Dữ liệu muốn gửi lên server, phải được stringify // chuyển object → JSON string
                title: 'Tiêu đề bài post mới từ Javascript', // Tiêu đề của bài post
                body: 'Nội dung của bài post mới này được tạo từ Javascript và Fetch API.', // Nội dung
                userId: 1 // ID của người dùng giả định
            })
        });

        // In ra mã trạng thái HTTP của response
        console.log("Response status (POST):", response.status);

        // Nếu response không thành công (status không phải 2xx), ném lỗi
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Chuyển đổi dữ liệu JSON từ response sang object JavaScript
        const newPost = await response.json();

        // In ra dữ liệu bài post mới (thật ra là phản hồi giả từ JSONPlaceholder)
        console.log("Post mới đã được 'tạo' (JSONPlaceholder fake):", newPost);

        // Trả về bài post mới cho bên ngoài nếu cần
        return newPost;

    } catch (error) {
        // Bắt và in ra lỗi nếu có vấn đề trong quá trình fetch hoặc xử lý JSON
        console.error("Lỗi POST request:", error);
        return error; // Trả về lỗi nếu cần xử lý thêm bên ngoài
    }
}

// Gọi hàm để thực hiện tạo post mới
taoPostMoi();

// In ra dòng này ngay lập tức vì JavaScript là bất đồng bộ
console.log("Chương trình chính vẫn chạy...");
