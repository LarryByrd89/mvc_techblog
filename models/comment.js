const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;