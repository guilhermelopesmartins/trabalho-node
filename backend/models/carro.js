'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carro.init({
    modelo: DataTypes.STRING,
    marca: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    cambio: DataTypes.BOOLEAN,
    combustivel: DataTypes.STRING,
    motorizacao: DataTypes.STRING,
    velocidade_max: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carro',
  });
  return Carro;
};