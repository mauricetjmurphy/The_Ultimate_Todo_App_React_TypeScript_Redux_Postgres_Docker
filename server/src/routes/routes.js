import { pool } from "../db/db";

const routes = (app) => {
    // Create a todo
    app.post("/newTodo", async (req, res) => {
        try {
            const { id } = req.body;
            const { description } = req.body;
            const { is_complete } = req.body;
            const newTodo = await pool.query(
                "INSERT INTO todo (id, description, is_complete) VALUES ($1, $2, $3) RETURNING *",
                [id, description, is_complete]
            );

            res.json(newTodo);
        } catch (error) {
            console.error(error.message);
        }
    });
    // Get all todos
    app.get("/todos", async (req, res) => {
        try {
            const allTodos = await pool.query("SELECT * FROM todo");
            res.json(allTodos.rows);
        } catch (error) {
            console.error(error.message);
        }
    });
    // Get a todo
    app.get("/todo/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const todo = await pool.query(
                "SELECT * FROM todo WHERE todo_id = $1",
                [id]
            );
            res.json(todo.rows[0]);
        } catch (error) {
            console.error(error.message);
        }
    });
    // Update todo
    app.put("/todo/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const { description } = req.body;
            const { is_complete } = req.body;
            const updatedTodo = await pool.query(
                "UPDATE todo SET ( description, is_complete) = ($2, $3) WHERE id = $1",
                [id, description, is_complete]
            );
            console.log("Todo was updated!");
            res.json("Todo was updated!");
        } catch (error) {
            console.error(error.message);
        }
    });
    // Delete todo
    app.delete("/todo/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const deletedTodo = await pool.query(
                "DELETE FROM todo WHERE id = $1",
                [id]
            );

            res.json(`Todo ${id} was deleted`);
        } catch (error) {
            console.error(error.message);
        }
    });
};

export default routes;
