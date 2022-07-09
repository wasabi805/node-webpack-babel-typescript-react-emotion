<!-- ![set up](./src/images/webpack-babel-typescript-react.png?raw=true) -->

# Serving Static Assets

For more on serving static assets, see the [docs](https://expressjs.com/en/starter/static-files.html)

## Update Directory structure

Build your directory structure so it looks like below; Add an image into server/public/images

    -server
      -public
        -images
          *node-express-logo.png
      -src
      -app.js

- Add the use middleware and pass into use express.static()
- Then pass 'public' into express.static

See below:

    // inside app.js

    const express = require('express')

    const app = express()
    const port = 5000

    // use the express middleware for static
    app.use(express.static( 'public'))

    app.get('/', (req, res)=>{
        res.send('Hello Tim')
    })

    app.listen(port, ()=>{
        console.log(`Listening on port ${port}`)
    })

cd into server directory and run :

    npm run server

Finally go to http://localhost:5000/images/node-express-logo.png

Remember, **you don't need to include "public"** in the url You should see this:

![set up](./readMeImages/serve-static-resources-success.png?raw=true)
