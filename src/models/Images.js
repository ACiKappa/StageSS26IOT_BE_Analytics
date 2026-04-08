
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Image = sequelize.define(
  'Image',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    entity_type: {
      type: DataTypes.ENUM('room', 'room_type', 'amenity'),
      allowNull: false,
    },
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      field: 'order',  // ← forza Sequelize a quotare correttamente
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'images',
    timestamps: false,
    quoteIdentifiers: true, // ← forza i backtick su tutti gli identificatori
  }
);

module.exports = Image;