# 📝 Simple To-Do List App

This is a basic **To-Do List** web application that allows users to add tasks and strike them through once completed. It's built using **HTML**, **CSS**, and **JavaScript** and utilizes DOM manipulation to handle user input and events.

## ✨ Features

- **Add Tasks**: Users can type in a task and add it to the list by clicking "Add" or pressing Enter.
- **Strike-through on Click**: Clicking on a task will toggle a strike-through effect, indicating completion.
- **Clear Input Field**: After adding a task, the input field clears automatically for convenience.

## 🛠️ Technologies Used

- **HTML5**: Defines the structure of the webpage.
- **CSS3**: Used for basic styling, including the strike-through effect for completed tasks.
- **JavaScript (ES6)**: Handles user interaction with the form and list items.

## 🚀 How It Works

1. **Add a Task**: When a user types a task in the input field and submits the form, the task is added as a new list item in the `<ul>`.
2. **Strike-through Effect**: Clicking on any list item will toggle the `strikethrough` class, applying a line-through effect to mark it as complete or incomplete.
3. **Clear Input**: After a task is added, the input field is cleared for the user to enter the next task.

## 🔧 Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd todo-list-app
   ```

3. **Open `index.html` in a web browser**:

   You can simply open the `index.html` file in your browser to see the app in action.

## 🧩 Code Explanation

### HTML

The structure includes:
- A `<form>` with an input field where users can type in their tasks.
- An unordered list (`<ul>`) where tasks will be added dynamically.

### CSS

Basic styling is applied to the list items, and a `.strikethrough` class is used to add the strike-through effect when a task is clicked.

### JavaScript

- **Form Submission**: 
   - The `form` listens for a `submit` event.
   - When the form is submitted, it prevents the default form action using `evt.preventDefault()`.
   - The user's input is retrieved, and a new list item (`<li>`) is created with the input text.
   - The new list item is appended to the `<ul>`, and the input field is cleared.

- **Strike-through Toggle**:
   - The `ul` listens for a `click` event.
   - When a list item (`<li>`) is clicked, it checks if the target element is an `<li>`.
   - It toggles the `strikethrough` class to apply or remove the line-through effect.


```

## 📖 Example Usage

1. Enter a task in the input field.
2. Submit the form by clicking the "Add" button or pressing Enter.
3. The task is added to the list.
4. Click on the task to mark it as complete by striking through the text.
5. Click again to remove the strike-through effect and mark the task as incomplete.

## 🚀 Future Improvements

- Add the ability to remove tasks from the list.
- Save the to-do list in local storage so it persists on page reloads.
- Improve the UI with better styling and animations.

