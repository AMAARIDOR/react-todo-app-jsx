import { useState } from "react";

const todoItems = [];

function TodoItem() {
  return (
    <div className="todoItemContainer">
      <input className="todoItemCheckbox" type="checkbox" />
      <p className="todoItemValue"></p>
      <button className="todoItemDeleteButton">Delete item</button>
    </div>
  );
}

function TodoPendingTasks() {
  return (
    <div className="todoPendingTasksContainer">
      <h2>Pending Tasks:</h2>
    </div>
  );
}

function TodoCompletedTasks() {
  return (
    <div className="todoCompletedTasksContainer">
      <h2>Tasks Completed:</h2>
    </div>
  );
}

function AddItemBar() {
  const [inputValue, setInputValue] = useState("");
  const [todoItem, setTodoItem] = useState(todoItems);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    setTodoItem(
      todoItems.push({
        id: todoItems.length + 1,
        todoValue: inputValue,
        taskStatus: false,
      })
    );
    console.log(todoItems);
  }

  return (
    <div className="addItemBarContainer">
      <input
        onChange={handleInputChange}
        className="addItemInputField"
        type="text"
      />
      <button onClick={handleClick} className="addItemButton">
        Add Item
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="todoAppContainer">
      <TodoPendingTasks />
      <TodoCompletedTasks />
      <AddItemBar />
    </div>
  );
}

export default App;
