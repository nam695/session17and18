students.push({
    id: 2,
    name: "Lê Thị C",
    gender: "nữ",
    age: 21,
    mark: 9.5
  });
  
  students.push({
    id: 3,
    name: "Phạm Văn D",
    gender: "nam",
    age: 19,
    mark: 7
  });
  
let topStudent = students[0];
  
  for (let i = 1; i < students.length; i++) {
    if (students[i].mark > topStudent.mark) {
      topStudent = students[i];
    }
  }
  
console.log("Học sinh có điểm cao nhất:");
console.log("ID:", topStudent.id);
console.log("Tên:", topStudent.name);
console.log("Giới tính:", topStudent.gender);
console.log("Tuổi:", topStudent.age);
console.log("Điểm:", topStudent.mark);
  