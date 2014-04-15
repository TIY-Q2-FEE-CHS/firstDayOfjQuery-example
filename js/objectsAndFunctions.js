
function Template(data, el) {
			this.data = data;
			this.el = el;
			this.generateMarkup = function()	{
						var markup = "";
						var i;

						for(i=0; i < this.data.length; i++) {
							markup += "<" + el + ">" + this.data[i].author + "</" + el + ">" + "<" + el + ">" + data[i].tweet + "</" + el + ">";
						}

						return markup;
					};

}



var surfboard = [{
	author: "betty",
	tweet: "shortboard",
	finsh: "epoxy",
	fins: 3,
	color: "red"
	

}];

var tweets = [
	{
		author: "calvin webster",
		tweet: "this is my tweet"
	},
	{
		author: "amber",
		tweet: "this is amber's tweet"
	},
	{
		author: "Andrew",
		tweet: "this is Andrew's tweet"
	},
	{
		author: "Ryan",
		tweet: "this is Ryan's tweet"
	}

];
// @param {data} - array of objects
var tweetTemplate = new Template(tweets, "p");
var surfingTemplate = new Template(surfboard, "h1");
console.log(tweetTemplate);
console.log(surfingTemplate)


$("body").append( tweetTemplate.generateMarkup() );
$("body").append(surfingTemplate.generateMarkup());





