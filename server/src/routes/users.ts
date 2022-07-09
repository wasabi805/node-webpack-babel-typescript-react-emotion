import express from "express";
const router = express.Router();

interface iUsers {
  id: number;
  name: string;
  occupation: string;
}

const users: iUsers[] = [
  { id: 1, name: "Matt Murdock", occupation: "Lawyer" },
  { id: 2, name: "Jennifer Walters", occupation: "Attorney" },
  { id: 3, name: "Peter Parker", occupation: "Photographer" },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10);

  const user = users.filter((user) => user.id === userId);

  res.send(user);
});

export default router;
