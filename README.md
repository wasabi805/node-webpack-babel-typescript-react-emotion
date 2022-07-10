<!-- ![set up](./server/readMeImages/route-with-param-individ-user.png?raw=true) -->

# Make an api call

## Installation

    npm i axios

## Implement Axios

    // inside src/routes/users.ts

    import express from "express";
    const router = express.Router();
    import axios from 'axios';    <----- import axios into the users.ts file

## Make a reusable fetch function

    // inside src/routes/users.ts
    const fetchApi= ({method, url})=>{
        return axios({
            method: method,
            url: url,
          });
    }

## Convert The Users route

    // inside src/routes/users.ts
    router.get("/", async(req, res) => {
        let url = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetchApi({method: "GET", url})
        res.send(response.data);
    });

- Make the callback passed into router.get() an async functions since we'll want to resolve the promise response then return that result to res.send

- pass back response.data to res.send
