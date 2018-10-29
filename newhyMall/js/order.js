var btnpay = $('.btn-pay');
var btncancel = $('.btn-cancel');

btnpay.click(function(){
	window.location.href = 'pay.html';
});

btncancel.click(function(){
	if(confirm('确认取消？')){
		this.parentNode.parentNode.remove();
	}
});

