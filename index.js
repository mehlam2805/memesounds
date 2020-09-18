// ADDING INTERNATIONAL MEME SOUNDS

var totalButtons = document.querySelectorAll(".memebuttons").length;

for (var i = 0; i <=totalButtons; i++){
	document.querySelectorAll(".memebuttons")[i].addEventListener("click",function(){
		var className = this.classList[1];
		buttonClick(className);
	
	});

}

function buttonClick(className){
		switch(className){
			case "comedyme":
				var comedyme = new Audio("./meme-sounds/comedy-me.mp3");
				comedyme.play();
			break;
			case "omgwow":
				var omgwow = new Audio("./meme-sounds/omg-wow.mp3");
				omgwow.play();
			break;
			case "okay":
				var okay = new Audio("./meme-sounds/okay.mp3");
				okay.play();
			break;
			case "noice":
				var noice = new Audio("./meme-sounds/noice.mp3");
				noice.play();
			break;
			case "yeahboy":
				var yeahboy = new Audio("./meme-sounds/yeahboy.mp3");
				yeahboy.play();
			break;
			case "goddamn-right":
				var goddamn = new Audio("./meme-sounds/goddamn-right.mp3");
				goddamn.play();
			break;
			case "nagarpalika":
				var nagarpalika = new Audio("./meme-sounds/nagarpalika.mp3");
				nagarpalika.play();
			break;
			case "nahi":
				var nahi = new Audio("./meme-sounds/nahi.mp3");
				nahi.play();
			break;
			case "nikal-lawde":
				var lawde = new Audio("./meme-sounds/nikal-lawde.mp3");
				lawde.play();
			break;
			case "ruko-zara":
				var ruko = new Audio("./meme-sounds/ruko-zara.mp3");
				ruko.play();
			default: console.log(className);

		}
}