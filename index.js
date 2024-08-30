const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');


const DBC = "mongodb+srv://meshchemistry:<Z9Woj4TNkAE17hky>@cluster0.govhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const PORT = 3020

const app = express();

app.use(express.json());

app.use(authRouter);

mongoose.connect(DBC).then(() => {
  console.log('conneced :)');
}).catch((e) => { console.log(e); });


app.listen(PORT, "0.0.0.0", () => {
  console.log('it is working in port ${PORT} welcome');
});


