const express = require("express");
const app = express();
//const carroController = require("./controller/carroController");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig'); 
const carrosController = require('./controllers/carrosController')

//MIDDLEWARE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    next();
  })
app.use(express.json())

app.use('/carro', carrosController);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//PORT
app.listen(8989, () => {
    console.log("Server is running on port 8989")
})

//npx sequelize-cli model:generate --name Carro --attributes modelo:string,marca:string,ano:integer,cambio:boolean,combustivel:string,motorizacao:string,velocidade_max:integer