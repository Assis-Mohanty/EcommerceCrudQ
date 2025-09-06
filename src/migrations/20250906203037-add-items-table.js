'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('items',{
      id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:true
        },
        price:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        category:{
            type:DataTypes.STRING,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:true
        },
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE
    });
    
    },
  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('items');
  }
}
