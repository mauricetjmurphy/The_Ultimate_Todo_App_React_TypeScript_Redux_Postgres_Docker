import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./todoForm.module.css";
import { nanoid } from "nanoid";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/actions";

export const TodoForm: React.FC = (): any => {
    const [description, setDescription] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const onSubmitForm = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (description !== "") {
            const data = { id: nanoid(), description, is_complete: 0 };

            setLoading(true);
            dispatch(addTodo(data));
            setLoading(false);
            setDescription("");
        }
    };

    return (
        <form className={styles.form}>
            <input
                className={styles.todoInput}
                type="text"
                value={description}
                onChange={handleChange}
            />
            <button
                className={styles.todoSubmitButton}
                type="submit"
                onClick={onSubmitForm}
            >
                <BsFillPlusCircleFill className={styles.plusIcon} />
            </button>
        </form>
    );
};
