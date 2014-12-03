$(document).ready(function(){
	var intro = function(){
		var typeElement = $("#type"),
			typeText = typeElement.html();
		console.log(typeText);
		typeElement.empty();
		typeElement.data("typingThing",{text:typeText,i:0});
		var typewriterTimeoutFunction = function() {
			var typeElement = $("#type"),
				data = typeElement.data("typingThing"),
				newLetter = data.text.substring(data.i,data.i+1),
				nextLetter = data.text.substring(data.i+1,data.i+2),
				output = typeElement.text()+newLetter,
				letterDifficulty = {
					a:1,
					b:1,
					c:1,
					d:1.25,
					e:1,
					f:1,
					g:1,
					h:1,
					i:1,
					j:1,
					k:1,
					l:1,
					m:1.3,
					n:1.3,
					o:1,
					p:1,
					q:3,
					r:1,
					s:1,
					t:1.25,
					u:1,
					v:1,
					w:1.25,
					x:2,
					y:2,
					z:2,
					" ":1.25,
					"_":2,
					other:2
				}
			;
			typeElement.text(output);
			data.i++;0
			typeElement.data("typingThing",data);
			//	If interval
			/*if(data.i >= data.text.length) {
				clearTypewriting(typeElement);
			}*/
			//	If timeout
			console.log(nextLetter);
			if(data.i < data.text.length) {
				typeElement.addClass("Animating");
				typeElement.removeClass("notAnimating");
				console.log("newDelay");
				var newDelay = 60;
				console.log(newDelay);
				newDelay = newDelay * (letterDifficulty[newLetter.toLowerCase()] || letterDifficulty.other);
				console.log(newDelay);
				newDelay = newDelay + newDelay * (letterDifficulty[nextLetter.toLowerCase()] || letterDifficulty.other) / 2;
				console.log(newDelay);
				window.setTimeout(typewriterTimeoutFunction,newDelay);
			} else {
				clearTypewriting(typeElement);
			}
		};
		//var typewriterIntervalPointer = window.setInterval(typewriterIntervalFunction,250);
		var typewriterTimeoutPointer = window.setTimeout(typewriterTimeoutFunction,1250);
		var clearTypewriting = function(element) {
			//console.log("Clearing interval...");
			//window.clearInterval(typewriterIntervalPointer);
			var el = element;
			element.removeClass("Animating");
			element.addClass("notAnimating");
			window.setTimeout(function(el){
				console.log("timeout working");
				$("#type").removeClass("notAnimating");
				//el.addClass("postload");

				$(".preloader").addClass("loaded");
				window.setTimeout(function(){
					$(".postload").addClass("visible");
					$("#type").addClass("static").addClass("white");
				},400);
			},1200);
		};
		var navScroll = function(){
			/*if($(window).scrollTop() > 0){
				$(".navMap").addClass("horizontal");
			} else {
				$(".navMap").removeClass("horizontal");
			}*/
			var numAnchors = $(".navMap > a").length
			for(i=0;i<numAnchors;i++){
				var currentAnchor = $(function(numAnchors, i){
					return ".navMap > a:nth-of-type(" + i +")"
				});
				//console.log(currentAnchor);
				//currentAnchor.css("color", "red");
				console.log(currentAnchor);
				console.log(currentAnchor.css("width"));
			}
			
			if($(window).scrollTop() > 0){
				$(".navMap").addClass("navTop").addClass("navLeft");
			} else {
				$(".navMap").removeClass("navTop").removeClass("navLeft");
			}
		};

		$(document).scroll(navScroll);

	}
	
	//$(".postload").css("display", "none").css("opacity", "0");
	intro();
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	var textLength = typeText.length;
	console.log(textLength);
	window.setTimeout("console.log('hello, world!')",10000);
	var typeIt = function(){
		for(i=0;i<textLength;i++) {
			//(function(i,textLength){
				console.log("fist function being fired! bump it");
				var timingFunction = (125*i + 2000);
				var timeoutString = "(function(i,textLength,typeText){" +
				"if(i==0){" +
				"	$('#type').addClass('Animating');" +
				"	$('#type').removeClass('notAnimating');" +	
				"	console.log('classes being swapped');" +
				"};" +
				"console.log('setTimeout function being fired!');" +
				"console.log(i);" +
				"var letter = typeText.substring(i,i+1);" +
				"console.log(letter);" +
				"$('#type').append(letter);" +
				"if(i==(textLength-1)){" +
				"	$('#type').addClass('notAnimating');" +
				"	$('#type').removeClass('Animating');" +
				"	console.log('notAnimating class added back');" +
				"};" +
			"})("+i+","+textLength+",'"+typeText+"')";
				console.log(timeoutString);
				window.setTimeout(timeoutString,timingFunction);
			//})(i,textLength);
		};
	};	
	typeIt();
	*/
});