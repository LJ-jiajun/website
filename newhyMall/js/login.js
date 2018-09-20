
var loginUser = null;
var loginSubmit = $("#loginSubmit");
var verifyCode = new GVerify("v_container");
var changeCode = document.getElementById("changeCode");
var Storage = window.localStorage;
var allUser = JSON.parse(Storage.getItem("user"));
//页面加载完执行，进行初始化页面
$(document).ready(function(){
  	initLogin();
 });

function initLogin(){
	//读取 localStage 本地存储，填充信息；
  	loginUser = JSON.parse(Storage.getItem("loginUser"));
	//console.log(users);//输出
	if(loginUser){
		if(loginUser[0].isstorePwd==true){
			//lacoste  已经保存 登陆信息 直接登陆  
	        $("#username").val(loginUser[0].loginName);
	        $("#password").val(loginUser[0].pwd);
	        document.getElementById("isRememberPwd").checked = true;
		}else{
			$("#username").val(loginUser[0].loginName);
		}
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
	if(checkUserName(username)==0 && checkEmail(username)==0 && checkPhone(username)==0){
		alert("请输入用户名！");
		return false;
	}else if(checkUserName(username)==-1 && checkEmail(username)==-1 && checkPhone(username)==-1){
		alert("请输入正确格式的用户名！");
		return false;
	}else if(checkUserName(username)==1 || checkEmail(username)==1 || checkPhone(username)==1){
		if(!checkPassword(pwd)){
			return false;
		}else{
			if(!checkCode(code)){
				return false;
			}
		}
	}
	return true;
}

//登录函数
function login(){
	var username = $("#username").val();
	var pwd = $("#password").val();
	var code = $("#code").val();
	var isRemember = $("#isRememberPwd")[0].checked;
	//检查用户名，密码，验证码的格式
	if(checkLoginForm(username,pwd,code)){
		//判断验证码是否正确
	    if(verifyCode.validate(code)){
	    	var isok = false;
	        for(var i=0;i<allUser.length;i++){
				if(allUser[i].username==username||allUser[i].email==username||allUser[i].phone==username){
					if(pwd == allUser[i].pwd){
						console.log("登录成功！");
						isok = true;
						setLoginUser(i,username,isRemember);
//						var	users = [
//								{
//									"username":username,
//									"pwd":pwd,
//									"email":"757737611@qq.com",
//									"phone":"15223412345",
//									"loginName":username,
//									"loginState":true,
//									"loginTime":new Date().getTime(),
//									"isstorePwd":isRemember
//								}
//							];
//						Storage.setItem("loginUser",JSON.stringify(users));
//						var	users1 = [
//								{
//									"username":username,
//									"pwd":pwd,
//									"email":"757737611@qq.com",
//									"phone":"15223412345"
//								}
//							];
//						Storage.setItem("user",JSON.stringify(users1));
					}
				}
			}
	        if(!isok){
	        	//alert("登录失败！");
	        	console.log("登录失败！");
	        }
	    }else{
	        alert("验证码错误");
	        $("#code").val("");
	        verifyCode.refresh();
	    }
	}
}

//设置
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
	
