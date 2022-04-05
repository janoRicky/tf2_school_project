
$(document).ready(function() {
	$("#imgEmblem").click(function(event) {
		$(this).animate({width: 0, height: 150}, 
			350, function() {
				var srcEmblem = $(this).attr('src').split('/');
				var imgEmblem = srcEmblem.pop();

				var src = "";
				$.each(srcEmblem, function(index, val) {
					src += val + "/";
				});

				if (imgEmblem.substring(3,4) == 'R') {
					imgEmblem = imgEmblem.replace('R', 'B');
				} else {
					imgEmblem = imgEmblem.replace('B', 'R');
				}

				$(this).attr('src', src + imgEmblem);
				$(this).animate({width: 150, height: 150}, 500);
			}
		);
	});

	var blinker1 = false;
	setInterval(function() {
		if (blinker1) {
			$("#btnReset").css({"background-color": "rgba(255, 0, 0, 0.25)"});
		} else {
			$("#btnReset").css({"background-color": "rgba(255, 0, 0, 0)"});
		}
		blinker1 = !blinker1;
	}, 1000);

	var deg = 0;
	var blinker2 = false;
	setInterval(function() {
		if (blinker2) {
			deg += 1;
			if (deg == 4) {
				blinker2 = false;
			}
		} else if (!blinker2) {
			deg -= 1;
			if (deg == -4) {
				blinker2 = true;
			}
		}

		$(".emblem").css({transform: "rotate(" + deg + "deg)"});
	}, 60);

	$("#btnReset").click(function(event) {
		$(".charModel").css({
			backgroundPositionX: '0'
		});
	});
	$("#btnLeft").click(function(event) {
		$(".charModel").css({
			backgroundPositionX: '+=230'
		});
	});
	$("#btnRight").click(function(event) {
		$(".charModel").css({
			backgroundPositionX: '-=230'
		});
	});

	var x;
	var page;

	// for weapon container
	x = 1;
	var strWeapon = "";
	$.each(weapons, function(index, val) {
		if (val.replace(/\./g, "") != "") {
			if (x == 1) {
				strWeapon = "<div class='icpContainer icpW icpWeapon" + x + " icpWActive'>";
			}
			strWeapon += "<div class='itemBox'><img class='iWeapon ibImg' src='" + weaponsSuffix + val + ".png' alt='" + val.replace(/_/g, " ") + "'></div>";
			if (x % 35 == 0) {
				strWeapon += "</div><div class='icpContainer icpW icpWeapon" + ((x / 35) + 1) + "'>";
			}
			x++;
		}
	});
	strWeapon += "</div><div class='pageContainer'>";
	for (y = 1; y <= parseInt((x+1) / 35); y++) {
		page = "";
		if (y == 1) {
			page = "<div class='btnPage pgWeapon btnpWActive'>";
		} else {
			page = "<div class='btnPage pgWeapon'>";
		}
		strWeapon += page + y + "</div>";

		if (y == parseInt((x+1) / 35) && ((x+1) % 35) > 0) {
			strWeapon += "<div class='btnPage pgWeapon'>" + (y+1) + "</div>";
		}
	}
	$(".contWeapons").children("div").html(strWeapon);

	// for cosmetic container
	x = 1;
	var strCosmetic = "";
	$.each(cosmetics, function(index, val) {
		if (val.replace(/\./g, "") != "") {
			if (x == 1) {
				strCosmetic = "<div class='icpContainer icpC icpCosmetic" + x + " icpCActive'>";
			}
			strCosmetic += "<div class='itemBox'><img class='ibImg' src='" + cosmeticsSuffix + val + ".png' alt='" + val.replace(/_/g, " ") + "'></div>";
			if (x % 50 == 0) {
				strCosmetic += "</div><div class='icpContainer icpC icpCosmetic" + ((x / 50) + 1) + "'>";
			}
			x++;
		}
	});
	strCosmetic += "</div><div class='pageContainer'>";
	for (y = 1; y <= parseInt((x+1) / 50); y++) {
		page = "";
		if (y == 1) {
			page = "<div class='btnPage pgCosmetic btnpCActive'>";
		} else {
			page = "<div class='btnPage pgCosmetic'>";
		}
		strCosmetic += page + y + "</div>";

		if (y == parseInt((x+1) / 50) && ((x+1) % 50) > 0) {
			strCosmetic += "<div class='btnPage pgCosmetic'>" + (y+1) + "</div>";
		}
	}
	$(".contCosmetics").children("div").html(strCosmetic);

	// for item names
	$(".ibImg").hover(function() {
		$("#itemName").html($(this).attr("alt"));
		$(".desc").css({
			display: 'inline',
			left: ($(this).offset().left + ($(this).width() / 2)) - ($(".desc").width() / 2),
			top: $(this).offset().top + $(this).height() + 10
		});
	}, function() {
		$(".desc").css({
			display: 'none'
		});
		$("#itemName").html("");
	});

	// for item pages
	$(".btnPage").click(function(e) {
		if ($(this).hasClass("pgWeapon")) {
			$(".icpWActive").removeClass("icpWActive");
			$(".icpWeapon" + $(this).html()).addClass("icpWActive");
		} else 
		if ($(this).hasClass("pgCosmetic")) {
			$(".icpCActive").removeClass("icpCActive");
			$(".icpCosmetic" + $(this).html()).addClass("icpCActive");
		}

		if ($(this).hasClass("pgWeapon")) {
			$(".btnpWActive").removeClass("btnpWActive");
			$(this).addClass("btnpWActive");
		} else 
		if ($(this).hasClass("pgCosmetic")) {
			$(".btnpCActive").removeClass("btnpCActive");
			$(this).addClass("btnpCActive");
		}
	});

	// for cosmetic/weapon tabs
	$(".itemTab").click(function(e) { // for design/css
		$(".itemTab").each(function(index, el) {
			if ($(this).hasClass("iActive")) {
				$(this).removeClass("iActive");
			}
		});
		$(this).addClass("iActive");
	});

	// for item containers
	function showIC(c) {
		$(".itemContainer").each(function(index, el) {
			if ($(this).hasClass("icActive")) {
				$(this).removeClass("icActive");
			}
		});
		c.addClass("icActive");
	}
	$(".btnWeap").click(function(event) { // for functionality
		showIC($(".contWeapons"));
	});
	$(".btnCosm").click(function(event) {
		showIC($(".contCosmetics"));
	});
});
