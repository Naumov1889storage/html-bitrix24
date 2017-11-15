/*LICENSE TAB*/
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).slideDown(500)
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


$(document).on("click", ".pricebtn", function () {
	$(".popup_call" ).addClass( "popup_call__show" );
	$(".popup_close" ).addClass( "popup_close__show" );
	$(".popup_overlay" ).addClass( "popup_overlay__show" );
});

$(document).on("click", ".start_get__btn", function () {
	$(".popup_call" ).addClass( "popup_call__show" );
	$(".popup_close" ).addClass( "popup_close__show" );
	$(".popup_overlay" ).addClass( "popup_overlay__show" );
});

$(document).on("click", ".simsim", function () {
	$(".popup_call" ).addClass( "popup_call__show" );
	$(".popup_close" ).addClass( "popup_close__show" );
	$(".popup_overlay" ).addClass( "popup_overlay__show" );
});
/*SUBMIT FORM*/
$(document).ready(function() {

   $("#formdiscount").submit(function() {
      $.ajax({
         type: "POST",
         url: "mail.php",
         data: $(this).serialize()
      }).done(function() {
         $(this).find("input").val("");
         alert("Спасибо за заявку! Купон выслан на ваш номер.");
         $("#formdiscount").trigger("reset");
      });
      return false;
   });
   
});

$(document).ready(function() {

   $("#formcall").submit(function() {
      $.ajax({
         type: "POST",
         url: "mail2.php",
         data: $(this).serialize()
      }).done(function() {
         $(this).find("input").val("");
         alert("Спасибо за заявку! Скоро мы с Вами свяжемся.");
         $("#formcall").trigger("reset");
      });
      return false;
   });
   
});


$(document).ready(function() {

   $("#formbuy").submit(function() {
      $.ajax({
         type: "POST",
         url: "mail3.php",
         data: $(this).serialize()
      }).done(function() {
         $(this).find("input").val("");
         alert("Спасибо за заявку! Лицензия будет выслана на ваш email.");
         $("#formbuy").trigger("reset");
      });
      return false;
   });
   
});


/*
/!*Плавная прокрутка страницы*!/
function slowScroll (id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 500);
	return false;
}*/
