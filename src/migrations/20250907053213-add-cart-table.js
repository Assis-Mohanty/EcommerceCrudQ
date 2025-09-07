'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('carts',{
      id:{
              type:DataTypes.INTEGER,
              autoIncrement:true,
              primaryKey:true
          },
          user:{
              type:DataTypes.INTEGER,
              allowNull:false,
          },
          items:{
              type:DataTypes.INTEGER,
              allowNull:true
          },
          updatedAt:{
              type:DataTypes.DATE,
              allowNull:false,
          }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('carts')
  }
};
