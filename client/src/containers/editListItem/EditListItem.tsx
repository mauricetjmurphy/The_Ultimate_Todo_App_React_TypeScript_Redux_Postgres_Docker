import React, { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./editListItem.module.css";
import { CgCloseO } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/actions/actions";

interface EditListItemProps {
    todo: Todo;
    closeModal: CloseModal;
}

const EditListItem: React.FC<EditListItemProps> = ({ todo, closeModal }) => {
    const [description, setDescription] = useState<string>(todo.description);

    const dispatch = useDispatch();

    return (
        <div className={styles.EditListItemContainer}>
            <div className={styles.EditListItem}>
                <div className={styles.EditListItemCloseButtonContainer}>
                    <button
                        onClick={closeModal}
                        className={styles.EditListItemCloseButton}
                    >
                        <CgCloseO className={styles.closeIcon} />
                    </button>
                </div>

                <h1>Edit Todo</h1>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        dispatch(
                            updateTodo({
                                id: todo.id,
                                description: description,
                                is_complete: todo.is_complete,
                            })
                        );
                        // updateTodo(todo.id, description, todo.is_complete);
                        closeModal();
                    }}
                    className={styles.EditListItemUpdateButton}
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditListItem;
