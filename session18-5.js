let students = [];
    let editingIndex = null;

function renderStudents() {
  const table = document.getElementById('studentTable');
  table.innerHTML = '';
  students.forEach((student, index) => {
    const row = `<tr>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.className}</td>
      <td>
        <button class="edit-btn" onclick="editStudent(${index})">Sửa</button>
        <button class="delete-btn" onclick="deleteStudent(${index})">Xóa</button>
      </td>
        </tr>`;
        table.innerHTML += row;
      });
    }

function addStudent() {
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const className = document.getElementById('class').value.trim();

  if (!name || !age || !className) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (editingIndex !== null) {
    students[editingIndex] = { name, age, className };
    editingIndex = null;
  } else {
    students.push({ name, age, className });
  }

  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('class').value = '';
  renderStudents();
}

function deleteStudent(index) {
  if (confirm("Bạn có chắc muốn xóa sinh viên này không?")) {
    students.splice(index, 1);
    renderStudents();
  }
}

function editStudent(index) {
  const student = students[index];
  document.getElementById('name').value = student.name;
  document.getElementById('age').value = student.age;
  document.getElementById('class').value = student.className;
  editingIndex = index;
}

function searchStudent() {
  const keyword = document.getElementById('search').value.toLowerCase();
  const table = document.getElementById('studentTable');
  table.innerHTML = '';
  students.forEach((student, index) => {
  if (student.name.toLowerCase().includes(keyword)) {
      const row = `<tr>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.className}</td>
    <td>
    <button class="edit-btn" onclick="editStudent(${index})">Sửa</button>
    <button class="delete-btn" onclick="deleteStudent(${index})">Xóa</button>
    </td>
    </tr>`;
        table.innerHTML += row;
        }
      });
}