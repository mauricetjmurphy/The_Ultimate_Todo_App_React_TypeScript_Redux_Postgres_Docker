import { ActionTypes } from "../constants/actionTypes";

const todosInitialState = {
    pending: false,
    todos: [],
    error: null,
};

export const addTodoReducer = (
    state = todosInitialState,
    { type, payload, error }
) => {
    switch (type) {
        case ActionTypes.ADD_TODO_PENDING:
            return {
                ...state,
                pending: true,
            };
        case ActionTypes.ADD_TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: payload,
            };
        case ActionTypes.ADD_TODO_ERROR:
            return {
                ...state,
                pending: false,
                error: error,
            };

        default:
            return state;
    }
};

export const getTodosReducer = (
    state = todosInitialState,
    { type, payload, error }
) => {
    switch (type) {
        case ActionTypes.GET_TODOS_PENDING:
            return {
                ...state,
                pending: true,
            };
        case ActionTypes.GET_TODOS_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: payload,
            };
        case ActionTypes.GET_TODOS_ERROR:
            return {
                ...state,
                pending: false,
                error: error,
            };
        default:
            return state;
    }
};

export const updateTodoReducer = (
    state = todosInitialState,
    { type, payload, error }
) => {
    switch (type) {
        case ActionTypes.UPDATE_TODO_PENDING:
            return { ...state, pending: true };
        case ActionTypes.UPDATE_TODO_SUCCESS:
            return { ...state, pending: false, todos: payload };
        case ActionTypes.UPDATE_TODO_ERROR:
            return { ...state, pending: false, error: error };

        default:
            return state;
    }
};

export const removeTodoReducer = (
    state = todosInitialState,
    { type, payload, error }
) => {
    switch (type) {
        case ActionTypes.REMOVE_TODO_PENDING:
            return { ...state, pending: true };
        case ActionTypes.REMOVE_TODO_SUCCESS:
            return { ...state, pending: false, todos: payload };
        case ActionTypes.REMOVE_TODO_ERROR:
            return { ...state, pending: false, error: error };

        default:
            return state;
    }
};
