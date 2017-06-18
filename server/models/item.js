'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
      classMethods: {
        associate: (models) => {
          Item.belongsTo(models.Location, {
            foreignKey: 'locationId',
            onDelete: 'CASCADE',
          });
        },
      },
    });
  return Item;
};