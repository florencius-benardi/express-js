'use strict';
const {
  Model
} = require('sequelize');

const rolesCol = require('../tableColumns/system/rolesCol')

const { ATTR_TABLE,
  ATTR_CHAR_DESCRIPTION,
  ATTR_INT_ID,
  ATTR_DATETIME_CREATED_AT,
  ATTR_DATETIME_UPDATED_AT,
  ATTR_INT_CREATED_BY,
  ATTR_INT_UPDATED_BY,
  ATTR_DATETIME_DELETED_AT } = rolesCol

module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roles.init({
    [ATTR_CHAR_DESCRIPTION]: DataTypes.STRING,
    [ATTR_INT_ID]: DataTypes.INTEGER,
    [ATTR_DATETIME_CREATED_AT]: DataTypes.DATE,
    [ATTR_DATETIME_UPDATED_AT]: DataTypes.DATE,
    [ATTR_INT_CREATED_BY]: DataTypes.INTEGER,
    [ATTR_INT_UPDATED_BY]: DataTypes.INTEGER,
    [ATTR_DATETIME_DELETED_AT]: DataTypes.DATE
  }, {
    sequelize,
    modelName: ATTR_TABLE,
  });
  return roles;
};