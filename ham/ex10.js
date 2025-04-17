var scores = [
    { subject: "Toán", score: 8, group: "Tự nhiên" },
    { subject: "Văn", score: 7, group: "Xã hội" },
    { subject: "Lý", score: 10, group: "Tự nhiên" },
    { subject: "Hóa", score: 6, group: "Tự nhiên" }
];

var hasNaturalSubject = false; // cờ đánh dấu có môn Tự nhiên không
var maxScore, minScore; 

for (var i = 0; i < scores.length; i++) {
    if (scores[i].group === "Tự nhiên"){
        if (!hasNaturalSubject) {
              // Gặp môn "Tự nhiên" đầu tiên → gán điểm cho max & min
              maxScore = minScore = scores[i].score;
              hasNaturalSubject= true;
        }else{
            if (scores[i].score > maxScore) maxScore = scores[i].score;
            if (scores[i].score < minScore) minScore = scores[i].score;
        }

    }
}

if(hasNaturalSubject){
 console.log(maxScore-minScore); // in ra hiệu điểm (khoảng cách giữa maxScore và minScore)
}else{
    console.log("không có môn Tự nhiên nào trong danh sách");
}
