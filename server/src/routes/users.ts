import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

import { fetchApi } from "./helpers";
import { iUser } from "../utils/interfaces";

let users: iUser[] = [];

router.get("/", async (req, res) => {
  let url = "https://jsonplaceholder.typicode.com/users";
  if (users.length === 0) {
    const response = await fetchApi({ method: "GET", url });

    const newUsers = Object.values(response).map((user) => {
      user.id = uuidv4();
      return user;
    });

    users = newUsers;
    res.send(users);
  } else {
    res.send(users);
  }
});

router.post("/add-user", (req, res) => {
  const { firstName, lastName } = req.body;

  const newUser = {
    id: uuidv4(),
    name: `${firstName} ${lastName}`,
  };
  users.push(newUser);
  res.send(users);
});

router.patch("/edit-user", (req, res) => {
  const { id, name } = req.body;
  const updateByIndex = users.map((user: iUser) => user.id).indexOf(id);
  users[updateByIndex].name = name;

  res.send(users);
});

router.delete("/delete-user", (req, res) => {
  const { id } = req.body;

  users = users.filter((user: iUser) => user.id !== id);
  res.send(users);
});

export default router;
