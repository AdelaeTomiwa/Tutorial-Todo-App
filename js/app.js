// Selector
const burger = document.querySelector('.burger');
const todoList = document.querySelector('.todo-list');
const main = document.querySelector('main');
const time = document.querySelector('.time');
const form = document.querySelector('.add-form');
const inputValue = document.querySelector('.add-form input').value;

// UI Class
class UI {
   //Show Time
   static showTime() {
      const today = new Date();
      const mins = today.getMinutes();
      const sec = today.getSeconds();
      const hour = today.getHours();

      // Append into the time
      time.innerHTML = `
      <h2>${hour}<span>:</span>${inputZeros(mins)}<span>:</span>${inputZeros(
         sec
      )}</h2>   
   `;
   }
}

// Events
burger.addEventListener('click', toggleBurger);
form.addEventListener('submit', addTodo);

// Functions

// Burger
function toggleBurger() {
   burger.classList.toggle('toggle');
   todoList.classList.toggle('show');
   main.classList.toggle('show');
}

// Add Todo
function addTodo(e) {
   e.preventDefault();

   // Get the value of the input
   console.log(inputValue);
}

// Current Time Func
function current() {
   UI.showTime();

   setTimeout(current, 1000);
}

current();

function inputZeros(e) {
   return (parseInt(e, 10) < 10 ? '0' : '') + e;
}
