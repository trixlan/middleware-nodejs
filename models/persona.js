const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Persona = sequelize.define('Persona', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'personas',
  timestamps: false,
});

module.exports = Persona;
