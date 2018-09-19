

(function(){
	
	window.magnifier = function (obj,obj1,obj2){
		var div = null;
		obj.addEventListener('mouseenter',function(ev){
			obj1.style.display = 'block';
			div = document.createElement('div');
			div.style.width = '150px';
			div.style.height = '150px';
			div.style.opacity = '0.5';
			div.style.background = '#f60';
			div.style.position = 'absolute';
			div.style.left = 0;
			div.style.top = 0;
			obj.appendChild(div);
		})	
		obj.addEventListener('mouseleave',function(ev){
			obj1.style.display = 'none';
			div.remove();
		})	
		obj.addEventListener('mousemove',function(ev){
			ev = ev||window.event;
			var objPosition = obj.getBoundingClientRect();
			var l = (ev.pageX - objPosition.left) - div.offsetWidth/2;
			var t = (ev.pageY - objPosition.top) - div.offsetHeight/2 
			
			if(t<=0){
				t = 0;
			}else if(t>=(obj.clientHeight - div.clientHeight)){
				t = obj.clientHeight - div.clientHeight;
			}
			
			if(l<=0){
				l = 0;
			}else if(l>=(obj.clientWidth - div.clientWidth)){
				l = obj.clientWidth - div.clientWidth;
			}
			
			
			div.style.left =  l+ 'px';
			div.style.top = t + 'px';
			
			
			// 让大图一起动起来
			
			var scollX = l/(obj.clientWidth - div.clientWidth);
			var scollY = t/(obj.clientHeight - div.clientHeight);

			obj2.style.left= -scollX*(obj2.clientWidth-obj1.clientWidth)+'px';
			obj2.style.top = -scollY*(obj2.clientHeight-obj1.clientHeight)+'px';
			
		})
		
	}
	
	
	
})()


