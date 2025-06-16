setTimeout(() => {
  console.log("Công việc 1 hoàn thành");
  setTimeout(() => {
    console.log("Công việc 2 hoàn thành");
    setTimeout(() => {
      console.log("Công việc 3 hoàn thành");
      // Và cứ thế tiếp diễn...
    }, 1000);
  }, 1500);
}, 2000);