import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

// 定义 Todo 接口
interface Todo {
  id: string;
  title: string;
}

// 使用接口类型定义参数结构
export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click">
        Delete
      </button>
      <button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
        Edit
      </button>
      {todo.title}
    </li>
  );
}