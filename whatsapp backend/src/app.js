import express from "express";




//create express app
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from Server");
});

export default app;
