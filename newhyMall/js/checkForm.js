
//验证用户名，长度为2到20的字母和数字集合
function checkUserName(userName){
	//正则表达式，匹配长度为2到20的字母和数字集合
	var Reg=/^[a-zA-Z0-9]{1,19}$/; 
	if(userName == "")){ 
		alert("用户名不能为空！");
		return false; 
	}else if(!Reg.test(userName)){ 
		alert("请输入正确格式的用户名，2到20的字母和数字集合");
		return false; 
	}else{
		return true;
	}
}

//验证密码，以字母开头，长度在6~18之间，只能包含字母、数字和下划线
function checkPassword(pwd){
	//正则表达式，匹配长度为6到18的字母和数字集合
	var Reg=/^[a-zA-Z]\w{5,17}$/; 
	if(pwd == "")){ 
		alert("密码不能为空！");
		return false; 
	}else if(!Reg.test(pwd)){ 
		alert("请输入正确格式的密码，以字母开头，长度在6~18之间，只能包含字母、数字和下划线");
		return false; 
	}else{
		return true;
	}
}

//验证确认密码，以字母开头，长度在6~18之间，只能包含字母、数字和下划线
function checkRepassword(pwd){
	var repwd = document.getElementById("repassword").val();
	
	if(repwd == "")){
		alert("确认密码不能为空！");
		return false; 
	}else if( pwd != repwd){ 
		alert("两次输入的密码不相同，请重新输入！");
		return false; 
	}else{
		return true;
	}
}

//验证邮箱地址
function checkEmail(email){
	//正则表达式，匹配邮箱地址
	var Reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	if(email == "")){ 
		alert("密码不能为空！");
		return false; 
	}else if(!Reg.test(email)){ 
		alert("请输入正确格式的邮箱地址！");
		return false; 
	}else{
		return true;
	}
}

//验证手机号码
function checkPhone(phone){
	//正则表达式，匹配手机号码
	var Reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; 
	if(phone == "")){ 
		alert("手机号码不能为空！");
		return false; 
	}else if(!Reg.test(phone)){ 
		alert("请输入正确格式的手机号码！");
		return false; 
	}else{
		return true;
	}
}