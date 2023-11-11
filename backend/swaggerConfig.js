const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Loja de carros API',
      version: '1.0.0',
      description: 'API description',
    },
    basePath: '/',
  },
  apis: ['./controllers/carrosController.js'], // Path to your API routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;