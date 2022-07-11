import express from "express";
import axios, { AxiosPromise } from "axios";
const router = express.Router();

import { fetchApi } from "./helpers";

interface iUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: {};
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

let users: iUser[] | AxiosPromise[] | any = [];

router.get("/", async (req, res) => {
  let url = "https://jsonplaceholder.typicode.com/users";
  if (users.length === 0) {
    const response = await fetchApi({ method: "GET", url });
    users = response;
    res.send(users);
  } else {
    res.send(users);
  }
});

router.post("/add-user", (req, res) => {
  const { firstName, lastName } = req.body;
  const newUser = {
    id: users.length + 1,
    name: `${firstName} ${lastName}`,
  };
  users.push(newUser);
  res.send(users);
});

router.post("/delete-user", (req, res) => {
  const { id } = req.body;
  const userId: number = parseInt(id, 10);

  users = users.filter((user: iUser) => user.id !== userId);
  res.send(users);
});

export default router;
