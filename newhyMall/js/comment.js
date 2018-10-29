var levels = $('.com-type .level li');
var comstars1 = $('.com-star1 img');
var comstars2 = $('.com-star2 img');
var comstars3 = $('.com-star3 img');
var btncom = $('#btn-com');

levels.click(function(){
	switch($(this).index()){
		case 0:levels[0].children[1].src = "img/high1.png";
				levels[1].children[1].src = "img/mid.png";
				levels[2].children[1].src = "img/bad.png";
			break;
		case 1:levels[1].children[1].src = "img/mid1.png";
				levels[0].children[1].src = "img/high.png";
				levels[2].children[1].src = "img/bad.png";
			break;
		case 2:levels[2].children[1].src = "img/bad1.png";
				levels[0].children[1].src = "img/high.png";
				levels[1].children[1].src = "img/mid.png";
			break;
		default:break;
	}
	
	$(this).addClass('active').siblings().removeClass("active");
});

comstars1.click(function(){
	setStars(this);
});
comstars2.click(function(){
	setStars(this);
});
comstars3.click(function(){
	setStars(this);
});

function setStars(obj){
	var len = $(obj).index();
	for(var i=0;i<=len;i++){
		obj.parentNode.children[i].src = "img/red-star.png";
	}
	for(var j=len+1;j<5;j++){
		obj.parentNode.children[j].src = "img/white-star.png";
	}
}

btncom.click(function(){
	window.location.href='order.html';
});