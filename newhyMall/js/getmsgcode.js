
(function(){
	
	//生成4位随机数
	window.getMsgCode = function(len){
		var str = "1234567890";
		var arr = str.split("");
		var result = "";
		for(var i=0;i<len;i++){
			 var txt = arr[randomNum(0, arr.length)];
			 result += txt;
		}
		return result;
	}
	
	
	/**生成一个随机数**/
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
})()
