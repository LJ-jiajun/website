var Storage = window.localStorage;
var allUser = null;

//获取短信验证码
$("#msgbtn").click(function(){
	var code = getMsgCode(4);
	$(this).val(code)
});

$("#registerSubmit").click(register);

//验证表单数据格式
function checkRegisterForm(user){
	if(checkUserName(user.username)==0){
		alert("请输入用户名！");
		return false;
	}else if(checkUserName(user.username)==-1){
		alert("请输入正确格式的用户名！");
		return false;
	}
	if(!checkPassword(user.pwd)){
		return false;
	}
	if(!checkRepassword(user.pwd,user.repwd)){
		return false;
	}
	if(checkEmail(user.email)==0){
		alert("请输入邮箱地址！");
		return false;
	}else if(checkEmail(user.email)==-1){
		alert("请输入正确格式的邮箱地址！");
		return false;
	}
	if(checkPhone(user.phone)==0){
		alert("请输入手机号码！");
		return false;
	}else if(checkPhone(user.phone)==-1){
		alert("请输入正确格式的手机号码！");
		return false;
	}
	if(!checkMsgCode(user.code)){
		return false;
	}
	if(!user.isok){
		alert("请阅读并同意《新合谊注册条款》！");
		return false;
	}
	return true;
}

//注册函数
function register(){
	var userName = $("#username").val();
	var pwd = $("#password").val();
	var repwd = $("#repassword").val();
	var userEmail = $("#userEmail").val();
	var userPhone = $("#userPhone").val();
	var msgCode = $("#msgCode").val();
	var isok = document.getElementById("isok").checked;
	var user = {
		username : userName,
		pwd : pwd,
		repwd : repwd,
		email : userEmail,
		phone : userPhone,
		code : msgCode,
		isok : isok
	}
	//检查注册表单的格式
	if(checkRegisterForm(user)){
		//判断验证码是否正确
	    if(msgCode == $("#msgbtn").val()){
	    	allUser = (new Function('','return '+Storage.getItem("user")))();
	    	if(allUser){
	    		for(var i=0;i<allUser.length;i++){
					if(allUser[i].username==userName){
						alert("此用户名已被注册，请重试！");
						return;
					}
					if(allUser[i].email==userEmail){
						alert("此邮箱已被注册，请重试！");
						return;
					}
					if(allUser[i].phone==userPhone){
						alert("此手机号已被注册，请重试！");
						return;
					}
				}
	    		var newUser = {
					"username":user.username,
					"pwd":user.pwd,
					"email":user.email,
					"phone":user.phone
				};
				allUser.push(newUser);
	    		Storage.setItem("user",JSON.stringify(allUser));
	    		console.log("注册成功！");
		        console.log(allUser);
	    	}else{
	    		console.log("可以注册");
	    		var newUser = [{
					"username":user.username,
					"pwd":user.pwd,
					"email":user.email,
					"phone":user.phone
				}];
	    		Storage.setItem("user",JSON.stringify(newUser));
	    		console.log("注册成功！");
	    	}
	        
	    }else{
	        alert("验证码错误");
	        $("#msgCode").val("");
//	        verifyCode.refresh();
	    }
	}
}

//function checkForm(){
//	var userName = $("#username").val();
//	var pwd = $("#password").val();
//	var repwd = $("#repassword").val();
//	var userEmail = $("#userEmail").val();
//	var userPhone = $("#userPhone").val();
//	var msgCode = $("#msgCode").val();
//	var msgbtn = $("#msgbtn");
//	var remember = $("#remember").val();
//	
//	checkUserName(userName);
//	checkPassword(pwd);
//	checkRepassword(repwd);
//	checkEmail(userEmail);
//	checkPhone(userPhone);
//}




//var changeCode = document.getElementById("changeCode");


////页面加载完执行，进行初始化页面
//$(document).ready(function(){
//	initRegister();
// });
//
//function initRegister(){
//	//读取 localStage 本地存储，填充信息；
//	loginUser = (new Function('','return '+Storage.getItem("loginUser")))();
//	//console.log(users);//输出
//	if(loginUser){
//		if(loginUser[0].isstorePwd==true){
//			//lacoste  已经保存 登陆信息 直接登陆  
//	        $("#username").val(loginUser[0].loginName);
//	        $("#password").val(loginUser[0].pwd);
//	        document.getElementById("isRememberPwd").checked = true;
//		}else{
//			$("#username").val(loginUser[0].loginName);
//		}
//	}
//}

////刷新验证码
//changeCode.onclick = function(){
//	verifyCode.refresh();
//}

////点击登录按钮，进行登录验证
//loginSubmit.click(login);

//function checkLoginName(username){
//	//分别用户名，邮箱，手机号验证登录名
//	if(checkUserName(username)>0 || checkEmail(username)>0 || checkPhone(username)>0){
//		return true;
//	}else{
//		return false;
//	}
//}



//设置默认用户
function setDUser(user){
	var	dUser = [
			{
				"username":user.username,
				"pwd":user.pwd,
				"email":user.email,
				"phone":user.phone
			}
		];
	//JSON.stringify(loginUser)转化为JSON字符串
　　	Storage.setItem("user",JSON.stringify(dUser));
}
	

