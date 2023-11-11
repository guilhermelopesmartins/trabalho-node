'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({schema: 'loja_carros', tableName:'Carros'}, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelo: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.INTEGER
      },
      cambio: {
        type: Sequelize.BOOLEAN
      },
      combustivel: {
        type: Sequelize.STRING
      },
      motorizacao: {
        type: Sequelize.STRING
      },
      velocidade_max: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema: 'loja_carros', tableName: 'Carros'}, { force: true });
  }
};