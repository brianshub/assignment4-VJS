// prevents default action on all anchor tags
var anchors = document.getElementsByTagName('a');
 for(i=0, len=anchors.length; i<len; i++){
     anchors[i].addEventListener('click', function(e){
     	e.preventDefault();
     });
 }



document.getElementById('read-more').onclick = showMore;
document.getElementById('read-less').onclick = showLess;
document.getElementById('learn-more').onclick = learnMore;


function showMore(){
	document.getElementById('show-this-on-click').style.display = "block";
	document.getElementById('read-more').style.display = "none";
	document.getElementById('read-less').style.display = "block";
}

function showLess(){
	document.getElementById('show-this-on-click').style.display = "none";
	document.getElementById('read-more').style.display = "block";
	document.getElementById('read-less').style.display = "none";
}

function learnMore(){
	document.getElementById('learn-more-text').style.display = "block";
	document.getElementById('learn-more').style.display = "none";
}
