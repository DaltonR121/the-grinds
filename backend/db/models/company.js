'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    yearFounded: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.Coffee, { foreignKey: 'companyId' });
  };
  return Company;
};
