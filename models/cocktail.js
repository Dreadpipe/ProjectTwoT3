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
