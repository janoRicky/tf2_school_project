
$(document).ready(function() {
	$(".sideBar").css({
		"left": "-=165"
	});

	$(".navIcons").hover(function() {
		$(".contracker").fadeIn('fast', function() {
			
		});
		$(".contracker").css({
			"background-image": "url(http://localhost/TF2/assets/gif/" + $(this).find('img').attr('alt') + ".gif)",
			"background-size": "95%"
		});
	}, function() {
		$(".contracker").fadeOut('fast', function() {
			
		});

	});
});

window.onscroll = function() {
	$(".bg2").css({
		'backgroundPositionY': (-(document.body.scrollTop)) * 1.5
	});
	$(".test").html(document.body.scrollTop);
};
