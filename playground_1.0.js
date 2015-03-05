window.onload=function(){
	var playground = document.querySelectorAll(".playground");
	for(var i=0;i<playground.length;i++){
		var v = document.createElement("video");
		v.setAttribute("autoplay","");
		v.setAttribute("loop","");
		v.innerHTML = "<source src='"+playground[i].dataset["video"]+"' type='video/mp4'>";
		v.style.minHeight = v.style.minWidth = "100%";
		v.style.height = v.style.width = "auto";
		v.style.bottom = "0";
		v.style.position = "fixed";
		v.style.zIndex = "-1000";
		v.style.left = "50%";
		v.style.transform = v.style.webkitTransform = "translate3d(-50%,0,0)";
		playground[i].appendChild(v);
	}
}
