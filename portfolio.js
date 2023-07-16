function CreatePortfolio(){
	
	var style = `<link rel="stylesheet" href="portfolio.css">`;
	
	var content = document.createElement("div");
	content.classList.add("flexRow-wrap");
	
	// Replace with code to load them from file
	content.innerHTML += AddCard(100);
	content.innerHTML += AddCard(100);
	content.innerHTML += AddCard(30);
	content.innerHTML += AddCard(30);
	content.innerHTML += AddCard(30);
	content.innerHTML += AddCard(30);
	
	return style + content.outerHTML;
}

function AddCard(width){
		
	return `
		<div class="card divLink" style=" flex: 1 1 clamp(200px, ${width}% , 100%); max-width:${width}%;">
			<div class="image"><div class="overlay"></div></div>
			<a class="text-subscript-bold">Title - Engine - Year</a>
			<a target="_blank" href="https://www.youtube.com" class="link"></a>
		</div>
`;	
}