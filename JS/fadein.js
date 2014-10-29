(function($) {
	/**
	 * Copyright 2012, Digital Fusion
	 * Licensed under the MIT license.
	 * http://teamdf.com/jquery-plugins/license/
	 *
	 * @author Sam Sehnert
	 * @desc A small plugin that checks whether elements are within
	 *		 the user visible viewport of a web browser.
	 *		 only accounts for vertical position, not horizontal.
	 */
	
	$.fn.visible = function(partial) {
		var $t						= $(this),
			$w						= $(window),
			viewTop			 = $w.scrollTop(),
			botOffset		= $w.height() * .35, // offset to eliminate bottom 40% of viewport
			viewBottom		= viewTop + $w.height() - botOffset, // shrinks viewport to top 60% of actual viewport
			_top					= $t.offset().top,
			_bottom			 = _top + $t.height(),
			compareTop		= partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		console.log("visible function running");
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	};
})(jQuery);

var win = $(window);
var doClincherThing = function() {
	var allMods = $(".comes-in");	//	Gather all the "comes-in's"!
	allMods.each(function (i, el) {
		var el = $(el);
		if(el.visible(true) && el.is(":visible") && !(el.hasClass("come-in"))) {
			el.addClass((!el.hasClass("faster"))?"come-in":"come-in-faster"); 
			console.log("more classes being added");
		}
	});
};
win.scroll(doClincherThing);


var boxFade = function() {
	var box = $(".fades");
	box.each(function (i, el) {
		var el = $(el);
		if(el.prev().hasClass("come-in") && !(el.prev().hasClass("fade-in"))) {
			el.removeClass("faded-out");
			el.addClass("fade-in");
		}
	});
};

win.scroll(boxFade);

$(document).ready(function() {
	$(".fades").addClass("faded-out");
	$(".clincher").addClass("comes-in");
});

/*


console.log("variables being defined");
allMods.each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
		el.addClass("already-visible"); 
		console.log("classes being added");
	} 
});

win.scroll(function(event) {
	
	allMods.each(function(i, el) {
		var el = $(el);
		if (el.is(":visible")) {
		} 
	});
	
});
*/