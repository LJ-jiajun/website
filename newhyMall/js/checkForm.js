
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
function checkRepassword(repwd){
	var pwd = document.getElementById("password").val();
	
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

//验证金额，2位小数的正数
function checkMoney(money){
	//正则表达式，匹配金额
	var Reg=/^[0-9]+(.[0-9]{1,2})?$/; 
	if(money == "")){ 
		//alert("money为空！");
		//return false; 
		money = 0.00;
	}else if(!Reg.test(money)){ 
		alert("请输入正确格式的金额！");
		return false; 
	}else{
		return true;
	}
}

//验证url
function checkUrl(url){
	//正则表达式，匹配url
	var Reg=/[a-zA-z]+://[^\s]* 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/; 
	if(url == "")){ 
		alert("url不能为空！");
		return false; 
	}else if(!Reg.test(url)){ 
		alert("请输入正确格式的url！");
		return false; 
	}else{
		return true;
	}
}

//验证qq号
function checkQQ(qq){
	//正则表达式，匹配qq
	var Reg=/[1-9][0-9]{4,}/; 
	if(qq == "")){ 
		alert("qq不能为空！");
		return false; 
	}else if(!Reg.test(qq)){ 
		alert("请输入正确格式的qq！");
		return false; 
	}else{
		return true;
	}
}

//验证邮政编码
function checkZipcode(Zipcode){
	//正则表达式，匹配邮政编码
	var Reg=/[1-9]\d{5}(?!\d)/; 
	if(Zipcode == "")){ 
		alert("邮政编码不能为空！");
		return false; 
	}else if(!Reg.test(Zipcode)){ 
		alert("请输入正确格式的邮政编码！");
		return false; 
	}else{
		return true;
	}
}

//验证验证码
function checkCode(code){
	//正则表达式，匹配验证码(4位数)
	var Reg=/^[A-Za-z]{4}$/; 
	if(code == "")){ 
		alert("验证码不能为空！");
		return false; 
	}else if(!Reg.test(code)){ 
		alert("请输入正确格式的验证码！");
		return false; 
	}else{
		return true;
	}
}

//验证短信验证码
function checkMsgCode(msgCode){
	//正则表达式，匹配短信验证码
	var Reg=/^\d{4}$/; 
	if(msgCode == "")){ 
		alert("短信验证码不能为空！");
		return false; 
	}else if(!Reg.test(msgCode)){ 
		alert("请输入正确格式的短信验证码！");
		return false; 
	}else{
		return true;
	}
}

/*
 * 常用的正则表达式:
 
 	帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$
	密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
	强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$
 	Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
 	手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
 	InternetURL：[a-zA-z]+://[^\s]* 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$
 	
 	数字：^[0-9]*$
 	n位的数字：^\d{n}$
 	至少n位的数字：^\d{n,}$
 	m-n位的数字：^\d{m,n}$
 	由26个英文字母组成的字符串：^[A-Za-z]+$
 	长度为3-20的所有字符：^.{3,20}$
 	由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
 	由数字、26个英文字母或者下划线组成的字符串：^\w+$ 或 ^\w{3,20}$
 	中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
	中文字符的正则表达式：[\u4e00-\u9fa5]
 	双字节字符：[^\x00-\xff] (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))
 	日期格式：^\d{4}-\d{1,2}-\d{1,2}
 
 */
 	
 
