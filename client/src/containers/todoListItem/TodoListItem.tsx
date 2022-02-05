import React, { useState } from "react";
import styles from "./todoListItem.module.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import EditListItem from "../editListItem/EditListItem";
import { removeTodo, updateTodo } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

interface TodoListItemProps {
    todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
    const [modal, setModal] = useState<boolean>(false);

    const dispatch = useDispatch();

    const closeModal: CloseModal = () => {
        setModal(false);
    };

    return (
        <>
            {modal && <EditListItem todo={todo} closeModal={closeModal} />}
            <li className={styles.listItemContainer}>
                <div className={styles.item}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        checked={Number(todo.is_complete) === 1 ? true : false}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                            dispatch(
                                updateTodo({
                                    id: todo.id,
                                    description: todo.description,
                                    is_complete:
                                        Number(todo.is_complete) === 0 ? 1 : 0,
                                })
                            );
                        }}
                    />
                    <p
                        style={
                            Number(todo.is_complete) === 1
                                ? {
                                      textDecoration: "line-through",
                                      color: "grey",
                                  }
                                : { textDecoration: "none" }
                        }
                    >
                        {todo.description}
                    </p>
                </div>
                <div className={styles.iconContainer}>
                    <button
                        onClick={(
                            e: React.MouseEvent<HTMLButtonElement>
                        ): void => setModal(true)}
                        className={styles.updateButton}
                    >
                        <BsFillPencilFill />
                    </button>
                    <button
                        data-testid="delete-button"
                        className={styles.delButton}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            dispatch(removeTodo(todo.id))
                        }
                    >
                        <BsFillTrashFill />
                    </button>
                </div>
            </li>
        </>
    );
};
