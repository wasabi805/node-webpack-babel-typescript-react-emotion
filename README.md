<!-- ![set up](./server/readMeImages/route-with-param-individ-user.png?raw=true) -->

# Proxy back end

## Installation

cd into server directory and run

        npm i cors
        npm i --save-dev @types/cors

## Implement CORS

        // in server/app.ts

        import cors from 'cors'
        ...
        app.use(cors())

## Update package.json

        //inside package.json from the front end

        "proxy": "http://localhost:5000"

# Add body-parser

We need this so the body param ins req will show up on the back end

in server

        npm i body-parser @types/body-parser

then in server/app.ts

import bodyParser from "body-parser";
