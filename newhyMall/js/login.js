
var users = null;
var loginSubmit = $("#loginSubmit");
var verifyCode = new GVerify("v_container");
var changeCode = document.getElementById("changeCode");
var Storage = window.localStorage;
//页面加载完执行，进行初始化页面
$(document).ready(function(){
	setUser();
  	initLogin();
 });

function initLogin(){
	//读取 localStage 本地存储，填充信息；
  	users = JSON.parse(Storage.getItem("user"));
	//console.log(users);//输出
	if(users[0].isstorePwd==true){
		//lacoste  已经保存 登陆信息 直接登陆  
        $("#username").val(users[0].loginName);
        $("#password").val(users[0].pwd);
        document.getElementById("isRememberPwd").checked = true;
	}else{
		$("#username").val(users[0].loginName);
	}
}

//刷新验证码
changeCode.onclick = function(){
	verifyCode.refresh();
}

//点击登录按钮，进行登录验证
loginSubmit.click(login);

function checkLoginName(username){
	//分别用户名，邮箱，手机号验证登录名
	if(checkUserName(username)>0 || checkEmail(username)>0 || checkPhone(username)>0){
		return true;
	}else{
		return false;
	}
}
//验证表单数据格式
function checkLoginForm(username,pwd,code){
	if(checkUserName(username) || checkEmail(username) || checkPhone(username)){
		if(!checkPassword(pwd)){
			return false;
		}else{
			if(!checkCode(code)){
				return false;
			}
		}
	}else{
		return false;
	}
	return true;
}

//登录函数
function login(){
	var username = $("#username").val();
	var pwd = $("#password").val();
	var code = $("#code").val();
	
	if(checkLoginForm(username,pwd,code)){
		var res = verifyCode.validate(code);
	    if(res){
	        alert("验证正确");
	    }else{
	        alert("验证码错误");
	        verifyCode.refresh();
	    }
	}
	
	for(var i=0;i<User.length;i++){
		if(User[i].username==username||User[i].email==username||User[i].phone==username){
			if(pwd == User[i].password){
				alert("登录成功！");
			}
		}else{
			alert("用户名或密码输入错误！");
		}
	}
	//window.localStorage = "username"
	
	//console.log(window.localStorage);
}

//设置
function setUser(){
	if(!Storage.getItem("user")){
		users = [
			{
				"username":"admin",
				"pwd":"admin1",
				"email":"757737611@qq.com",
				"phone":"15223412345",
				"loginName":"admin",
				"loginTime":new Date().getTime(),
				"isstorePwd":false
			}
		];
		//JSON.stringify(users)转化为JSON字符串
　　		Storage.setItem("user",JSON.stringify(users));
	}
}
	
