const express = require('express');
const path = require('path')
const PORT = "3030"

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// IS THIS NEXT LINE CORRECT?
app.use(express.static(path.join(__dirname, '/public/dist/public')));



// tell your server which port to run on
app.listen(PORT, () => console.log("Rippin' it up on port "+PORT));
