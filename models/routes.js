module.exports = function(sequelize, DataTypes) {
  var routes = sequelize.define("routes", {
    routeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    routeDistance: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userLocation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    routeImage: {
      type: DataTypes.BLOB,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  },{timestamps: false});
  return routes;
};

