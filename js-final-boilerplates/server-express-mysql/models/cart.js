'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cart = sequelize.define(
    'cart',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {}
  );

  return Cart;
};