// function chaoBuoiSang() {
//     return "Chào buổi sáng!";
// }

// const chaoBuoiSang1 = () => " Chào buổi sáng";

// console.log(chaoBuoiSang());
// console.log(chaoBuoiSang1());

// const tinhTong = function (soA, soB) {
//     console.log("tổng của 2 số là");
//     var tong = soA + soB;
//     return tong;

// }

// const tinhTong2= (soA, soB) => {
//     console.log("tổng của 2 số là");
//     var tong = soA + soB;
//     return tong;
// }

// const tinhTong3= (soA, soB) => soA+ soB;

// console.log(tinhTong3(3,4));


// console.log(tinhTong(2,3));
// console.log(tinhTong2(2,3));

// const binhPhuong= (x) => x*x;

// const tinhDienTichTron = (banKinh) => Math.PI * banKinh * banKinh;


// const laSoChan = (n) => n % 2 === 0;

// console.log(laSoChan(4));


// console.log(binhPhuong(3));


// function phaCaphe(dinhKem = "sữa tươi") {
//     console.log(`pha cà phê với ${dinhKem}`);
// }

// phaCaphe("sữa đặc");
// phaCaphe("kem");
// phaCaphe();
// // phaCaphe(null);

// function chaoHoi(tuoi,ten = "Khách" ) {
//     console.log("Xin chào, " + ten + "!");
// }
// chaoHoi("Ngọc")
// chaoHoi();
// chaoHoi(undefined);

// // ex3
// function tinhTienKhachSan(soDem, loaiPhong = "Standard", maThanhVien = undefined) {

//     let giaPhongCoBan;
//     switch (loaiPhong) {
//         case "standard":
//             giaPhongCoBan = 500000;
//             break
//         case "Deluxe":
//             giaPhongCoBan = 800000;
//             break
//         case "Suite":
//             giaPhongCoBan = 1200000;
//             break
//         default:
//         giaPhongCoBan = 500000; // mặc định satandard
//         break
//     }

//     let tongTien = soDem * giaPhongCoBan;

//     //xét các trường hợp đặc biêt
//     if(soDem>=3){
//         tongTien*=0.95;
//     }

//     // giảm thêm 10% cho khách mã thành viên
//     if(maThanhVien!== undefined){
//         tongTien*=0.9;
//     }

//     return tongTien;
// }

// console.log(tinhTienKhachSan(2, "standard"));
// console.log(tinhTienKhachSan(5, "Deluxe"));
// console.log(tinhTienKhachSan(3, "Suite", "23"));
// console.log(tinhTienKhachSan(3, "Vip", "23")); //phòng VIP (không hợp lệ) -> standard


// function muaHang(nguoiMua, ...cacMatHang){
//     console.log(`${nguoiMua}  mua các món`, cacMatHang );
// }

// muaHang("Ngọc", "Sữa", "Bánh mì", "Cam", "Nước Suối",)


// function tinhTongCacSo(soDau, ...cacSoConLai){
//     console.log("Tham số đầu tiên:", soDau); // Tham số đầu tiên
//     console.log("Các tham số còn lại (rest parameters):", cacSoConLai); // Là một mảng

//     let tong= soDau;
//     for(let so of cacSoConLai){
//         tong+=so;
//     }
//     return tong;

// }

// console.log(tinhTongCacSo(1, 2, 0, 4, 5 )); 
// console.log(tinhTongCacSo());


// 1 callback khi
// 1. là 1 hàm
// 2. là đối của hàm khác
// 3. được gọi lại trong hàm kia


// function chaoBan(callback){
//     console.log("Xin chào bạn");
//     callback();
// }

// function chaoBan2(callback){

//     callback()
// }




// function hoiSucKhoe(){
    
//     console.log("Bạn có khoẻ không", );
//     console.log(" chào mừng bạn");
// }

// // let Name= "Ngọc";
// // hoiSucKhoe(Name);
// // chaoBan(hoiSucKhoe);
// chaoBan2(hoiSucKhoe)


function tinhDienTichHCN(dai, rong, callback){
    let ketQua= dai*rong;
    callback(ketQua);

}

function thucHienPhepTinh(a, b, callback) {
    let ketQua = a + b;
    callback(ketQua); // Gọi callback function và truyền kết quả vào
}

function hienThiKetQua(result){
    console.log("kết quả là ", result);
    
}

tinhDienTichHCN(3,5, hienThiKetQua);
thucHienPhepTinh(5, 3, hienThiKetQua); // Kết quả là: 8

