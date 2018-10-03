$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
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
	
		$(".bottom_button").mouseover(function(){
		$(this).addClass("hover-black");
	});
	
	$(".bottom_button").mouseleave(function(){
		$(this).removeClass("hover-black");
		$("body").addClass("background-grey");
	});


}); 
