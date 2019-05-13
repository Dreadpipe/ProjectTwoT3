var db = require("../models");
var sequelize = require("sequelize")

module.exports = function(app) {
  // Get all examples
  app.get("/api/cocktails", function(req, res) {
    db.Cocktail.findAll({}).then(function(dbCocktails) {
      res.json(dbCocktails);
    });
  });

  // -------- THE KEY TO THE DATABASE IS SOMEWHERE IN HERE---------
  app.get("/api/cocktails/:cocktail", function(req, res) {
    console.log(req.params.cocktail);
    console.log("Here we go");
    if (req.params.cocktail) {
      db.Cocktail.findOne({
        order: 
        [
          sequelize.fn( 'RAND' ),
        ],
        where: {
          boozeType: req.params.cocktail
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      db.Cocktails.findAll().then(function(result){
        return res.json(result);
      });
    }
  });

  // Create a new example
  app.post("/api/cocktails", function(req, res) {
    console.log(req.body);
    db.Cocktail.create({
      boozeType: req.body.boozeType,
      drinkName: req.body.drinkName,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    }).then(function(dbCocktail) {
      res.json(dbCocktail);
    });
  });

  // ------- DELETE API ROUTE BELOW----------
  // Delete an example by id
  // app.delete("/api/cocktails/:id", function(req, res) {
  //   db.Cocktail.destroy({ where: { id: req.params.id } }).then(function(dbCocktail) {
  //     res.json(dbCocktail);
  //   });
  // });
};
