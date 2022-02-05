import express from "express";
import routes from "./src/routes/routes";
import cors from "cors";
import { pool } from "./src/db/db";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routes(app);

// Serving static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
