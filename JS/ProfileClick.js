$(document).ready(function(){
	$.fn.scrollView = function () {
	    return this.each(function () {
	        $('html, body').animate({
	            scrollTop: $(this).offset().top
	        }, 750,"easeInOutQuad");
	    });
	}
	
	
	$(".profile").click(function(){
		console.log("click function being added");
		var $this = $(this);
		console.log($this.attr("data-showid"));
		$(".infoContainer").addClass("showInfoContainer");
		$(".two .show").addClass("hide").removeClass("show");
		$("h3.bio").removeClass("hide").addClass("show");
		$("#"+$this.attr("data-showid")).addClass("show").removeClass("hide");
		var $contHeight = ($("p.show").innerHeight()+$("h3.show").innerHeight());
		$(".infoContainer").css({"height": $contHeight});
		
		$(".profileZoom").removeClass("profileZoom");
		console.log("profileZoom classes removed");
		$this.addClass("profileZoom");
		console.log("profileZoom class added");
	
		$("#profiles").scrollView().attr("id","");
	});
});