module.exports = function(sequelize, DataTypes) {
  // Cocktail model type
  const Cocktail = sequelize.define("Cocktail", {
    boozeType: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    drinkName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
  return Cocktail;
};
