var bouncingBall = anime({
  targets: 'path.st3, path.st4',
  translateY: '1.8vh',
  duration: 400,
  loop: true,
  direction: 'alternate',
  easing: 'easeInCubic'
});

anime({
  targets: 'path.st1 , path.st2',
  rotateX: 35,
  rotateY: 15,
  scaleZ: 1,
  scaleY: 1,
  duration: 800,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});





// Button Functionality//
$('.button-addon2').click(function(e){    
  $('#pg1').fadeOut('slow', function(){
      $('#pg2').fadeIn('slow');
  });
});

$('#button-addon3').click(function(e){    
  $('#pg2').fadeOut('slow', function(){
      $('#pg1').fadeIn('slow');
  });
});

// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

//BEN'S NOTE: With a little bit of creativity, we can tweak these preset calls to our advantage.
// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// BEN'S NOTE: We may have need to pull all cocktails from a table.
// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// BEN'S NOTE: This may be unnecessary.  We won't have a need for "new" cocktails (just yet).
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// BEN'S NOTE: This may be unnecessary.  I don't see us using a delete button.
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
