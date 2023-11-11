'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn({schema: 'loja_carros', tableName: 'Carros'}, 'id_usuario', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: {
              tableName: 'Usuario_Carros',
              schema: 'loja_carros'
            },
            key: 'id'
          },
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn({schema: 'loja_carros', tableName: 'Carros'}, 'id_usuario');
  }
};