'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    flavorName: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.STRING
  }, {});
  Coffee.associate = function(models) {
    Coffee.belongsTo(models.Company, { foreignKey: 'companyId' });
    Coffee.hasMany(models.UserActivity, { foreignKey: 'coffeeId' });
    Coffee.hasMany(models.Review, { foreignKey: 'coffeeId' });
  };
  return Coffee;
};
