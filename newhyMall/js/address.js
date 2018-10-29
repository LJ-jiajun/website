var adels = $('.adel');
var setDefaults = $('.address-table tr');

adels.click(function(){
	if(confirm('确认删除？')){
		this.parentNode.parentNode.remove();
	}
});

setDefaults.click(function(){
	$(this).addClass('active').siblings().removeClass("active");
//	console.log($(this).addClass('active').siblings('input'));
});
