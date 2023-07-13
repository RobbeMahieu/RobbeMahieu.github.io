
window.onload = function(){
	
	var navlinks = document.getElementsByClassName("navItem");
	for(var i = 0; i < navlinks.length; ++i){
		navlinks[i].onclick = function(e) {navigate(e)};
	}
	
};

function navigate(e){
	var pageLink = "pages/" + e.target.innerHTML.toLowerCase() + ".html";
	var contentPanel = parent.document.getElementById("content");
	contentPanel.src = pageLink;
}