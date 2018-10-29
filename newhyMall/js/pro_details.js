
var objCentent = $(".pro-pic");
var objSmall = $(".pp-small");
var objMark = $("#mark");
var objFloatBox = $("#float-box");
var objMagnify = $(".magnify");
var objMagnifyImage = $(".magnify img");
  
objMark.mouseover(function () {
  objFloatBox.css("display","block");
  objMagnify.css("display","block");
});
  
objMark.mouseout(function () {
	objFloatBox.css("display","none");
  objMagnify.css("display","none");
});
  
objMark.mousemove(function (ev) {
	var _event = ev || window.event;  //兼容多个浏览器的event参数模式
	
  
  var left = _event.clientX - objCentent.offset().left - objFloatBox.width() / 2;
  var top = _event.clientY - objCentent[0].getBoundingClientRect().top - objFloatBox.height() / 2;
  //设置边界处理，防止移出小图片
  if (left < 0) {
     left = 0;
  } else if (left > (objMark.width() - objFloatBox.width())) {
      left = objMark.width() - objFloatBox.width();
  }
 
  if (top < 0) {
    top = 0;
  } else if (top > (objMark.height() - objFloatBox.height())) {
    top = objMark.height() - objFloatBox.height();
  }
  
  objFloatBox.css("left",(left + "px"));   //oSmall.offsetLeft的值是相对什么而言
  objFloatBox.css("top",(top + "px"));
                 
  //求其比值
  var percentX = left / (objMark.width() - objFloatBox.width());
  var percentY = top / (objMark.height() - objFloatBox.height());
                 
  //方向相反，小图片鼠标移动方向与大图片相反，故而是负值
  objMagnifyImage.css("left", (-percentX * (objMagnifyImage.width() - objMagnify.width()) + "px"));
  objMagnifyImage.css("top", (-percentY * (objMagnifyImage.height() - objMagnify.height()) + "px"));
});

/*轮播效果，图片切换效果*/
var ppbPrev = $(".ppb-left");
var ppbNext = $(".ppb-right");
var ppbList = $(".ppb-list li");

//向前
ppbNext.click(function(){
	ppbList = $(".ppb-list li");
	var newList = ppbList.slice(0,-1);
	$(".ppb-list").empty();
	$(".ppb-list").append(ppbList.slice(-1));
	$(".ppb-list").append(newList);
	$(".ppb-list li").click(function(){
		changePic(this);
	});
});

//向后
ppbPrev.click(function(){
	ppbList = $(".ppb-list li");
	var newList = ppbList.slice(1);
	newList.push(ppbList[0]);
	$(".ppb-list").empty();
	$(".ppb-list").append(newList);
	$(".ppb-list li").click(function(){
		changePic(this);
	});
});

//产品轮播图点击事件
$(".ppb-list li").click(function(){
		changePic(this);
	});

//产品轮播图切换图片函数
function changePic(el){
	$(el).addClass("active").siblings().removeClass("active");
	$(".pp-small img").attr("src",$(el).children("img").attr("src"));
	$(".magnify img").attr("src",$(el).children("img").attr("src"));
}

//选择产品规格
$(".pi-specs .alist li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});

//切换商品详情与累计评价
$(".pms-details").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".pm-details").addClass("active").siblings().removeClass("active");
});
$(".pms-evaluat").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".pm-evaluat").addClass("active").siblings().removeClass("active");
});

//选择评论类型
$(".evaluatBar li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});

var proObj = {};
//加入购物车
$(".btn-cart").click(function(){
	proObj.num = $('.num').val();
	setShopCartPro(proObj);
	window.location.href = "shop_cart.html";
});

initProDetails();
function initProDetails(){
	var search = window.location.search;
	var hash = window.location.hash;
	if(search){
		search=search.split("protype=")[1];
	}else{
		window.location.search = "protype=1";
		search=1;
	}
	if(hash){
		hash=hash.split("pro=")[1];
	}else{
		window.location.hash = "pro=1";
		hash=1;
	}
	
	var navs = $('.nav li');
	for(var i=0;i<navs.length;i++){
		if(i==search){
			console.log(i)
			$(navs[i]).addClass('current').siblings('li').removeClass('current');
		}
	}
	
	var data = {};
	for(var attr in prodataobj){
		if(prodataobj[attr].id == hash){
			proObj = prodataobj[attr];
			data[attr] = prodataobj[attr];
			$('.proImg').attr("src",prodataobj[attr].imgSrc);
			$('.pro-name').html(prodataobj[attr].titles);
			$('.pro-name').attr("proid",prodataobj[attr].id);
			$('.golding').html(prodataobj[attr].golding+".00");
			$('.sale').html(prodataobj[attr].sale+".00");
		}
	}
//	console.log(data);
}


//设置默认用户
function setShopCartPro(obj){
	var shopCartProes = (new Function('','return '+Storage.getItem("shopcart")))();
	var isit = true;
	if(shopCartProes){
		for(var i=0;i<shopCartProes.length;i++){
			if(shopCartProes[i].id == obj.id){
				shopCartProes[i].num = Number(shopCartProes[i].num) + Number(obj.num);
				isit = false;
			}
		}
		if(isit){
			shopCartProes.push(obj);
		}
	}else{
		shopCartProes = [obj];
	}
//		console.log(shopCartProes);
　Storage.setItem("shopcart",JSON.stringify(shopCartProes));
}

window.onhashchange = function(){
	initProDetails();
}
