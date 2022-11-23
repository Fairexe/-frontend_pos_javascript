import express from "express";
const app = express();
app.use(express.static("files"))
app.listen(10001, () => console.log("server start"))