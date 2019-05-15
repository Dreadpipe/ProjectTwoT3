module.exports = function(sequelize, DataTypes) {
  // Cocktail model type
  // may need to validation here (len: [1])
  const Cocktail = sequelize.define("Cocktail", {
    boozeType: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    drinkName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
  });
  return Cocktail;
};
