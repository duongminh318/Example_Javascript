todo-app/
├── index.html        // Giao diện chính của người dùng
├── app.js            // Module chính, điều khiển toàn bộ ứng dụng
├── task-list.js      // Module quản lý danh sách công việc
└── task-item.js      // Module đại diện cho một công việc cụ thể




# Tham chiếu `this` trong JavaScript

| Trường hợp            | `this` đại diện cho                                     |
| --------------------- | ------------------------------------------------------- |
| Trong object          | Đối tượng đó                                            |
| Trong class           | Đối tượng được tạo từ class                             |
| Trong sự kiện (HTML)  | Phần tử HTML vừa được click                             |
| Trong hàm bình thường | Có thể là `window` hoặc `undefined` (tùy chế độ strict) |
| Trong arrow function  | Kế thừa `this` từ bên ngoài (không có `this` riêng)     |



# 🧠 Giải thích `this` trong bài To-Do List

## 📌 `this` là gì?

Trong JavaScript, từ khóa `this` được dùng để **chỉ đến đối tượng đang "sở hữu" đoạn code**.

Nói cách đơn giản, `this` là **“tôi” hoặc “chính đối tượng hiện tại”**.

---

## 📦 Trong class `TaskItem`

Trong bài To-Do List, `this` được dùng trong `task-item.js` – nơi định nghĩa một công việc.

### 🔹 Ví dụ:
```js
const task = new TaskItem("Làm bài");
```

Lúc này, `task` là một công việc. Bất kỳ dòng code nào trong class `TaskItem` viết `this`, đều ám chỉ `task`.

---

### ✏️ Chi tiết các dòng có `this` trong `TaskItem`:

#### 1. Trong constructor:
```js
this.text = taskText;
this.completed = false;
```
- `this.text` là tên công việc (ví dụ "Làm bài")
- `this.completed` là trạng thái đã hoàn thành chưa (false ban đầu)

#### 2. Trong phương thức `markComplete()`:
```js
this.completed = true;
```
- Đánh dấu công việc này là đã hoàn thành

#### 3. Trong phương thức `render()`:
```js
li.textContent = this.text;
if (this.completed) {
    li.classList.add('completed');
}
```
- Dùng `this.text` để lấy tên công việc hiển thị
- Dùng `this.completed` để gạch ngang nếu đã xong

---

### ⚠️ Lưu ý đặc biệt – Trong `addEventListener`:
```js
li.addEventListener('click', () => {
    this.markComplete();
    li.classList.add('completed');
});
```
- Dùng **arrow function** `() => {}` để giữ nguyên `this`
- Nếu dùng `function () {}`, `this` bên trong sẽ bị sai (trỏ vào phần tử HTML thay vì công việc)

---

## 📋 Trong class `TaskList`

Trong `task-list.js`, `this` được dùng để chỉ chính đối tượng `TaskList`, ví dụ:

```js
this.tasks = [];
```
- `this` ở đây là danh sách công việc (gồm nhiều `TaskItem`)

Khi gọi `this.tasks.push(...)`, tức là thêm công việc vào danh sách hiện tại.

---

## 🧪 Tổng kết bảng `this` trong bài To-Do List:

| Vị trí                        | `this` là gì?            | Dùng để làm gì?                    |
| ----------------------------- | ------------------------ | ---------------------------------- |
| `this.text` trong `TaskItem`  | Công việc hiện tại       | Lấy tên công việc                  |
| `this.completed`              | Công việc hiện tại       | Biết đã làm xong chưa              |
| `this.markComplete()`         | Công việc hiện tại       | Đánh dấu là đã hoàn thành          |
| `this.tasks` trong `TaskList` | Danh sách công việc      | Lưu nhiều công việc                |
| `this` trong arrow function   | Giữ nguyên từ `render()` | Gọi đúng hàm `this.markComplete()` |

---

## ✅ Kết luận

- Trong class, `this` dùng để **truy cập vào các thuộc tính hoặc phương thức của chính đối tượng đó**
- Dùng arrow function để đảm bảo `this` không bị thay đổi
- Hiểu đúng `this` giúp viết code class rõ ràng, dễ hiểu và tránh lỗi
