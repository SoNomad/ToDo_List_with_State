const btn = document.querySelector("#btn");
const inp = document.querySelector(".inp");

//NEW

const dela = [
  {
    text: "Первое дело",
    done: false,
  },
];

const tasks_list = document.querySelector(".tasks-list");

const render = () => {
  tasks_list.textContent = "";
  for (let i = 0; i < dela.length; i++) {
    //див для чекбокса, названия и кнопки удаления
    const new_task = document.createElement("div");
    new_task.classList = "new_task";

    //див для чекбокса и названия
    const cbx_name = document.createElement("div");

    //создание чекбокса
    const check = document.createElement("input");
    check.type = "checkbox";

    //создание кнопки удаления
    const del = document.createElement("button");
    del.classList = "btn";
    del.textContent = "❌";

    //добавление элементов в узлы
    cbx_name.prepend(check, dela[i].text, del);
    tasks_list.append(cbx_name);

    //эвент удаления по кнопке
    del.addEventListener("click", () => {
      remove(i + 1);
    });

    check.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("checked");
      checkToDo(i);
    });
  }
};

//-----------------функция удаления --------------------//
const remove = (numb) => {
  dela.splice(numb - 1, 1);
  render();
};

//-----------------функция добавления --------------------//
const addToDo = (text) => {
  const temp = {
    text: text,
    done: false,
  };
  dela.push(temp);
  document.querySelector("#input_text").value = "";

  render();
};

//-----------------функция добавления из инпута---------//
inp.addEventListener("submit", (e) => {
  e.preventDefault();

  let text = document.querySelector("#input_text").value;
  if (text) {
    addToDo(text);
  }
});

//-----------------функция изменения состояния done---------------//
const checkToDo = (i) => {
  dela[i].done = !dela[i].done;
};
