const express = require("express");
const app = express();
const port = 5000;

const pet_router = require("./routers/pet_router.js");

app.use(express.json());

app.use("/pet", pet_router);

app.listen(port, () => console.log(`Server running in ${port} port`));
