const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); 
const userRoutes = require("./routes/user"); 

const app = express();
const port = process.env. PORT || 9000;

//middleware
app.use(express.json()); 
app.use('/api', userRoutes);

//ruta
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
}); 

//Conección a MongoDb 
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Está conectado a la base de datos'))
.catch((error)=> console.error(error));
 

app.listen(port, () => console.log('El servidor está en el puerto',port));