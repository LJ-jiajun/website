
var paylis = $(".pay-list li");
var banklis = $(".pay-banks li");
var passes = $(".pass-list input");
var payok = $(".btn-payok");
var paysuccess = $(".pay-success");
var payfailure = $(".pay-failure");
var close = $(".close");

paylis.click(function(){
	$(this).addClass('active').siblings("li").removeClass("active");
});

banklis.click(function(){
	$(this).addClass('active').siblings("li").removeClass("active");
});

passes.on('input',function(){
	var ind = $(this).index();
  	if(ind<passes.length){
  		if(isNaN($(this).val())){
  			$(this).val("");
  		}
  		if($(this).val()!=""){
  			$(this).next().focus();
  		}
   	}
});

payok.click(function(){
	var num = 0;
	for(var i=0;i<passes.length;i++){
		if(passes[i].value!=""){
			num++;
		}
	}
	if(num==6){
		paysuccess.show();
	}else{
		payfailure.show();
	}
});

close.click(function(){
	payfailure.hide();
});
