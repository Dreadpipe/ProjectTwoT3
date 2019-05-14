// Global variables
let choicebtn = ".btnclass";
let boozeType;


// catch-all other on-clicks
$(document).on("click", choicebtn, function (event) {
  event.preventDefault();
  let choice = $(this).attr("id");
  console.log(choice);

  // switch statements for buttons clicked
  switch (choice) {
    case "search-button":
      top10();
      fadeIn();
      break;
    case "vodkabtn":
      boozeType = "Vodka"
      searchIt();
      break;
    case "whiskeybtn":
      boozeType = "Whiskey"
      searchIt();
      break;
    case "rumbtn":
      boozeType = "Rum"
      searchIt();
      break;
    case "tequilabtn":
      boozeType = "Tequila"
      searchIt();
      break;
    case "randombtn":
      searchRandom();
      break;
    case "button-addon3":
      fadeOut();
      break;
  }
});

// fades to page 2
function fadeIn() {
  $("#pg1").fadeOut("slow", function () {
    $("#pg2").fadeIn("slow");
    console.log("I am working.")
  });
};

// fades to page 1 
function fadeOut() {
  $('#pg2').fadeOut('slow', function () {
    $('#pg1').fadeIn('slow');
    console.log("I have to go now.")
  });
};

// pulls from database
function top10() {
  console.log("Top 10 - I am functiontal.")
};

// pulls boozeType from DATABASE
function searchIt() {
  fadeIn();
  console.log(boozeType);
  $.get("/api/cocktails/" + boozeType, function (data) {
    $(".tblgo").empty();
    console.log(data);
    if (!data) {
      $("#boozeID").text("The well has run dry!  Try your search again.")
    } else {
      $("#boozeID").text(data.boozeType);
      $("#drinkName").text(data.drinkName);
      $("#ingr1").text(data.ingredients);
      $("#instructions").text(data.instructions);
    };
  });
  console.log("searchIt - I am functional." + boozeType)
};

// pulls Random results from API
// https://www.thecocktaildb.com/api/json/v1/1/random.php
function searchRandom() {
  fadeIn();
  const randomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  console.log("searchRandom - I am functional.")

  $.ajax({
      url: randomURL,
      method: "GET"
    })
    .then(function (response) {
      const booze = response.drinks[0].strIngredient1;
      const drink = response.drinks[0].strDrink;
      const ingr1 = response.drinks[0].strIngredient2;
      const ingr2 = response.drinks[0].strIngredient3;
      const ingr3 = response.drinks[0].strIngredient4;
      const ingr4 = response.drinks[0].strIngredient5;
      const instruct = response.drinks[0].strInstructions;
      console.log(
        booze + " " +
        drink + " " +
        ingr1 + " " +
        ingr2 + " " +
        ingr3 + " " +
        instruct
      );
      $(".tblgo").empty();
      $("#boozeID").text(booze);
      $("#drinkName").text("The Twist (your cocktail): " + drink);
      $("#ingr1").text(ingr1);
      $("#ingr2").text(ingr2);
      $("#ingr3").text(ingr3);
      $("#ingr4").text(ingr4)
      $("#instructions").text(instruct);
    });
};

// DO NOT UNCOMMENT WITHOUT FOLLOWING INSTRUCTIONS
// ---------- VARIABLES FOR FORM ------------
// let formBooze = $("#formBooze").val().trim();
// let formDrink = $("#formDrink").val().trim();
// let formIngr = $("#formIngr").val().trim();
// let formInstr = $("#formInstr").val().trim();

// -------- SUBMIT BUTTON TO POST ------------
// ATTACH TO SUBMIT BUTTON
// $.post("/api/cocktails", {
//   boozeType: formBooze,
//   drinkName: formDrink,
//   ingredients: formIngr,
//   instructions: formInstr
// }).then(function(data) {
//   console.log(data);
// });


// Button Functionality; swaps "pages" via fadeout//
// $('.button-addon2').click(function(e){    
//   $('#pg1').fadeOut('slow', function(){
//       $('#pg2').fadeIn('slow');
//   });
// });



// BEN NOTE: Below are preset "example" functions provided by Trilogy.
// I have commented them out, but saved for reference.
// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// //BEN'S NOTE: With a little bit of creativity, we can tweak these preset calls to our advantage.
// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/cocktails",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/cocktails",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // BEN'S NOTE: We may have need to pull all cocktails from a table.
// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // BEN'S NOTE: This may be unnecessary.  We won't have a need for "new" cocktails (just yet).
// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // BEN'S NOTE: This may be unnecessary.  I don't see us using a delete button.
// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);