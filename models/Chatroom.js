module.exports = function(sequelize, DataTypes) {
  var Chatrooms = sequelize.define("Chatrooms", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    group: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });

Chatrooms.associates = function(models){
    Chatrooms.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
}

  return Chatrooms;
};

