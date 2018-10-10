
var isAll = true;
var allcheckh = document.getElementById("allCheckH");
var allcheckf = document.getElementById("allCheckF");
var aChecks = $(".aCheck");

allcheckh.onclick = function(){
	allCheck();
	getAllNum();
}
allcheckf.onclick = function(){
	allCheck();
	getAllNum();
}
aChecks.click(function(){
	aCheck(this);
	getAllNum();
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
//得到所有
function getAllNum(){
	var allname = 0;
	for(var i=0;i<aChecks.length;i++){
		if(aChecks[i].checked){
			console.log(aChecks[i].parentNode.parentNode);
		}
	}
}

//加
$(".add").click(function(){
		var n=$(this).prev().val();
		var num=parseInt(n)+1;
		if(num>50){ return;}
		$(this).prev().val(num);
});
//减的效果
$(".subtract").click(function(){
	var n=$(this).prev().prev().val();
	var num=parseInt(n)-1;
	if(num<1){ return;}
	$(this).prev().prev().val(num);
});