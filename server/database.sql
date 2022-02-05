CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    id VARCHAR(255),
    description VARCHAR(255),
    is_complete NUMERIC
);