tday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
	var d = new Date();
	var nday = d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
	var nhour = d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

	if(nhour == 0){ap = " AM";nhour=12;}
	else if(nhour < 12){ap = " AM";}
	else if(nhour == 12){ap = " PM";}
	else if(nhour > 12){ap = " PM";nhour-=12;}

	if(nmin <= 9) nmin = "0"+nmin;
	if(nsec <= 9) nsec = "0"+nsec;

	document.getElementById('liveTime').innerHTML = tday[nday]+", "+ndate+" "+tmonth[nmonth]+" "+nyear;
}
window.onload=function(){
	GetClock();
	setInterval(GetClock,1000);
}

function hideCollapse(){
	$(".sub-sidebar.collapse").collapse('hide');
}
