require('dotenv').config({ path: './.env' });

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const parkingRoutes = require('./routes/parkingRoutes');

console.log("MONGO_URI:", process.env.MONGO_URI); // Esto tiene que imprimir algo

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

app.use('/api/users', userRoutes);
app.use('/api/parkings', parkingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));