let tasks = [
    { title: "Xin việc ở cty nước ngoài", completed: true },
    { title: "Mua đất", completed: true },
    { title: "Học thêm 1 cái gì đó mới", completed: false },
    { title: "Mua xe hơi", completed: false },
    { title: "Ăn cơm cùng gia đình ít nhất 3lần / tuần", completed: false },
    { title: "Đi du lịch vòng quanh thế giới", completed: false },
  ];

  const taskList = document.getElementById("taskList");

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";
      li.innerHTML = `
        <span onclick="toggleComplete(${index})">${task.title}</span>
        <div class="actions">
          <button onclick="editTask(${index})">Sửa</button>
          <button onclick="deleteTask(${index})">X</button>
        </div>
      `;
      taskList.appendChild(li);
    });
  }

  function addTask() {
    const input = document.getElementById("taskInput");
    const title = input.value.trim();
    if (title !== "") {
      tasks.push({ title, completed: false });
      input.value = "";
      renderTasks();
    }
  }

  function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }

  function editTask(index) {
    const newTitle = prompt("Nhập lại nội dung:", tasks[index].title);
    if (newTitle !== null && newTitle.trim() !== "") {
      tasks[index].title = newTitle.trim();
      renderTasks();
    }
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  renderTasks();