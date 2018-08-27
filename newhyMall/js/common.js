var htctcss = {top:'30px'};
var bascss = {top:'-28px'};
$(".htct").click(function(){
	setTimeout(htctMove(this),100);
});

function htctMove(t){
	$(t).parent().siblings().children(".htct-ul").animate(bascss,1000);
	htctcss.top = $(t).next().css("top");
    if(htctcss.top==='-28px'){
        htctcss.top='30px';
    }else if(htctcss.top==='30px'){
        htctcss.top='-28px';
    }
    $(t).next().animate(htctcss,1000);
}

$(".hbpc-title").mouseover(function(){
	$(".hbpc-list").show();
	event.stopPropagation();
	$(".hbpc-list").click(function(){
		$(this).show();
		event.stopPropagation();
	});
});

$("body").click(function(){
	$(".hbpc-list").hide();
});