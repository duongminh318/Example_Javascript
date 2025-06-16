// hàm chào hỏi
// function chaoHoi(ten) {

//     console.log("Xin chào bạn hiền  "+ ten);
// }

// function chaoHoi2(ten1, ten2) {

//     console.log(ten1+ " Xin chào bạn  "+ ten2);
// }

// chaoHoi2("Tủn", "Tèo");


// chaoHoi("Ngọc");
// chaoHoi("Win");
// chaoHoi("Linh");
// chaoHoi("Toàn");

// function tinhDienTichHCN(chieuDai, chieuRong){
    
//     console.log(chieuDai*chieuRong);
// }

// tinhDienTichHCN(3,4)

// var tinhTong= function(soA, soB){
//     var tong = soA + soB;
//    return tong;

// }

// var congHam= 3 + tinhTong(3,4);
// console.log(congHam);

// function tinhDienTich(dai, rong) {
//     return dai * rong; // Trả về diện tích
//   //  console.log("hello");
//    }

 // var dienTichPhong = tinhDienTich(5, 4);  // Lấy diện tích phòng
//console.log("Diện tích phòng là: " + dienTichPhong);

// hàm so sánh (kết quả của hàm dienTich đi so anh)
// function soSanhDienTich(d1, r1, d2, r2) {
//     var dt1 = tinhDienTich(d1, r1);
//     var dt2 = tinhDienTich(d2, r2);

//     if (dt1 > dt2) {
//         console.log("Hình chữ nhật 1 lớn hơn.");
//     } else if (dt2 > dt1) {
//         console.log("Hình chữ nhật 2 lớn hơn.");
//     } else {
//         console.log("Hai hình chữ nhật bằng nhau.");
//     }

// }  


// soSanhDienTich(3, 4, 4, 5);
// soSanhDienTich(5, 4, 6, 3);

// function inThongDiep(thongDiep) {
//     console.log("Thông điệp: " + thongDiep);
//     // Không có return
//    }
//    var ketQua = inThongDiep("Chào mừng!");
//    console.log("Giá trị trả về của hàm inThongDiep: " + ketQua); // In ra: undefined



// function giaTriTuyetDoi(number) {
//     if (number >= 0) {
//     return number;
//     } else {
//     return  - number; // Hoặc có thể dùng: return -number; hoặc return number * -1;
//     }
//    }
//    // Gọi hàm và in ra giá trị trả về
//    var triTuyetDoi1 = giaTriTuyetDoi(5);
//    console.log(triTuyetDoi1);