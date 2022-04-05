
$(document).ready(function() {
	var urlBG = "../../";
	var currentDir = window.location.href.split("/").pop();
	if (currentDir == "index.html" || currentDir == "about.html") {
		urlBG = "";
	}

	$(".sideBar").css({
		"left": "-=165"
	});

	$(".navIcons").hover(function() {
		$(".contracker").stop(true, false);
		$(".contracker").fadeIn('fast', function() {
			
		});
		$(".contracker").css({
			"background-image": "url(" + urlBG + "assets/gif/" + $(this).find('img').attr('alt') + ".gif)",
			"background-size": "95%",
			"background-position": "center",
		});
	}, function() {
		$(".contracker").fadeOut('fast', function() {
			
		});

	});

	$(window).scroll(function(event) {
		$(".bg2").css({
			'backgroundPositionY': (-($(window).scrollTop())) * 1.5
		});
	});
});
