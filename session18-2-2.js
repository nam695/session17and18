let skills = [
    { name: "HTML", complete: false },
    { name: "CSS", complete: false },
    { name: "Basic of JavaScript", complete: false },
    { name: "Node package Manager (npm)", complete: false },
    { name: "Git", complete: false }
  ];
  
function printSkills() {
    skills.forEach((skill, index) => {
      console.log(`${index + 1}. ${skill.name}`);
      console.log(`Complete: ${skill.complete}`);
    });
}
  
while (true) {
    let input = prompt("Nhập 1 trong các lựa chọn sau: C / R / U / D / E").toUpperCase();
  
    if (input === "C") {
      let newName = prompt("Nhập tên khóa học mới:");
      let status = prompt("Đã hoàn thành chưa? (true/false):") === "true";
      skills.push({ name: newName, complete: status });
      printSkills();
  
    } else if (input === "R") {
      printSkills();
  
    } else if (input === "U") {
      let index = Number(prompt("Nhập vị trí khóa học muốn cập nhật (bắt đầu từ 1):")) - 1;
      if (skills[index]) {
        let newName = prompt("Nhập tên mới cho khóa học:");
        let newStatus = prompt("Trạng thái hoàn thành (true/false):") === "true";
        skills[index].name = newName;
        skills[index].complete = newStatus;
        printSkills();
      } else {
        console.log("Vị trí không hợp lệ.");
      }
  
    } else if (input === "D") {
      let delIndex = Number(prompt("Nhập vị trí khóa học muốn xóa (bắt đầu từ 1):")) - 1;
      if (skills[delIndex]) {
        skills.splice(delIndex, 1);
        printSkills();
      } else {
        console.log("Vị trí không hợp lệ.");
      }
  
    } else if (input === "E") {
      console.log("Cảm ơn bạn đã đến với Rikkei Academy");
      break;
  
    } else {
      console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
    }
}
  