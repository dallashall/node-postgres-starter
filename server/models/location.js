'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: {
      type:  DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        Location.hasMany(models.Item, {
          foreignKey: 'locationId',
          as: 'items',
        });
      },
    },
  });
  return Location;
};
