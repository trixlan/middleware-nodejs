const express = require('express');
const app = express();
const sequelize = require('./config/database');
const personaRoutes = require('./routes/persona.routes');
const cors = require('cors');

// Enable CORS for all routes and all origins
app.use(cors());

app.use(express.json());

// Rutas
app.use('/personas', personaRoutes);

// Sync con la base de datos y levantar servidor
sequelize.sync().then(() => {
  console.log('Base de datos conectada y tablas sincronizadas.');
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
}).catch(err => {
  console.error('Error al conectar con la base de datos:', err);
});
