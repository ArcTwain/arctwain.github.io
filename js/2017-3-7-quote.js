$(function(){
	
	$("#author").html("William Thomson<br>1st Baron Kelvin");
	
	$(".quote").typed({
			strings: ["Do not imagine that mathematics is hard and crabbed and repulsive to common sense. It is merely the etherealization of common sense."],
			typeSpeed: 0,
			onStringTyped: function() {
				showQuoteAttr();
			}
	});
	
	function showQuoteAttr() {
		$(".quote-attr").css({
			opacity: 1
		});
	}
	
});
