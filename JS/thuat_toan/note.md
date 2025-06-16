# Thuật toán hay dùng

1. thuật toán tính tổng
- cộng dồn các phần tử trong mảng hoặc 1 thuộc tính của object lại

- các bước để giải
 + khởi tạo biến tổng
 + chạy vòng lặp for để duyệt mảng hoặc object
 + cộng dồn để tính tổng
 + xuất kết quả ra
 

2. Kỹ Thuật Cờ Tín Hiệu (Flag Technique)
- kiểu boolean (true or false)
  - khởi tạo biến cờ ( tuỳ mục đích mà khởi tạo là true hoặc false)
  - chạy vòng lặp for để duyệt mảng hoặc object
  - if( kiểm tra điều kiện nào đó)
    + cập nhật lại biến cờ nếu thoả mãn điều kiện
 - xuất ra thông báo

 3. Tìm giá trị lớn nhất nhỏ nhất (Max, min)
- khởi tạo biến maxValue = arr[0]
  - chạy vòng lặp for để duyệt mảng hoặc object
  - if( so sánh maxValue với arr[i])
    + cập lại maxValue nếu arr[i]> maxValue
 - xuất ra thông báo

4. So Sánh Phần Tử Hiện Tại và Phần Tử Sau
 - khởi tạo biến đếm
 - chạy for
 - gán currentValue cho arr[i]
  + và nextValue cho currentValue[i+1]
- so sánh current và next nếu thoả điều kiện thì tăng biến đếm
- xuất ra kết quả của biến đếm

5. Mảng lồng mảng (Nested Array)

