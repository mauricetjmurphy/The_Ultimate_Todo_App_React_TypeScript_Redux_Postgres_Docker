import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/actions/actions";
import { TodoForm } from "../todoForm/TodoForm";
import { TodoListItem } from "../todoListItem/TodoListItem";
import styles from "./todoList.module.css";

export const TodoList: React.FC = () => {
    const todos: Array<Todo> = useSelector(
        (state: any) => state.allTodos.todos
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, [todos, dispatch]);

    return (
        <>
            <header className={styles.header}>
                <h1>Todo App with React, TypeScript & Redux</h1>
            </header>
            <TodoForm />
            <ul className={styles.todoListContainer}>
                {todos.map((todo, i) => (
                    <TodoListItem key={i} todo={todo} />
                ))}
            </ul>
        </>
    );
};
