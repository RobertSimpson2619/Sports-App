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
   
    Routes.belongsToMany(models.Users,{timestamps: false, foreignKey: 'UserId', foreignKey: 'RouteId', through: 'UserRoutes'});
  };

const UserRoutes = sequelize.define('UserRoutes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  UserId:{
    type: DataTypes.INTEGER,
    foreignKey: true
  },
    RouteId: {
    type: DataTypes.INTEGER,
    foreignKey: true 
    }
},{timestamps: false});
    
  return Routes;
  return UserRoutes;
};

