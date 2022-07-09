<!-- ![set up](./src/images/webpack-babel-typescript-react.png?raw=true) -->

# Seperating Routes from app.ts

In the scr directory, make a routes folder with a users.ts file inside it

    example.)
      -server
        -src
          -routes
            *users.ts

add some users inside server/src/routes/users.ts

    // inside server/src/routes/users.ts

    interface iUsers{
      name: string
      ocupation: string
    }

    const users: iUsers[] = [
        {name: 'Matt Murdock' , ocupation:'Lawyer'},
            {name: 'Jennifer Walters' , ocupation:'Attorney'},
            {name: 'Peter Parker' , ocupation:'Photographer'}
      ]

## Make a seperate Route

[see](https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express)

Add a router to this file:

    // inside server/src/routes/users.ts

    import express from 'express';    <----- import express
    const router = express.Router()   <----- iinstantiate a router

    interface iUsers{
      name: string
      ocupation: string
    }
    const users = [
        {name: 'Matt Murdock' , ocupation:'Lawyer'},
            {name: 'Jennifer Walters' , ocupation:'Attorney'},
            {name: 'Peter Parker' , ocupation:'Photographer'}
        ]

then create a route and export it:

    // inside server/src/routes/users.ts

    interface iUsers{
        name: string
        ocupation: string
    }

    const users: iUsers[] = [
        {name: 'Matt Murdock' , ocupation:'Lawyer'},
            {name: 'Jennifer Walters' , ocupation:'Attorney'},
            {name: 'Peter Parker' , ocupation:'Photographer'}
        ]

    router.get('/', (req, res)=>{       <----- make the route
        res.send(users)
    })

    export default router               <----- export the route

## Implement the route in app.js

import the the route like so:

    //inside server/app.js

    ...
    import Users from './src/routes/users'
    ...

Then, implement the use middleware:

    // inside app.js
    import express from 'express';
    import Users from './src/routes/users'

    const app = express();
    const port = 5000;

    app.use(express.static( 'public'))

    app.use('/users', Users);          <---- Add the users to app.js

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(port, () => {
      return console.log(`Express is listening at http://localhost:${port}`);
    });

Finally, in order to see this route, in the browser, go to :

    http://localhost:5000/users/

Somthing to point out is that that we are able to access /users in localhost:5000 because in the scr/routes/users.ts because the route was set to '/'

ie.)

    // inside src/routes/users.ts

    router.get('/', (req, res)=>{
        res.send(users)
    })

and in app.ts, **/user** was passed into app.use()

ie.)

    // inside app.ts
    app.use('/users', Users);

So what we are saying here is that the /users route will send back the users array of objects in src/routes/users.ts
