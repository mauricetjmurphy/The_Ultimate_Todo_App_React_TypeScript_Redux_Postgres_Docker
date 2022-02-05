# The Ultimate Todo App

This app has been developed with React, TypeScript, Redux, PostgreSQL and Docker.

To run the app in docker containers, you will need to change (host: postgres) in ./server/src/db/db and then run the following command from the project root directory:

        docker-compose up --build

Alternatively you can run the frontend and backend sever separately. This will require a postgres database to be set up. The SQL statements can be found in ./server/src/db/db.
