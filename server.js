const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const userRoutes = require('./router/user.js');
const cors = require('cors')

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://phanhoangphuc0311:%40Phuc1755@cluster0.kkn7cwq.mongodb.net/Crud?authSource=Cluster0&authMechanism=SCRAM-SHA-1')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(bodyParser.json());

app.use(cors());

// Routes
app.use('/users', userRoutes);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
