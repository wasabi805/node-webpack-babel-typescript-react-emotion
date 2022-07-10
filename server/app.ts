import express from "express";
import Users from "./src/routes/users";
import Posts from "./src/routes/posts";

const app = express();
const port = 5000;

/* Assets */
app.use(express.static("public"));

/* Routes */
app.use("/users", Users);
app.use("/posts", Posts);

app.get("/", (req, res) => {
  res.send("Welcome to the Root Page");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
