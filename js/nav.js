$(".nav1").on("click","li",function(){
   	$(this).addClass("liColor").siblings().removeClass("liColor");
   	});
$(".block").on("click",function(){
   	if($(document).width() <= 1000){
   		$(".menu").fadeToggle();
   	}else{
   				
   	}
});

$(".goTop").on("click",function(){
   			$("body,html").scrollTop(0);
// 			console.log("1")
});