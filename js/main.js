function slider(n){

 	var	el = document.getElementsByClassName("screen--text__cont");
 	var bt = document.getElementsByClassName("rect-bt");
 	var screen = document.getElementsByClassName("screen");
 	var pad = 'pad' + n;
 	//alert(pad); 	
 	for (i = 0; i < 2; i++) {
	    el[i].className = el[i].className.replace("current", "");
	    bt[i].className = bt[i].className.replace("current", "");
	}
	el[n].className += " current";
	bt[n].className += " current";
}