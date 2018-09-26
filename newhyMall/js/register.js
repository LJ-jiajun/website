var registerSubmit = $("#registerSubmit");
var msgbtn = $("#msgbtn");
var Storage = window.localStorage;
var allUser = (new Function('','return '+Storage.getItem("user")))();


msgbtn.click(function(){
//	var verifyCode = new GVerify("v_container");
});

registerSubmit.click(register);

////刷新验证码
//changeCode.onclick = function(){
//	verifyCode.refresh();
//}

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
	var isok = $("#isok").val();
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
	    if(verifyCode.validate(code)){
	    	var isok = false;
	        for(var i=0;i<allUser.length;i++){
				if(allUser[i].username==username||allUser[i].email==username||allUser[i].phone==username){
					if(pwd == allUser[i].pwd){
						console.log("注册成功！");
						isok = true;
						setLoginUser(i,username,isRemember);
					}
				}
			}
	        if(!isok){
	        	//alert("注册失败！");
	        	console.log("注册失败！");
	        }
	    }else{
	        alert("验证码错误");
	        $("#msgCode").val("");
	        verifyCode.refresh();
	    }
	}
}

//生成随机短信验证码
function getMsgCode(){
	var str = "0123456789";
	
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



//设置
//function setLoginUser(num,loginname,isRemember){
//	var	loginUser = [
//			{
//				"username":allUser[num].username,
//				"pwd":allUser[num].pwd,
//				"email":allUser[num].email,
//				"phone":allUser[num].phone,
//				"loginName":loginname,
//				"loginState":true,
//				"loginTime":new Date().getTime(),
//				"isstorePwd":isRemember
//			}
//		];
//	//JSON.stringify(loginUser)转化为JSON字符串
//　　	Storage.setItem("loginUser",JSON.stringify(loginUser));
//}
//	

