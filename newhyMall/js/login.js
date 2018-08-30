


function getCSS(obj,attr){
	// 判断是在那种浏览器里面
	if(obj.currentStyle){
		//ie浏览器
		return parseFloat(obj.currentStyle[attr]);
	}else{
		// 谷歌浏览器
		return parseFloat(getComputedStyle(obj)[attr])
	}
}
