const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
require("dotenv").config();
const app = express();
const userRouter = require("./User/user.router");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.listen(PORT, async () => {
  try {
      // feedback: fw17_1126 - you can create this connection outside this function
    await connection;
    console.log("listing on http://localhost:8080");
  } catch (err) {
    console.log(err);
  }
});
