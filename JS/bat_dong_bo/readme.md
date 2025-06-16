lập trình đồng bộ (synchronous) là gì?
Trong kiểu đồng bộ, người chạy sau phải đứng chờ người chạy trước hoàn thành.

A chạy xong → B mới bắt đầu chạy.

B chạy xong → C mới được chạy.

Nhược điểm: Nếu A bị chậm thì B và C bị đứng chờ, làm mất thời gian.

 bất đồng bộ (asynchronous) 

 A chạy, trong lúc đó B không cần đứng chờ, có thể khởi động, làm nóng cơ thể, chuẩn bị sẵn.

 Khi A đưa gậy xong, B liền chạy ngay mà không mất thời gian khởi động lại.

 Ưu điểm: Tiết kiệm thời gian, tận dụng được thời gian rảnh trong khi chờ việc khác hoàn thành.




 -----------------------------
|        Call Stack         |  
|---------------------------|
| console.log("1")          | ← chạy trước
| setTimeout(..., 3000)     | ← giao cho Web API
| console.log("3")          | ← chạy tiếp
-----------------------------

               ↓
       Web APIs (trình duyệt)
       [ đếm 3 giây ở đây ⏱️ ]

               ↓ (sau 3s)
       Callback Queue (hàng đợi)
       [ () => console.log("2") ]

               ↓
Event Loop kiểm tra → thấy rảnh  
→ đẩy callback vào Call Stack để chạy
