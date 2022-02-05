type AddTodo = (newTodo: Todo) => void;

type RemoveTodo = (id: string) => void;

type UpdateTodo = (
    id: string,
    description: string,
    is_complete: number
) => void;

type AddUpdatedTodo = (todo: Todo) => void;

type ToggleComplete = (selectedTodo: Todo) => void;

type Todo = {
    id: string;
    description: string;
    is_complete: number;
};

type CloseModal = () => void;
