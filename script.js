$(document).ready(function() {
 

 	$(".bottom_button").mouseenter(function() {
 		$(this).fadeTo("slow", .5);
	});
	
	$(".bottom_button").mouseleave(function() {
 		$(this).fadeTo("slow", 1);
	});
	
	$("p").click(function(){
		$("p").addClass("red-text");
	});
	
		$("h2").mouseover(function(){
		$("h2").addClass("hover-blue");
	});
	
	$("h2").mouseleave(function(){
		$("h2").removeClass("hover-blue");
	});
	
	$("h2").mouseover(function(){
		$(this).addClass("hover-big");
	});
	
	$(".bottom_button").mouseleave(function(){
		$(this).removeClass("hover-black");
		$("body").addClass("background-grey");
	});
	
	$("button:first").click(function(){
		$(this).hide(5000);
	});
	
		$("button").click(function(){
		$(this).siblings("p").slideoggle("slow");
	});


}); 
