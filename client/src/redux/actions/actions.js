import { ActionTypes } from "../constants/actionTypes";

export const addTodo = (todo) => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_TODO_PENDING });
    fetch("http://localhost:4000/newTodo", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })
        .then((res) => res.json())
        .then((data) =>
            dispatch({ type: ActionTypes.ADD_TODO_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: ActionTypes.GET_TODOS_ERROR, payload: error })
        );
};

export const getTodos = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_TODOS_PENDING });
    fetch("http://localhost:4000/todos")
        .then((res) => res.json())
        .then((data) =>
            dispatch({ type: ActionTypes.GET_TODOS_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: ActionTypes.GET_TODOS_ERROR, payload: error })
        );
};

export const updateTodo = (todo) => (dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_TODO_PENDING });
    fetch(`http://localhost:4000/todo/${todo.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })
        .then((res) => res.json())
        .then((data) =>
            dispatch({ type: ActionTypes.UPDATE_TODO_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: ActionTypes.UPDATE_TODO_ERROR, payload: error })
        );
};

export const removeTodo = (id) => (dispatch) => {
    dispatch({ type: ActionTypes.REMOVE_TODO_PENDING });
    fetch(`http://localhost:4000/todo/${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((data) =>
            dispatch({ type: ActionTypes.REMOVE_TODO_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: ActionTypes.REMOVE_TODO_ERROR, payload: error })
        );
};
