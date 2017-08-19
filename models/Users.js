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
  });
  return Users;
};

