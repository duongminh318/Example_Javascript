todo-app/
├── index.html        // Giao diện chính của người dùng
├── app.js            // Module chính, điều khiển toàn bộ ứng dụng
├── task-list.js      // Module quản lý danh sách công việc
└── task-item.js      // Module đại diện cho một công việc cụ thể




# Tham chiếu `this` trong JavaScript

| Trường hợp               | `this` đại diện cho                         |
|--------------------------|---------------------------------------------|
| Trong object             | Đối tượng đó                                |
| Trong class              | Đối tượng được tạo từ class                 |
| Trong sự kiện (HTML)     | Phần tử HTML vừa được click                 |
| Trong hàm bình thường    | Có thể là `window` hoặc `undefined` (tùy chế độ strict) |
| Trong arrow function     | Kế thừa `this` từ bên ngoài (không có `this` riêng) |
