let elem = document.querySelector('#elem');
// Работа с классами

// elem.classList.add("www");
// elem.classList.remove("www");

// let has_class = elem.classList.contains("www");

// if (has_class) {
//     elem.classList.remove('www');
// } else {
//     elem.classList.add("www");
// }

// let count = elem.classList.length;

// for (let i = 0; i < count; i++) {
//     alert(elem.classList[i])
// }

// Работа с CSS

// elem.style.cssText = "color: red; font-size: 30px; border: 1px solid black;"

// Свойство tagName

// 1
// elem.addEventListener("click", function() {
//     alert(elem.tagName);
// });

// 2

// elem.addEventListener("click", function() {
//     alert(elem.tagName.toLowerCase);
// });

// 3 
// let elems = document.querySelector('.www');
// elems.forEach(function(element) {
//     let tagName = element.tagName.toLowerCase();
//     element.textContent += " (" + tagName + ")";
// });

// Вставка элементов через appendChild

// 1
// let ol = document.querySelector("ol");
// let li = document.createElement("li");
// li.textContent = "пункт";
// ol.appendChild(li);
// 2
// items.forEach(function(itemText) {
//     let li = document.createElement("li");
//     li.textContent = itemText;
//     ul.appendChild(li);
// });

// Вставка элементов через insertAdjacentHTML

// 1
// elem.insertAdjacentHTML("beforebegin", "<span>!!!</span>");

// 2
// elem.insertAdjacentHTML("afterEnd", "<span>!!!</span>");

// 3
// elem.insertAdjacentHTML("afterBegin", "<span>!!!</span>");

// 4
// elem.insertAdjacentHTML("beforeend", "<span>!!!</span>");

// Удаление и клонирование
// 1
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let button = document.querySelector("#deleteButton");

// button.addEventListener("click", function() {
//     parent.removeChild(child);
// });
// 2
// let ol = document.querySelector("ol");

// button.addEventListener("click", function() {
//     let lastChild = ol.lastElementChild;
//     if (lastChild) {
//         ol.removeChild(lastChild);
//     }
// });

// // 3
// elem.addEventListener("click", function() {
//     elem.parentNode.removeChild(elem);
// });

// 4

// ol.addEventListener("click", function(event) {
//     let target = event.target;
//     if (target.tagName === "li") {
//         ol.removeChild(target);
//     }
// });

// 5 
// let input = document.querySelector("input");
// let btn = document.querySelector("#Button");

// button.addEventListener("click", function() {
//     let result = input.cloneNode(true);
//     input.parentNode.appendChild(result);
// });

// Потомки
// 1
// let first_child = elem.firstElementChild;
// if (first_child) {
//     first_child.style.color = "red";
// }

// 2
// let last_child = elem.lastElementChild;
// if (first_child) {
//     first_child.style.color = "red";
// }

// 3

// let all_child = elem.children

// for (let i = 0; i < all_child.length; i++) {
//     all_child[i].textContent += '!';
// }

// Соседи

// 1

// let up = elem.previousElementSibling;
// if (up) {
//     up.textContent += '!';
// }

// 2

// let down = elem.nextElementSibling;
// if (down) {
//     down.textContent += '!';
// }

// 3

// let next_neighbor = elem.nextElementSibling;
// if (next_neighbor) {
//     let next_next_neighbor = next_neighbor.nextElementSibling;
//     if (next_next_neighbor) {
//         next_next_neighbor.textContent += '!';
//     }
// }

// Родители

// 1

// let parent = elem.parentElement;
// if (parent) {
//     parent.style.color = "red";
// }

// 2

// let parents_parent = elem.parentElement.parentElement;
// if (parents_parent) {
//     parents_parent.style.color = "red";
// }

// На величину границы

// 1

// let button = document.querySelector("#button");

// button.addEventListener("click", function() {
//     let border_top = elem.clientTop;
//     alert(border_top);
// });

// // 2
// button.add