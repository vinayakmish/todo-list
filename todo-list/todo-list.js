let arr = [];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let todoObject = arr[i];
    const { name } = todoObject; // same as const name = todoObject.name
    const { dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button class="delete-btn"
    onclick="
    arr.splice(${i},1);
    renderTodoList();"
    >Delete</button>`;

    todoListHTML += html;
  }

  // document.querySelectorAll(".delete-btn").forEach((deleteButton, index) => {
  //   deleteButton.addEventListener("click", () => {
  //     arr.splice(index, 1);
  //     renderTodoList();
  //   });
  // });

  const div = document.querySelector(".js-div");
  div.innerHTML = todoListHTML;
}

document.querySelector(".add-btn").addEventListener("click", () => {
  func();
});

function func() {
  const inputElement = document.querySelector(".input-btn");
  let name = inputElement.value;

  const dateInput = document.querySelector(".date-input");
  const dueDate = dateInput.value;
  if (name !== "" && dueDate !== "") {
    arr.push({
      // name: name,
      name,
      dueDate: dueDate, // if We have same obj name and var name we can just write it once
    });
  } else {
    alert("Enter the Name of the Todo and the Date");
  }
  inputElement.value = "";
  renderTodoList();
}

document.querySelector(".delete-btn").addEventListener("click", () => {
  deleteAll();
});

function deleteAll() {
  arr.splice(0, arr.length);
  renderTodoList();
}
