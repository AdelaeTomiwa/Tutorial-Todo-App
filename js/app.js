// Selector
const burger = document.querySelector('.burger');
const todoList = document.querySelector('.todo-list');
const main = document.querySelector('main');
const time = document.querySelector('.time');
const form = document.querySelector('.add-form');

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

   static addTodo(inputValue) {
      // Create a new Div
      const div = document.createElement('div');
      div.classList.add('todo');
      div.innerHTML = `
         <i class="fas fa-check-circle"></i>
         <h4>${inputValue}</h4>
         <i class="fas fa-trash"></i>
      `;

      // Append to the Todo List
      todoList.appendChild(div);
   }

   static checkTodo(el) {
      if (el.classList.contains('fa-check-circle')) {
         const todo = el.parentElement;
         todo.style.animation = 'checked 0.5s ease-in-out';
         todo.classList.toggle('checked');

         // Remove animation
         todo.addEventListener('animationend', () => {
            todo.style.animation = '';
         });
      } else {
         return;
      }
   }

   static trashTodo(el) {
      if (el.classList.contains('fa-trash')) {
         const todo = el.parentElement;
         todo.style.animation = 'trash 0.5s ease-in-out';

         // Remove animation
         todo.addEventListener('animationend', () => {
            todo.remove();
         });
      } else {
         return;
      }
   }

   static showAlert(message) {
      const div = document.createElement('div');
      div.classList = 'alert';
      div.innerHTML = message;

      main.appendChild(div);

      setTimeout(() => document.querySelector('.alert').remove(), 3000);
   }
}

// Events
burger.addEventListener('click', toggleBurger);
form.addEventListener('submit', addTodo);
todoList.addEventListener('click', checkTodo);
todoList.addEventListener('click', trashTodo);

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
   const inputValue = document.querySelector('.add-form input').value;

   // Check if it is empty
   if (inputValue === '') {
      // Show Alert
      UI.showAlert('Please fill the field');
   } else {
      // Add it to the UI
      UI.addTodo(inputValue);

      // Show Alert
      UI.showAlert(`${inputValue} has been added to your Todo List`);

      // Clear the Fields
      document.querySelector('.add-form input').value = '';

      // Focus on the Input
      document.querySelector('.add-form input').focus();
   }
}

// Current Time Func
function current() {
   UI.showTime();

   setTimeout(current, 1000);
}

// Run Function
current();

// Check Todo Func
function checkTodo(e) {
   const el = e.target;

   UI.checkTodo(el);
}

// Trash Todo Func
function trashTodo(e) {
   const el = e.target;

   UI.trashTodo(el);
}

function inputZeros(e) {
   return (parseInt(e, 10) < 10 ? '0' : '') + e;
}
