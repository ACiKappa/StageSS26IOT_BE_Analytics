
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Notification = sequelize.define(
  'Notification',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    is_read: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
    },
    sent_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'notifications',
    timestamps: false,
  }
);

module.exports = Notification;
