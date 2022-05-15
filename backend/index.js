var express = require("express");
const groceryData = require("./data.json");
var app = express()

console.log(groceryData)
app.get('/', (req, res) => {
    return res.json(groceryData);
});

app.listen(3001)