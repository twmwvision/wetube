import express from "express";

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("Hello from profile");

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);

//test
//test2
