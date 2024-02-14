import express from "express";
import dotenv from "dotenv/config";
import routes from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("Welcome");
});

// Routes Files
app.use(routes);
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
