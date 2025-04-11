let student = {
    id: 1,
    name: "Nguyễn Văn A",
    gender: "nam",
    age: 20,
    mark: 8
  };
let newStudent = { ...student };
let students = [];
students.push(newStudent);
console.log("Thông tin học sinh vừa thêm:");
console.log("ID:", newStudent.id);
console.log("Tên:", newStudent.name);
console.log("Giới tính:", newStudent.gender);
console.log("Tuổi:", newStudent.age);
console.log("Điểm:", newStudent.mark);