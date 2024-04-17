const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User Authentication API',
      version: '1.0.0',
      description: 'A simple CRUD API for user registration and login',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token to access these api endpoints',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    swaggerDefinition: {
      openapi: '3.0.0', // Sử dụng OpenAPI 3.0
      info: {
        title: 'Swagger Bear Token API',
        version: '1.0.0',
        description: 'APIs for Bear Token authentication',
      },
      security: [{
        BearerAuth: [] // Định nghĩa security scheme
      }],
    },
    servers: [
      {
        url: 'https://crud-mongodb-gzyk.onrender.com/',
        description: 'Development server',
      },
    ],
  },
  apis: ['./router/user.js'], // Path to the API routes file
};

const specs = swaggerJsdoc(options);

module.exports = specs;
