
initShopCart();
function initShopCart(){
	var shopCartProes = (new Function('','return '+Storage.getItem("shopcart")))();
	var str = '';
	var shopcartnum = 0;
	if(shopCartProes){
		for(var i=0;i<shopCartProes.length;i++){
			str += '<tr>' +
						'<td><input type="checkbox" name="'+shopCartProes[i].id+'" class="aCheck"/><img src="'+shopCartProes[i].imgSrc+'" alt="" /></td>' +
						'<td>'+shopCartProes[i].titles+'</td>' +
						'<td>￥<i class="price">'+shopCartProes[i].sale+'.00</i></td>' +
						'<td>' +
							'<div class="numbox">' +
								'<em class="subtract">-</em>' +
								'<input type="text" value="'+shopCartProes[i].num+'" class="num"/>' +
				            	'<em class="add">+</em>' +
							'</div>' +
							'<p class="inventory">库存：<i>666</i></p>' +
						'</td>' +
						'<td>￥<i class="money">'+(Number(shopCartProes[i].sale)*Number(shopCartProes[i].num)) +'.00</i></td>' +
						'<td>' +
							'<p><a class="del" name="'+shopCartProes[i].id+'" href="javascript:;">删除</a></p>' +
							'<p><a class="favorite" href="javascript:;">移到我的收藏</a></p>' +
						'</td>' +
					'</tr>';
			shopcartnum += Number(shopCartProes[i].num);
		}
	}
	if(shopcartnum==0){
		shopcartnum="";
	}
	$('#shopcartnum').html(shopcartnum);
	$('#shopcart').html(str);
}

var isAll = true;
var allcheckh = document.getElementById("allCheckH");
var allcheckf = document.getElementById("allCheckF");
var dels = $('#shopcart .del');
var aChecks = $(".aCheck");
var btnClearing = $("#clearing");

btnClearing.click(function(){
	clearShopCart();
});

function clearShopCart(){
	var orderArr = [];
	for(var i=0;i<aChecks.length;i++){
		if(aChecks[i].checked){
			var shopCartProes = (new Function('','return '+Storage.getItem("shopcart")))();
			if(shopCartProes){
				for(var j=0;j<shopCartProes.length;j++){
					if(shopCartProes[j].id == aChecks[i].name){
						
						orderArr.push(shopCartProes[j]);
//						Storage.setItem("orderlist",JSON.stringify(orderArr));
//						shopCartProes.splice(j,1);
//		　				Storage.setItem("shopcart",JSON.stringify(shopCartProes));
					}
				}
			}
//			var num = aChecks[i].parentNode.parentNode.getElementsByClassName("num")[0].value;
//			var price = aChecks[i].parentNode.parentNode.getElementsByClassName("price")[0].innerHTML;
//			var money = parseFloat(num)*parseFloat(price);
//			aChecks[i].parentNode.parentNode.getElementsByClassName("money")[0].innerHTML = toDecimal(money,2);
//			totalnum += parseFloat(num);
//			totalmoney += money;
		}
	}
	if(orderArr.length==0){
		alert("请选择商品！");
	}else{
		console.log(orderArr);
	}
}

dels.click(function(){
	if(confirm("确认删除？")){
		delShopCartPro(this.name);
	}
});

function delShopCartPro(id){
	var shopCartProes = (new Function('','return '+Storage.getItem("shopcart")))();
	if(shopCartProes){
		for(var i=0;i<shopCartProes.length;i++){
			if(shopCartProes[i].id == id){
				shopCartProes.splice(i,1);
　				Storage.setItem("shopcart",JSON.stringify(shopCartProes));
				initShopCart();
				getShopCartNum();
			}
		}
	}
}

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
	getMoney();
	getTotal();
});
//减
$(".subtract").click(function(){
	var n=$(this).next().val();
	var num=parseInt(n)-1;
	if(num<1){ return;}
	$(this).next().val(num);
	getMoney();
	getTotal();
});

//单选
function aCheck(obj){
	if(allcheckh.checked){
		if(aChecks.length==1){
			allCheck();
			obj.checked = false;
		}else{
			allCheck();
			obj.checked = true;
		}
	}else{
		var num = 0;
		if(obj.checked){
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

function getMoney(){
	var num = 0;
	var price = 0.00;
	var money = 0.00;
	for(var i=0;i<aChecks.length;i++){
		num = aChecks[i].parentNode.parentNode.getElementsByClassName("num")[0].value;
		price = aChecks[i].parentNode.parentNode.getElementsByClassName("price")[0].innerHTML;
		money = parseFloat(num)*parseFloat(price);
		aChecks[i].parentNode.parentNode.getElementsByClassName("money")[0].innerHTML = toDecimal(money,2);
	}
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


