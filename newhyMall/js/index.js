$(".pro .pt-nav li").click(function(){
	if((this).className==""){
		$(this).addClass("current").siblings().removeClass("current");
	}
});