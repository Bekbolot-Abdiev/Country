import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxTodo = () => {
  const { todoData } = useSelector((state) => state.todo);
  //   const { todoData } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(todoData);
  const addNewTodo = (e) => {
    e.preventDefault();
    console.log(e);
    const formData = e.target;
    console.log(formData.title);
    let todoTitle = formData.title.value.trim();
    console.log(todoTitle);

    if (todoTitle !== "") {
      // const newTodo = { title: todoTitle, id: todoData.at(-1) + 1 || 1 };
      const newTodo = { title: todoTitle, id: todoData.length > 0 ? todoData[todoData.length - 1].id + 1 : 1 };
      dispatch({ type: "addTodo", payload: newTodo });
      formData.title.value = "";
    }
  };

  const deleteTodoItem = (id) => {
    dispatch({ type: "delTodo", payload: id });
  };

  return (
    <>
      <form onSubmit={addNewTodo}>
        <input type="text" placeholder="Enter to do" name="title" />
        <input type="submit" />
      </form>
      <ul>
        {todoData.map((el) => (
          <li key={el.id}>
            <span>{el.title}</span>
            <button onClick={() => deleteTodoItem(el.id)}>del</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReduxTodo;
