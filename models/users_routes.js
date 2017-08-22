module.exports = function(sequelize, DataTypes) {
  var routes_users = sequelize.define("routes_users", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    route_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  },{timestamps: false});
  return routes_users;
};