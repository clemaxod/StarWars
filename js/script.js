//AU CLIQUE ON AFFICHE LE MENU MOBILE VIA DU JQUERY

$(document).ready(function(){

	$("#right").click(function(){
		$("#menu_responsive").slideDown();
		$(this).fadeOut(200);
		$("#left").fadeIn(200);
	});
	$("#left").click(function(){
		$("#menu_responsive").slideUp();
		$(this).fadeOut(200);
		$("#right").fadeIn(200);
	})

	$('#image_parallaxe').parallax("center", 0.3, 0.1, true);
	$('#parallaxe_kylo_ren').parallax("center", 0.5, 0.2, true);


	
	var positionElementInPage = $('#publicite').offset().top - 47;
	var positionDivInferieur = $('#fin_scroll').offset().top;
	console.log(positionElementInPage);
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
	  if($(this).scrollTop() > 300){
	  		$("#publicite").css("margin-top","400px");
		}
		else{
		
		}
	});
});


	
	
