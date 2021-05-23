'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserActivity = sequelize.define('UserActivity', {
    userId: DataTypes.INTEGER,
    coffeeId: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  UserActivity.associate = function(models) {
    UserActivity.belongsTo(models.User, { foreignKey: 'userId' });
    UserActivity.belongsTo(models.Coffee, { foreignKey: 'coffeeId' });
  };
  return UserActivity;
};
