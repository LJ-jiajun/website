var btnok = $('#btnok');

btnok.click(function(){
	var loginState = getUserLoginState();
	if(loginState){
		if(confirm('确认提交？')){
			window.location.href = "pay.html";
		}
	}else{
		alert('请登录您的账户！');
	}
});

var moreaddresss = $('.more-addresss');
moreaddresss.click(function(){
	var loginState = getUserLoginState();
	if(loginState){
		window.location.href = "address.html";
	}else{
		alert('请登录您的账户！');
	}
});
