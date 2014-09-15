var a=0;
function change()
{
	if(a%3==0)
	{
	document.getElementById("change").innerHTML="asdfs";
	}
	if(a%3==1)
	{
	document.getElementById("change").innerHTML="nah";
	}
	if(a%3==2)
	{
	document.getElementById("change").innerHTML="<img src=\"./images/image.jpg\">";
	}
a++;
}
function sript()
{
	alert("hey");
}
function send()
{
	alert("hey");
	window.open('mailto:darclaw.z@gmail.com?subject=subject&body=body');
}
function getLoc(){
if(navigator.geolocation)
{
showPosition(navigator.geolocation.getCurrentPosition(showPosition));
}
else
{
alert("Geolocation is not supported by this browser.");
}

}
function showPosition(pos){
alert("Latitude: "+pos.coords.latitude+"\nLongitude: "+pos.coords.longitude);
}
