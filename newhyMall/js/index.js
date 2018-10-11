
document.onload = function(){
	loginInfo();
//	console.log();
}

var Storage = window.localStorage;

$(".pro .pt-nav li").click(function(){
	if((this).className==""){
		$(this).addClass("current").siblings().removeClass("current");
	}
});

loginInfo();
function loginInfo(){
	var loginUser = Storage.getItem("loginUser");
	loginUser = (new Function('','return '+loginUser))();
	// console.log(loginUser);
}

