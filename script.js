const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", function() {
  const task = input.value.trim();
  if (task !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    span.innerText = task;
    delBtn.innerText = "Delete";
    editBtn.innerText = "Edit";
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";
  }
});

list.addEventListener("click", function(e) {
  if (e.target.innerText === "Delete") {
    e.target.parentElement.remove();
  } else if (e.target.innerText === "Edit") {
    const li = e.target.parentElement;
    const span = li.querySelector("span");
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.innerText;
    li.insertBefore(input, span);
    li.removeChild(span);
    e.target.innerText = "Save";
  } else if (e.target.innerText === "Save") {
    const li = e.target.parentElement;
    const input = li.querySelector("input");
    const span = document.createElement("span");
    span.innerText = input.value.trim();
    li.insertBefore(span, input);
    li.removeChild(input);
    e.target.innerText = "Edit";
  }
});





