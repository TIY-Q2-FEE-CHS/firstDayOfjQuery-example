$(document).ready(function() {

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

  }
  // when clicking on nav link
  // show related page in left column
  $("nav").on("click", "a", showPage);








});
