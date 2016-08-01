/* PopUp! 
	by jake Lopez

just popup those images and make em look okay...
thats the main goal right now.
	 */
var doc = $("body");
var underDiv = '<div id="base"></div>'
var div = '<div class="popup"></div>'


$("a#popIt").bind('click', function(event)
{
	event.preventDefault();
	popUp(this);
});

function popUp(elem)
{
	doc.append(underDiv);
	$("#base").append(div);
	var img = '<figure id="pop"><img src="' + elem.href + '" id="pop"></figure>';
	setTimeout(function(){ 
	$("div.popup").append('<button id="quit">X</button>');
	$("<img/>").attr("src", elem.href)
		.on("load",function(){
		if(this.height > 900 || this.width > 900)
		{
		// resize the image...???
      $("div.popup").animate({
        height: this.height * .75 + 200,
        opacity : 100,
        width: this.width * .75 + 200,
      }, 600);

      $("div.popup").append(img);
      $("img#pop").css("width", "85%");
      $("img#pop").css("height", "85%");
			$("img#pop").after('<figcaption class="caption">This image has been rescaled.</figcaption>');
      $("figure#pop").css("margin-left", 200);
      $("figure#pop").css("margin-top", 50);
		}
    else{
		$("div.popup").animate({
      height: this.height + 200,
      width: this.width + 200,
    }, 500);
      $("div.popup").append(img);
}
});
		$("button#quit").click(function()
		{$("#base").remove(); });
}, 500);
}

      $("div.popup").css("width", this.width * .75 + 200);
