
var games = ["Both 18  -  Very hard. Gives you 18 locations total from both games to match",
			"Both 9 - Not that hard. Gives you 9 locations total from both games to match.",
			"999 - Gives you 9 locations from 999 to match.  Definitely hard.",
			"VLR - Gives you 9 locations from VLR to match. It's kinda hard."];
var game = 0;

function init(){
	createOptions();
	createButtons("18_but",0);
	createButtons("9_but",1);
	createButtons("999_but",2);
	createButtons("VLR_but",3);
}

function createOptions(){
	var j,fore,list,div,p,img;
	fore = document.getElementById("settingUp");
	div = document.createElement("div");
	div.setAttribute("id","options");
	fore.appendChild(div);
	fore.setAttribute("class","");
	
	img = document.createElement("img");
	img.setAttribute("class","ztd");
	img.setAttribute("src","images/ZE/gamemodes.png");
	div.appendChild(img);
	
	list = document.createElement("ul");
	list.setAttribute("class","optlist");
	div.appendChild(list);
	
	for (j=0 ; j < 4 ; j++){
		p = document.createElement("li");
		p.setAttribute("id","opt" + j);
		p.setAttribute("class","opt");
		p.innerHTML = games[j] + ' ';
		list.appendChild(p);
	}
}

function startGame(index){
	game = index;
	cleanUp();
	gameInit(index);
}

function createButtons(name,index){
	
	var but, div;
	but = document.createElement("img");
	but.setAttribute("id","startGameButton");
	but.setAttribute("class","submit");
	but.setAttribute("src","images/ZE/" + name + ".png");
	but.setAttribute("onClick","startGame(" + index + ")");
	div = document.getElementById("options");
	div.appendChild(but);
}

function cleanUp(){
	var div;
	div = document.getElementById("options");
	remove(div);
}

function remove(node){
		node.parentNode.removeChild(node);
}

function empty(node){
	while (node.hasChildNodes()) {   
		remove(node.firstChild);
	}
}

window.onload = init;