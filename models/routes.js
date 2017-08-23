module.exports = function(sequelize, DataTypes) {
  var Routes = sequelize.define("Routes", {
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
    routeLocation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    routeImageSm: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    routeImageLg: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
},{timestamps: false});
    
Routes.associate = function(models) {
   
    Routes.belongsToMany(models.Users, {through: 'UserRoutes', timestamps: false, foreignKey: 'UserId', foreignKey: 'RouteId'});
  };

    
  return Routes;
};

