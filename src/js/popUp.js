// Needs JQUERY to work ( v 3.1.0 )
$(".preview").on("click", function()
{
	var src = $( this ).attr("src");
	popUp(src);
});

function popUp(src)
{
	var div = '<div class="cover"> </div>'
	var button = '<button class="btn" id="quit">X</button>'
	var div2 = '<div class="popup"> </div>'
	var img = '<img src="' + src + '" id="star">'
	$("body").prepend(div);

		$(".cover").animate({
			opacity: 100,
		}, 60000, "linear", function() {
			});
	$(".cover").append(div2);
	$(".popup").prepend(button);
	$("<img />").attr("src", src)
		.on("load", function()
		{
			$(".popup").animate(
				{ 
				 height : this.height + 40,
				}, 500, "linear", function() {} );
			$(".popup").css("width", this.width + 25);
		});
	$(".popup").append(img);
	$("#star").animate({
			opacity: 100},
		9000, "linear", function() {});
 
	// remove all the shit when they click that big ol red button
	$("#quit").on("click",
		function()
		{
			$(".cover").empty();
			$(".cover").remove();
		}
	);
}
