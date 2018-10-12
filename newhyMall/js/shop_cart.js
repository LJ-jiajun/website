
var isAll = true;
var allcheckh = document.getElementById("allCheckH");
var allcheckf = document.getElementById("allCheckF");
var aChecks = $(".aCheck");

allcheckh.onclick = function(){
	allCheck();
	getTotal();
}
allcheckf.onclick = function(){
	allCheck();
	getTotal();
}
aChecks.click(function(){
	aCheck(this);
	getTotal();
});
//加
$(".add").click(function(){
		var n=$(this).prev().val();
		var num=parseInt(n)+1;
		if(num>50){ return;}
		$(this).prev().val(num);
		getTotal();
});
//减的效果
$(".subtract").click(function(){
	var n=$(this).next().val();
	var num=parseInt(n)-1;
	if(num<1){ return;}
	$(this).next().val(num);
	getTotal();
});

//单选
function aCheck(obj){
	if(allcheckh.checked){
		allCheck();
		obj.checked = true;
	}else{
		if(obj.checked){
			var num = 0;
			for(var i=0;i<aChecks.length;i++){
				if(aChecks[i].checked){
					num++;
				}
			}
			if(num==aChecks.length){
				allCheck();
			}
		}
	}
}
//全选
function allCheck(){
	for(var i=0;i<aChecks.length;i++){
		aChecks[i].checked = isAll;
	}
	allcheckh.checked = isAll;
	allcheckf.checked = isAll;
	isAll = !isAll;
}

//得到选中的商品的总金额
function getTotal(){
	var totalnum = 0;
	var totalmoney = 0.00;
	for(var i=0;i<aChecks.length;i++){
		if(aChecks[i].checked){
			var num = aChecks[i].parentNode.parentNode.getElementsByClassName("num")[0].value;
			var price = aChecks[i].parentNode.parentNode.getElementsByClassName("price")[0].innerHTML;
			var money = parseFloat(num)*parseFloat(price);
			aChecks[i].parentNode.parentNode.getElementsByClassName("money")[0].innerHTML = toDecimal(money,2);
			totalnum += parseFloat(num);
			totalmoney += money;
		}
	}
	console.log(totalnum,totalmoney)
	$("#totalNum")[0].innerHTML = totalnum;
	$("#totalMoney")[0].innerHTML = toDecimal(totalmoney,2);
}

//得到N位小数,返回字符串类型
function toDecimal(x,n){ 
		var f = parseFloat(x); 
		if (isNaN(f)) { 
			return false; 
		} 
		//系数
		var k = 1;
		if(!n){
			n = 2;
			for(var i=0;i<n;i++){
				k = k*10;
			}
		}else{
			for(var i=0;i<n;i++){
				k = k*10;
			}
		}
		var f = Math.round(x*k)/k; 
		var s = f.toString(); 
		var rs = s.indexOf('.'); 
		if (rs < 0) { 
			rs = s.length; 
			s += '.'; 
		} 
		while (s.length <= rs + n) { 
			s += '0'; 
		} 
		return s; 
    } 