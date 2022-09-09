const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://Nikita:Gtnhjcjdbx1@cluster0.kjm6fgr.mongodb.net/?retryWrites=true&w=majority');

const start = async () => {
    try {
        await client.connect();
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}

const app = express();

const PORT = process.env.PORT ?? 4200;

app.use(express.json({ extended: true }));

app.use(
    cors({
        origin: "*",
    })
);

app.use("/api", require("./routes/routes"));

start();

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
})