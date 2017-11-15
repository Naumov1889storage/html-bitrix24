/*LICENSE TAB*/
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

/*POPUP*/
$(document).on("click", ".license_btn", function () {
   $(".popup_buy" ).addClass( "popup_buy__show" );
   $(".popup_close" ).addClass( "popup_close__show" );
   $(".popup_overlay" ).addClass( "popup_overlay__show" );
});

$(document).on("click", ".popup_close", function () {
   $(".popup_buy" ).removeClass( "popup_buy__show" );
   $(".popup_close" ).removeClass( "popup_close__show" );
   $(".popup_overlay" ).removeClass( "popup_overlay__show" );
   $(".popup_call" ).removeClass( "popup_call__show" );
});

$(document).on("click", ".popup_overlay", function () {
   $(".popup_buy" ).removeClass( "popup_buy__show" );
   $(".popup_close" ).removeClass( "popup_close__show" );
   $(".popup_overlay" ).removeClass( "popup_overlay__show" );
   $(".popup_call" ).removeClass( "popup_call__show" );
});

$(document).on("click", ".header_tel__btn", function () {
   $(".popup_call" ).addClass( "popup_call__show" );
   $(".popup_close" ).addClass( "popup_close__show" );
   $(".popup_overlay" ).addClass( "popup_overlay__show" );
});

/*SUBMIT FORM*/
