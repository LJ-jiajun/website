$(".banner .focus li").mouseover(function(){
	i = $(this).index(".banner .focus li");
	setBanner();
});

var i = 0;

//切换到上一个图片
function prev(){
	i--;
	if(i < 0){
		i = $(".banner .pic-list li").length-1;
	}
	setBanner();
}

//切换到下一个图片
function next(){
	i++;
	if(i >= $(".banner .pic-list li").length){
		i=0;
	}
	setBanner();
}

function setBanner(){
	$(".banner .pic-list li").eq(i).addClass("on").siblings().removeClass("on");
	$(".banner .focus li").eq(i).addClass("on").siblings().removeClass("on");
}

var timer = setInterval(next,5000);

$(".banner").mouseover(function(){
	clearInterval(timer);
});

$(".banner").mouseout(function(){
	timer = setInterval(next,5000);
});
