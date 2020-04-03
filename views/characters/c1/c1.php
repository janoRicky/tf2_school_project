<?php

include($_SERVER["DOCUMENT_ROOT"] . "/TF2/" . "functions/functions_main.php");

echo $mainClass->header("SCOUT - TF2T", 
	"<link rel='stylesheet' type='text/css' href='$mainClass->base_url/views/characters/char.css'>
	 <script src='$mainClass->base_url/script/char.js'></script>");

?>

<body>
	<!-- <?php include($_SERVER["DOCUMENT_ROOT"] . "/TF2/views/template/side_classes.php"); ?> -->
	<div class="bg1">
		<div class="bg2">
			<div class="main">
				<div class="container-fluid">
					<div class="row">
						<div class="col-sm-2"></div>
						<div class="col-sm-8 content">
							<div class="row" style="font-size: 0.2em;">
								<div class="col-sm-1"></div>
								<div class="col-sm-10">
									<br><br><br><br>
									<a href="<?=$mainClass->base_url?>/index.php"><img src="<?=$mainClass->base_url?>/assets/img/TF2Logo.png" style="width: 100%;"></a>
								</div>
								<div class="col-sm-1"></div>
							</div>
							<br><br>
							<!-- <div class="row">
								<div class="col-sm-1"></div>
								<div class="col-sm-5">
									<div class="cigDiv">
										<div class="cigCaseCover" style="background-image: url('<?=$mainClass->base_url?>/assets/img/cigcasecover.png');">
											<br>
											<h2>SCOUT</h2>
											<img src="<?=$mainClass->base_url?>/assets/img/icons/c1e.png"><br><br>
											<h5>Type</h5>Offensive
											<h5>Health</h5>125
											<h5>Speed</h5>133%
										</div>
									</div>
								</div>
								<div class="col-sm-5">
									<div class="cigDiv">
										<div class="back"></div>
										<div class="charModel" style="background-image: url('<?=$mainClass->base_url?>/assets/img/models/c1mR.jpg');"></div>
										<div class="cigCase" style="background-image: url('<?=$mainClass->base_url?>/assets/img/cigcasescreen.png');">
											<a href="<?=$mainClass->base_url?>/index.php">
												<button id="btnHome"></button>
											</a>
											<button onclick="modelLeft()" id="btnLeft"></button>
											<button onclick="modelRight()" id="btnRight"></button>
										</div>
									</div>
								</div>
								<div class="col-sm-1"></div>
							</div>

							<div class="row">
								<div class="col-sm-12">
									<video width="720" controls poster="<?=$mainClass->base_url?>/assets/img/vidthumbnails/c1tn.png" style="border: solid black 5px;">
										<source src="<?=$mainClass->base_url?>/assets/videos/MeetTheScout.mp4" type="video/mp4">
									</video>
								</div>
							</div>
							<br>
							<div class="row">
								<div class="col-sm-12">
									<div class="textCon">
										<br>
										<p>
											Born and raised in Boston, Massachusetts, the Scout is a fast-running scrapper with a baseball bat and a snarky "in-your-face" attitude. He is the fastest and most mobile mercenary on the battlefield unassisted. His Double Jump leaves slower opponents such as the Heavy struggling to keep up and helps him navigate the terrain while dodging oncoming bullets and projectiles. Carrying a Scattergun, a Pistol, and a Bat, the Scout is an ideal class for aggressive fighting and flanking.
											<br><br>
											The Scout is a great class for quick "hit-and-run" tactics that can either sap away enemies' health or kill them outright due to his ability to get in, do damage, and dash away before even being noticed. However, the Scout is tied with the Engineer, Sniper, and Spy for having the lowest health of any class, leaving him vulnerable when he is on the front line; a fair trade-off for his ability to run in and out of a contested hot-spot very quickly, letting him lead the team to victory without the other team even noticing in time.
											<br><br>
											The Scout is an excellent choice for completing objectives quickly. He can capture control points and push carts at twice the rate of any other class. Only the Scout has this ability naturally; the Demoman and Soldier only have the same ability while holding or using the Pain Train. His speed also makes him perfect for capturing intelligence briefcases.
											<br><br>
											The Scout is voiced by Nathan Vetterlein.
										</p>
									</div>
								</div>
							</div>
							<br> -->
							<div class="row">
								<div class="col-sm-12">
									<div class="folder">
										<div>
											<div class="container">
												<div class="row">
													<div class="col-9">
														
														<table>
															<tbody>
																<tr class="fRow">
																	<td></td>
																	<td><h1 style="color: #000000">BIO</h1></td>
																</tr>
																<tr class="fRow">
																	<td class="fHeader">NAME</td>
																	<td class="fontDefault">JEREMY</td>
																</tr>
																<tr class="fRow">
																	<td class="fHeader">LOCATION OF ORIGIN</td>
																	<td class="fontDefault">BOSTON, MASSACHUSETTS, USA</td>
																</tr>
																<tr class="fRow">
																	<td class="fHeader">JOB</td>
																	<td class="fontDefault">RAPID RECOVERY</td>
																</tr>
																<tr class="fRow">
																	<td class="fHeader">MOTTO</td>
																	<td class="fontDefault">"TOO. MUCH. CAFFEINE."</td>
																</tr>
																<tr class="fRow">
																	<td class="fHeader">SPECIAL ABILITY</td>
																	<td class="fontDefault">DOUBLE JUMP</td>
																</tr>
																<tr class="fRow">
																	<td class="fHeader">DESCRIPTION</td>
																	<td class="fontDefault">The youngest of eight boys from the south side of Boston, the Scout learned early how to solve problems with his fists. With seven older brothers on his side, fights tended to end before the runt of the litter could maneuver into punching distance, so the Scout trained himself to run. He ran everywhere, all the time, until he could beat his pack of mad dog siblings to the fray.</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div class="col-3">
														<br>
														<img src="<?=$mainClass->base_url?>/assets/img/portrait/c1p.jpg" style="width: 100%;">
														<br>
														<table style="width: 100%;">
															<tbody>
																<tr>
																	<td class="fHeader">AGE</td>
																</tr>
																<tr class="fRow">
																	<td class="fontDefault">27</td>
																</tr>
																<tr>
																	<td class="fHeader">HEIGHT</td>
																</tr>
																<tr class="fRow">
																	<td class="fontDefault">177cm (5'9")</td>
																</tr>
																<tr>
																	<td class="fHeader">WEIGHT</td>
																</tr>
																<tr class="fRow">
																	<td class="fontDefault">156kg (124lb)</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br>
							<!-- <div class="row">
								<div class="col-sm-12">
									<div>
										<div class="itemTabContainer">
											<div class="itemTab btnWeap iActive">
												<span>WEAPONS</span>
											</div>
											<div class="itemTab btnCosm">
												<span>COSMETICS</span>
											</div>
										</div>
										<div style="height: 47px;"></div>
										<div class="itemContainer contWeapons icActive">
											<div class="ic100">
												contWeapons
											</div>
										</div>
										<div class="itemContainer contCosmetics">
											<div class="ic100">
												contCosmetics
											</div>
										</div>
									</div>
								</div>
							</div> -->
							<div class="row">
								<div class="col-sm-12">
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
								</div>
							</div>
						</div>
						<div class="col-sm-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="desc">
		description
	</div>
	<!-- <div class="contracker">
		<img src="<?=$mainClass->base_url?>/assets/img/contracker.png">
	</div> -->
</body>
<script>
	<?php

	$strWeapon = "";
	// foreach (new DirectoryIterator("./c1_assets/weapons_c1/") as $file) {
	// 	$strWeapon .= $file->getFileName() ." ";
	// }
	echo "var strArrWeapon = '". $strWeapon ."';";

	$strCosmetic = "";
	// foreach (new DirectoryIterator("./c1_assets/cosmetics_c1/") as $file) {
	// 	$strCosmetic .= $file->getFileName() ." ";
	// }
	echo "var strArrCosmetic = '". $strCosmetic ."';";

	?>

	var arrWeapon = strArrWeapon.split(" ");
	var arrCosmetic = strArrCosmetic.split(" ");

	$(document).ready(function() {
		
		// for weapon container
		var x = 1;
		var strWeapon = "";
		$.each(arrWeapon, function(index, val) {
			if (val.replace(/\./g, "") != "") {
				if (x == 1) {
					strWeapon = "<div class='icpContainer icpW icpWeapon" + x + " icpActive'>";
				}
				strWeapon += "<div class='itemBox'><img class='iWeapon ibImg' src='./c1_assets/weapons_c1/" + val + "' alt='" + ((val.replace(/100px-Item_icon_/g, "")).replace(/.png/g, "")).replace(/_/g, " ") + "'></div>";
				if (x % 35 == 0) {
					strWeapon += "</div><div class='icpContainer icpW icpWeapon" + ((x / 35) + 1) + "'>";
				}
				x++;
			}
		});
		strWeapon += "</div><div class='pageContainer'>";
		for (y = 1; y <= parseInt((x+1) / 35); y++) {
			var page = "";
			if (y == 1) {
				page = "<div class='btnPage pgWeapon btnpActive'>";
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
		var x = 1;
		var strCosmetic = "";
		$.each(arrCosmetic, function(index, val) {
			if (val.replace(/\./g, "") != "") {
				if (x == 1) {
					strCosmetic = "<div class='icpContainer icpC icpCosmetic" + x + " icpActive'>";
				}
				strCosmetic += "<div class='itemBox'><img class='ibImg' src='./c1_assets/cosmetics_c1/" + val + "' alt='" + ((val.replace(/75px-Item_icon_/g, "")).replace(/.png/g, "")).replace(/_/g, " ") + "'></div>";
				if (x % 50 == 0) {
					strCosmetic += "</div><div class='icpContainer icpC icpCosmetic" + ((x / 50) + 1) + "'>";
				}
				x++;
			}
		});
		strCosmetic += "</div><div class='pageContainer'>";
		for (y = 1; y <= parseInt((x+1) / 50); y++) {
			var page = "";
			if (y == 1) {
				page = "<div class='btnPage pgCosmetic btnpActive'>";
			} else {
				page = "<div class='btnPage pgCosmetic'>";
			}
			strCosmetic += page + y + "</div>";

			if (y == parseInt((x+1) / 50) && ((x+1) % 50) > 0) {
				strCosmetic += "<div class='btnPage pgCosmetic'>" + (y+1) + "</div>";
			}
		}
		$(".contCosmetics").children("div").html(strCosmetic);

		var mouseX, mouseY;
		$(document).mousemove(function(e) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		}).mouseover();

		$(".ibImg").hover(function() {
			var d = $(".desc");
			d.css({
				display: 'block',
				left: mouseX,
				top: mouseY
			});
			d.html($(this).attr('alt'));
		}, function() {
			var d = $(".desc");
			d.css({
				display: 'none'
			});
			d.html("");
		});

		$(".btnPage").click(function(e) {
			$(".icpContainer").each(function(index, el) {
				if ($(this).hasClass("icpActive") && $(this).hasClass("icpC")) {
					$(this).removeClass("icpActive");
				}
				if ($(this).hasClass("icpActive") && $(this).hasClass("icpW")) {
					$(this).removeClass("icpActive");
				}
			});

			if ($(this).hasClass("pgWeapon")) {
				$(".icpWeapon" + $(this).html()).addClass("icpActive");
			}
			else if ($(this).hasClass("pgCosmetic")) {
				$(".icpCosmetic" + $(this).html()).addClass("icpActive");
			}

			$(".btnPage").each(function(index, el) {
				if ($(this).hasClass("btnpActive") && $(this).hasClass("pgWeapon")) {
					$(this).removeClass("btnpActive");
				}
				if ($(this).hasClass("btnpActive") && $(this).hasClass("pgCosmetic")) {
					$(this).removeClass("btnpActive");
				}
			});
			$(this).addClass("btnpActive");
		});

		$(".itemTab").click(function(e) {
			$(".itemTab").each(function(index, el) {
				if ($(this).hasClass("iActive")) {
					$(this).removeClass("iActive");
				}
			});
			$(this).addClass("iActive");
		});
		function showIC(c) {
			$(".itemContainer").each(function(index, el) {
				if ($(this).hasClass("icActive")) {
					$(this).removeClass("icActive");
				}
			});
			c.addClass("icActive");
		}
		$(".btnWeap").click(function(event) {
			showIC($(".contWeapons"));
		});
		$(".btnCosm").click(function(event) {
			showIC($(".contCosmetics"));
		});
	});
</script>
</html>