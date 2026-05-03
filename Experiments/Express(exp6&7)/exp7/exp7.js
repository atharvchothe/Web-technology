
const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Experiment 7 Dynamic Routing");
});

// Dynamic Route
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send("User ID is: " + userId);
});

app.get("/product/:name", (req, res) => {
    const productName = req.params.name;
    res.send("Product Name: " + productName);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
