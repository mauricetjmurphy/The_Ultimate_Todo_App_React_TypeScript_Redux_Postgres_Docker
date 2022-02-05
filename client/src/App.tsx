import React from "react";
import styles from "./App.module.css";
import { TodoList } from "./containers/todoList/TodoList";

function App() {
    return (
        <div className={styles.App}>
            <TodoList />
        </div>
    );
}

export default App;
