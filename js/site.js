$(document).ready(function() {

	var $welcome = $(".welcome");
	var $about = $(".about");
	var $resume = $(".resume");

  // when clicking on nav link
  // show related page in left column
  $(".welcomeLink").click(function(event) {
  		event.preventDefault();
  		if($(this).attr("rel").hasClass("show")) {
  			return;
  		} else {
  		$(this).attr("rel").siblings().removeClass("show");
  			$welcome.addClass("show");
  		}

  });
  $(".aboutLink").click(function(event) {
  		event.preventDefault();
  		if($about.hasClass("show")) {
  			return;
  		} else {
  		  $about.siblings().removeClass("show");
  			$about.addClass("show");
  		}

  });
  $(".resumeLink").click(function() {
  		event.preventDefault();

  		if($resume.hasClass("show")) {
  			return;
  		} else {
  			$resume.siblings().removeClass("show");
  			$resume.addClass("show");
  		}
  });

  $( ".animate" ).click(function() {
  $( ".col-2" ).animate({
    opacity: "0.0",
    width: "0%"
    
  }, 100, function() {
    // Animation complete.
    alert("you are awesome!");
    // alert("yaaay, you animated me");
  });
});

  







});