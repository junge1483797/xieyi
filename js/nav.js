$(".nav1").on("click","li",function(){
   	$(this).addClass("liColor").siblings().removeClass("liColor");
   	});
$(".block").on("click",function(){
   		$(".menu").fadeToggle();	
});

$(".goTop").on("click",function(){
   			$("body,html").scrollTop(0);
});

$(window).resize(function() {
	if($(document).width() >= 1000) {
		$(".menu").show();
	}else {
		$(".menu").hide();
	}
})
