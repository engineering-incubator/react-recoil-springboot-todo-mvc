import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  createTodoApi,
  deleteTodoApi,
  fetchTodoApi,
  toggleTodoApi,
  updateTodoTextApi,
} from "./api/todoApi";
import TodoFilter from "./components/todo-filter";
import TodoForm from "./components/todo-form";
import TodoItem from "./components/todo-item";
import computedTodoStates from "./states/computed-todo-states";
import todoStates from "./states/core/todo-states";

function App() {
  const setTodos = useSetRecoilState(todoStates);
  const todos = useRecoilValue(computedTodoStates);

  useEffect(function fetchTodos() {
    (async function () {
      const response = await fetchTodoApi();
      if (response.isSuccess) {
        setTodos(response.data);
      }
    })();
  }, []);

  const onCreateTodoHandler = async (text: string) => {
    const response = await createTodoApi({
      text,
    });
    if (response.isSuccess) {
      setTodos((todos) => [...todos, response.data]);
    }
  };

  const onDeleteTodoHandler = async (id: number) => {
    const response = await deleteTodoApi(id);

    if (response.isSuccess) {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }
  };

  const onToggleHandler = async (id: number, isDone: boolean) => {
    const response = await toggleTodoApi(id, isDone);
    if (response.isSuccess) {
      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, isDone } : todo))
      );
    }
  };

  const onUpdateHandler = async (id: number, text: string) => {
    const response = await updateTodoTextApi(id, text);
    if (response.isSuccess) {
      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
      );
    }
  };

  return (
    <div className="App">
      <TodoFilter />
      <TodoForm onSubmit={onCreateTodoHandler} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheck={(checked: boolean) => onToggleHandler(todo.id, checked)}
          onDelete={onDeleteTodoHandler}
          onUpdate={onUpdateHandler}
        />
      ))}
    </div>
  );
}

export default App;
