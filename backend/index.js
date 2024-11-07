const express = require('express');
const cors = require('cors'); // Importing cors
const app = express();
const port = 4000;
const mongodb = require("./db");

mongodb();

// Use CORS middleware with allowed origins
app.use(cors({
    origin: ['http://localhost:3000', 'https://food-delivery-web-app-zeta.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Optional: Include this if your frontend needs credentials/cookies
}));

app.use(express.json());

// Routes
app.use("/api", require("./Routes/createuser"));
app.use("/api", require("./Routes/displaydata"));
app.use("/api", require("./Routes/OrderData"));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
