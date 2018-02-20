$(document).ready(function () {
	var totalSteps = $('.carousel-quiz').length;
	var step = 1;
	var percent = (step / totalSteps) * 100;
	$('.progress-bar').css({width: percent + '%'});

	$('.progress__text').text(step + " из " + totalSteps);
	
	$('input[type=radio][name=options]').change(function() { 
	$('.carousel').carousel('next');
	if($('.carousel .carousel-quiz:last').hasClass('active')) { 
		$('.quiz__form').hide();
		$('.quiz__second').show(); 
		
		} 
	});

	$('.carousel').on('slid.bs.carousel', function (e) {
		step = $('.carousel .active').index('.carousel .carousel-quiz') + 1;
		percent = (step / totalSteps) * 100;
		$('.progress-bar').css({width: percent + '%'});
		$('.progress__text').text(step + " из " + totalSteps);

		
	});
});


$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 300;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Читать дальше...";
    var lesstext = "Скрыть";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

$(function(){
	$("#tel").mask("+7 (999) 999-99-99");
});

$(function(){
  $("#phone").mask("+7 (999) 999-99-99");
});

$(function(){
  $("#phone-main").mask("+7 (999) 999-99-99");
});

$(function(){
  $("#telephone").mask("+7 (999) 999-99-99");
});




$(document).ready(function() {

    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form").trigger("reset");
        });
        return false;
    });
    
});

$(document).ready(function() {

    $("#main").submit(function() {
        $.ajax({
            type: "POST",
            url: "main-form.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#main").trigger("reset");
        });
        return false;
    });
    
});






window.onload = function(){
    document.getElementById('a').onclick = function(){
        var div = document.getElementById('promo_cont');
        div.style.display = (div.style.display == '') ? 'block' : '';
        return false;
    };
};


new Clipboard('.btn-clipboard');


$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 150) {
      $('#top_nav').addClass('fixed-top');
      $('#top_nav').addClass('top_nav-none');
      $('#top_nav-second').addClass('fixed-top');
      $('#top_nav-second').removeClass('top_nav-none');
    }
    if ($(window).scrollTop() < 151) {
      $('#top_nav').removeClass('fixed-top');
      $('#top_nav').removeClass('top_nav-none');
      $('#top_nav-second').removeClass('fixed-top');
      $('#top_nav-second').addClass('top_nav-none');
    }
  });
});



AOS.init({
});

AOS.init({ 
    disable: 'mobile' 
});



$('.collapse').on('shown.bs.collapse', function(e) {
  var $card = $(this).closest('.card');
  $('html,body').animate({
    scrollTop: $card.offset().top - 50
  }, 500);
});

