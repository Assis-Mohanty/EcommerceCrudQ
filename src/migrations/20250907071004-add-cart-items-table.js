'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('cartitems',
      {
          id:{
              type:DataTypes.INTEGER,
              autoIncrement:true,
              primaryKey:true
          },
          cart:{
              type:DataTypes.INTEGER,
              allowNull:false,
              references:{
                  model:'carts',
                  key:'id'
              },
              onDelete:'CASCADE'
          },
          items:{
              type:DataTypes.INTEGER,
              allowNull:false,
              references:{
                  model:'items',
                  key:'id',
              },
              onDelete:'CASCADE'
          },
          qty:{
              type:DataTypes.INTEGER,
              allowNull:false,
              defaultValue:1
          }
          
      }
    )
  },
  async down (queryInterface, Sequelize) { 
    queryInterface.dropTable('cartitems')
  }
};
