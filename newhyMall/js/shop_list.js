
var i = 0;

$(".cna-brand ul li").click(function(){
	if($(".cna-brand .multi-select").attr('class').indexOf("selected")==(-1)){
		i = $(this).index(".cna-brand li");
		$(this).addClass("active").siblings().removeClass("active");
	}else{
		console.log($(this).attr('class'));
		if($(this).attr('class')=="" || $(this).attr('class')== undefined){
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
		}
	}
	
});

$(".cna-style ul li").click(function(){
	if($(".cna-style .multi-select").attr('class').indexOf("selected")==(-1)){
		i = $(this).index(".cna-style li");
		$(this).addClass("active").siblings().removeClass("active");
	}else{
		console.log($(this).attr('class'));
		if($(this).attr('class')=="" || $(this).attr('class')== undefined){
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
		}
	}
	
});

$(".cna-pattern ul li").click(function(){
	if($(".cna-pattern .multi-select").attr('class').indexOf("selected")==(-1)){
		i = $(this).index(".cna-pattern li");
		$(this).addClass("active").siblings().removeClass("active");
	}else{
		console.log($(this).attr('class'));
		if($(this).attr('class')=="" || $(this).attr('class')== undefined){
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
		}
	}
	
});

$(".cna-specs ul li").click(function(){
	if($(".cna-specs .multi-select").attr('class').indexOf("selected")==(-1)){
		i = $(this).index(".cna-specs li");
		$(this).addClass("active").siblings().removeClass("active");
	}else{
		console.log($(this).attr('class'));
		if($(this).attr('class')=="" || $(this).attr('class')== undefined){
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
		}
	}
	
});

$(".cn-category .open").click(function(){
	if($(this).attr('class').indexOf("selected")==(-1)){
		$(this).addClass("selected");
		$(this).prev().css("height","76px");
	}else{
		$(this).removeClass("selected");
		$(this).prev().css("height","38px");
	}
});

$(".cn-category .multi-select").click(function(){
	if($(this).attr('class').indexOf("selected")==(-1)){
		$(this).addClass("selected");
	}else{
		$(this).removeClass("selected");
	}
});

$(".filter-content li").click(function(){
	if($(this).attr('class')=="" || $(this).attr('class')== undefined){
		i = $(this).index(".cna-specs li");
		$(this).addClass("active").siblings().removeClass("active");
	}else{
		$(this).removeClass("active");
	}
});

//验证金额
function IWS_CheckDecimal(obj) {
    var temp = /^\d+\.?\d{0,2}$/;
    if (temp.test(obj.value)) {
    } else {
        obj.value = obj.value.substr(0, obj.value.length - 1);
        IWS_CheckDecimal(obj);
    }
}