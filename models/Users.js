module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userPwd: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    userFirstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userLastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
},{timestamps: false});
    
Users.associate = function(models) {

    Users.hasMany(models.Chatrooms, {
      onDelete: "cascade"
    });
    
//    Users.hasMany(models.Users_routes, {
//      onDelete: "cascade"
//    });
    
};
  
  return Users;
};

