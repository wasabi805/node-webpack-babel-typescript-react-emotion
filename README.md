<!-- ![set up](./server/readMeImages/route-with-param-individ-user.png?raw=true) -->

# Set up concurrently

In the root of the project install nodemon as well

        npm i nodemon

change the script for start in root package.json to :

    "start": "concurrently \"npm run devServer\" \"cd server && npm run nodemon\""

Notes:
[Axios types: see](https://stackoverflow.com/q/62217642/7857134)
