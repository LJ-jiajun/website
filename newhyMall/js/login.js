var loginSubmit = $("#loginSubmit");
var verifyCode = new GVerify("v_container");
var changeCode = document.getElementById("changeCode");

changeCode.onclick = function(){
	verifyCode.refresh();
}

loginSubmit.click(login);

function checkLoginForm(username,pwd,code){
	if(!checkUserName(username) && !checkEmail(username) && !checkPhone(username)){
		return false;
	}
	if(!checkPassword(pwd)){
		return false;
	}
	if(!checkCode(code)){
		return false;
	}
}

function login(){
	var username = $("#username").val();
	var pwd = $("#password").val();
	var code = $("#code").val();
	if(checkLoginForm(username,pwd,code);){
		
		var res = verifyCode.validate(code);
	    if(res){
	        alert("验证正确");
	    }else{
	        alert("验证码错误");
	    }
	}
	
	
	
}
