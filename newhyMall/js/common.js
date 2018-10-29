var Storage = window.localStorage;
console.log(Storage);
var allUser = (new Function('','return '+Storage.getItem("user")))();
var htctul = $('.htct-ul li');

//console.log(htctul[1]);
if(htctul[0]){
	htctul[1].children[0].onclick = function(){
		var loginState = getUserLoginState();
		if(loginState){
			window.location.href = "order.html";
		}else{
			alert('请登录您的账户！');
		}
	};
}

var hmsbtn = $('.hms-btn');

if(hmsbtn[0]){
	hmsbtn.click(function(){
		window.location.href = 'shop_list.html';
	});
}

var hmshotTxts = $('.hms-hotTxt li');
if(hmshotTxts[0]){
	hmshotTxts.click(function(){
		window.location.href = 'shop_list.html';
	});
}


var hbpclis = $('.hbpc-list').children();
if(hbpclis[0]){
	hbpclis.click(function(ev){
		ev = ev||window.event;
		if(ev.target.nodeName == "A"){
			window.location.href = "shop_list.html?protype="+($(this).index()+1);
		}
	});
}

var navas = $('.nav li a');
for(var i=1;i<navas.length;i++){
	navas[i].href = "shop_list.html?protype="+i;
}

var htctcss = {top:'30px'};
var bascss = {top:'-28px'};
$(".htct").click(function(){
	var that = this;
	setTimeout(htctMove(that),100);
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
var onoff = true;

$("body").click(function(){
	if(onoff){
		$(".hbpc-list").hide();
	}
});
$(".hbpc-title").mouseover(function(){
	$(".hbpc-list").show();
});
$(".hbpc-list").mouseenter(function(){
	onoff = false;
});
$(".hbpc-list").mouseleave(function(){
	onoff = true;
});

$('#user_exit').click(exit);

initCommon();
function initCommon(){
	//读取localStage本地存储，获取信息；
	var loginUser = (new Function('','return '+Storage.getItem("loginUser")))();
	if(loginUser){
		if(loginUser[0].loginState){
			$("#userinfo").show();
			$("#loginbar").hide();
			$("#userinfo span")[0].innerHTML = loginUser[0].username;
		}else{
			$("#userinfo").hide();
			$("#loginbar").show();
		}
	}else{
		$("#userinfo").hide();
		$("#loginbar").show();
	}
	
	$('.hmsc-cart').attr('href','shop_cart.html');
	
	getShopCartNum();
}


function getShopCartNum(){
	var shopCartProes = (new Function('','return '+Storage.getItem("shopcart")))();
	var shopCartNum = 0;
	if(shopCartProes){
		for(var i=0;i<shopCartProes.length;i++){
			shopCartNum += Number(shopCartProes[i].num);
		}
	}
	$('#pro-num').html(shopCartNum);
}

//存储用户登录信息
function setLoginUser(num,loginname,isRemember){
	var	loginUser = [
			{
				"username":allUser[num].username,
				"pwd":allUser[num].pwd,
				"email":allUser[num].email,
				"phone":allUser[num].phone,
				"loginName":loginname,
				"loginState":true,
				"loginTime":new Date().getTime(),
				"isstorePwd":isRemember
			}
		];
	//JSON.stringify(loginUser)转化为JSON字符串
　　	Storage.setItem("loginUser",JSON.stringify(loginUser));
}

// 用户注销
function exit(){
	var user = (new Function('','return '+Storage.getItem("loginUser")))();
	var	loginUser = [
			{
				"username":user[0].username,
				"pwd":user[0].pwd,
				"email":user[0].email,
				"phone":user[0].phone,
				"loginName":user[0].loginname,
				"loginState":false,
				"loginTime":user[0].loginTime,
				"isstorePwd":user[0].isRemember
			}
		];
	//JSON.stringify(loginUser)转化为JSON字符串
　　	Storage.setItem("loginUser",JSON.stringify(loginUser));
	initPage();
	console.log("注销成功");
}
//设置默认用户
function setDUser(){
	var	dUser = [
			{
				"username":"admin",
				"pwd":"admin1",
				"email":"123456@qq.com",
				"phone":"18983419713"
			}
		];
　　	Storage.setItem("user",JSON.stringify(dUser));
	return (new Function('','return '+Storage.getItem("user")))();
}

function getUserLoginState(){
	var loginUser = (new Function('','return '+Storage.getItem("loginUser")))();
	if(loginUser){
		if(loginUser[0].loginState){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

var noLoginArr = ['order','pay','address','comment','user'];

noLogin();
function noLogin(){
	var pathname = window.location.pathname;
	for(var i=0;i<noLoginArr.length;i++){
		if(pathname.indexOf(noLoginArr[i]) != -1){
			var loginState = getUserLoginState();
			if(!loginState){
				$('body').hide();
				alert('请登录您的账户！');
				window.location.href = 'login.html';
			}
		}
	}
}

