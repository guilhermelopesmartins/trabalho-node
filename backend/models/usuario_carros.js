'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_Carros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario_Carros.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    dt_nascimento: DataTypes.DATE,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario_Carros',
  });
  return Usuario_Carros;
};