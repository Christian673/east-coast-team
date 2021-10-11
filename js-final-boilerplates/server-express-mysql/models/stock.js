/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stock', {
    itemType: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    small: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    medium: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    large: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'stock'
  });
};
