<!-- ![set up](./server/readMeImages/route-with-param-individ-user.png?raw=true) -->

# Route with Params

## Add a route that accepts a param

    // inside src/routes/users.ts

    import express from 'express';
    const router = express.Router()

    interface iUsers{
        name: string
        ocupation: string
    }

    const users: iUsers[] = [
        {name: 'Matt Murdock' , ocupation:'Lawyer'},
            {name: 'Jennifer Walters' , ocupation:'Attorney'},
            {name: 'Peter Parker' , ocupation:'Photographer'}
        ]

    router.get('/', (req, res)=>{
        res.send(users)
    })

    router.get('/:id',(req, res)=>{   <----- Add a route to accept a param
        res.send(users)
    })

    export default router

## Update app.ts with use Middleware for param

    // inside app.ts
    import express from 'express';
    import Users from './src/routes/users'

    const app = express();
    const port = 5000;

    app.use(express.static( 'public'))

    app.use('/users', Users); <----- Add middleware for the users route

    app.get('/', (req, res) => {
    res.send('Hello World!');
    });

    app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
    });

## Verify You Can Hit the Users Route with a Param

go to http://localhost:5000/users/2 and make sure it doesn't break:

you should see:

![set up](./server/readMeImages/route-with-param-verify-param.png?raw=true)

## Update the route to select by id

add ids to the user object:

    // inside src/routes/users.ts
    const users: iUsers[] = [
        {id: 1, name: 'Matt Murdock' , ocupation:'Lawyer'},
        {id: 2, name: 'Jennifer Walters' , ocupation:'Attorney'},
        {id: 3, name: 'Peter Parker' , ocupation:'Photographer'}
    ]

modify the /:id route to grab the param:

    // inside src/routes/users.ts

    router.get('/:id',(req, res)=>{
        const {id} = req.params
        const userId = parseInt(id, 10)

        const user = users.filter((user)=>user.id === userId)

        res.send(user)
    })

Now if you go back to http://localhost:5000/users/2 you should see the individal user:

![set up](./server/readMeImages/route-with-param-individ-user.png?raw=true)
