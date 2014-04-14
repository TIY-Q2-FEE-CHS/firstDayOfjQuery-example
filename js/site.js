$(document).ready(function() {

  var catsArray = ["Jack", "Smoke", "Dirty", "Stinky", "Hungry", "Simon", "Oscar"];
  var googoo = ["Baby", "Dinosaur"];

// @param {catsData} array of cats
  var listItemTemplate = function(data) {
        var markup = "";
        var i;

        for(i = 0; i < data.length; i++) {
          markup += "<li>" + data[i] + "</li>";
          
        }

        // console.log(markup);

        return markup;

  };


  $(".cats").append(listItemTemplate(catsArray));
  
// callback for click events on page to load hidden divs
  var showPage = function() {
      event.preventDefault();

      var $contentDiv = $("." + $(this).attr("rel"));

      console.log($contentDiv);
      
      if($contentDiv.hasClass("show")) {
        return;
      } else {
      $contentDiv.siblings().removeClass("show");
      $contentDiv.addClass("show");
      }

  };

  
  // when clicking on nav link
  // show related page in left column
  $("nav").on("click", "a", showPage);



 
});
