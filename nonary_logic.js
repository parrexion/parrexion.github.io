	var results, corrects;
	var i,j;
	var musics = [];
	var numbers = [];
	var doors = [];
	var pics999 = [];
	var music999 = [];
	var picsVLR = [];
	var musicVLR = [];
	var gameMode = 0;
	var selected = [];
	var answers = [];
	var ending = "ogg";
	// var test = 9;

	function handleClick(sel, index){
		var error, list, last, value;
		error = document.getElementById("errorlist");
		error.innerHTML = "";
		value = sel.options[sel.selectedIndex].value;
		last = answers[index];
		if (last != ""){
			selected[last-1]--;
			if (selected[last-1] == 0) {
				list = document.getElementById("div-sound"+(last));
				list.setAttribute("class","floating-sound unanswered");
			}
		}
		
		if (value != ""){
			selected[value-1]++;
			list = document.getElementById("div-sound"+(value));
			list.setAttribute("class","floating-sound");
		}
		
		answers[index] = value;
			
		if (value == "") {
			list = document.getElementById("picture"+index);
			list.setAttribute("class","floating-box unanswered");
		}
		else {
			list = document.getElementById("picture"+index);
			list.setAttribute("class","floating-box");
		}
	}

	function verify(){
		var ok = true, error, list, filled, pics;
		error = document.getElementById("errorlist");
		error.innerHTML = "";
		
		filled = true;
		for (i in selected){
			if (selected[i] === 0){
				filled = false;
				i++;
				list = document.getElementById("div-sound"+i);
				list.setAttribute("class","floating-sound unanswered");
			}
			else {
				i++;
				list = document.getElementById("div-sound"+i);
				list.setAttribute("class","floating-sound");
			}
		}
		
		if (!filled){
			error.innerHTML += "You haven't used all the songs yet!<br>";
		}
		
		pics = true;
		for (i in answers){
			if (answers[i] == ""){
				ok = false;
				pics = false;
				list = document.getElementById("picture"+i);
				list.setAttribute("class","floating-box unanswered");
			}
		}
		if (!pics)
			error.innerHTML += "You haven't answered everything yet!";
		
		return ok;
	}
	
	function correct(index, ans){
		var x, y;
		x = musics[ans-1];
		y = numbers[index-1];
		if (x == y)
			return true;
		return false;
	}

	function submitAnswers(){
		var nrCorrect = 0;
		results = document.getElementById("res");
		results.innerHTML = "";
		if (!verify())
			return;
		for (i = 1; i < 10; i++) {
			results.innerHTML += answers[i] + " ";
			if(correct(i,answers[i])){
				nrCorrect++;
			}
		}
		corrects = document.getElementById("nrCorrect");
		corrects.innerHTML = "";
		corrects.innerHTML += "Correct answers: " + nrCorrect;
		loadingScreen(gameMode,nrCorrect);
		// loadingScreen(gameMode,test);
	}

	function gameInit(game){
		var div, p, quest, f, mus, use,img;
		gameMode = game;
		loading();
		
		if (gameMode == 0){
			answers = ["Answers: [","","","","","","","","","","","","","","","","","","", "]"];
			// answers = ["Answers: [","1","2","3","4","5","6","7","8","9","1","2","3","4","5","6","7","8","9", "]"];
			selected = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			// answers = ["Answers: [","1","2","3","4","5","6","7","8","9","1","2","3","4","5","6","7","8","9", "]"];
		}
		else {
			answers = ["Answers: [","","","","","","","","","", "]"];
			// answers = ["Answers: [","1","2","3","4","5","6","7","8","9", "]"];
			selected = [0,0,0,0,0,0,0,0,0];
		}
		musics = shuffle(musics);
		musics = musics.filter(Number);
		numbers = convert(musics);
		numbers = shuffle(numbers.filter(Number));
		musics = convert(musics);
		musics = musics.filter(Number);
		quest = numbers.length+1;
		f = document.getElementById("formus");
		mus = document.getElementById("div_sound");
	
		img = document.createElement("img");
		img.setAttribute("class","ztd");
		img.setAttribute("src","images/songs.png");
		mus.appendChild(img);
		mus.appendChild(document.createElement("br"));
		img = document.createElement("img");
		img.setAttribute("class","ztd");
		img.setAttribute("src","images/locations.png");
		f.appendChild(img);
		f.appendChild(document.createElement("br"));
		
		
		for (i=1 ; i < quest ; i++){
			div = createPicture(i, numbers[i-1], quest);
			f.appendChild(div);
			p = createMusic(i, musics[i-1]);
			mus.appendChild(p);
		}
		createSubmit();
	}
	
	function createSubmit(){
		var but, div;
		but = document.createElement("img");
		but.setAttribute("class","submit");
		but.setAttribute("src","images/submit_but.png");
		but.setAttribute("onClick","submitAnswers()");
		div = document.getElementById("results");
		div.appendChild(but);
	}

	function createMusic(index, i) {
		var node, pa, sound, div;
		div = document.createElement("div");
		div.setAttribute("id","div-sound"+index);
		div.setAttribute("class","floating-sound unanswered");
		if (index < 10)
			node = document.createTextNode(index + ' ');
		else 
			node = document.createTextNode(index);
		div.appendChild(node);
		sound = document.createElement("audio");
		sound.setAttribute("id","sound"+index);
		if (i < 0) {
			sound.setAttribute("src", musicVLR[-i]+ending);
		}
		else {
			sound.setAttribute("src", music999[i]+ending);
		}
		sound.controls = true;
		div.appendChild(sound);
		return div;
	}

	function createPicture(index, i, total) {
		var div = document.createElement("div");
		var ran = Math.floor((Math.random() * 6) + 1);
		var sel = document.createElement("select");
		var opt,j;
		
		sel.setAttribute("onchange","handleClick(this,"+index+");");
		sel.setAttribute("class","drop");
		opt = document.createElement("option");
		opt.setAttribute("value","");
		opt.text = "";
		sel.appendChild(opt);
			
		div.setAttribute("class","floating-box unanswered");
		div.setAttribute("id","picture"+index);
		doors[i] = document.createElement("img");
		doors[i].setAttribute("class","boxCont");
		
		if (i < 0) {
			doors[i].src = picsVLR[-i][ran];
		}
		else {
			doors[i].src = pics999[i][ran];
		}
		div.appendChild(doors[i]);
		div.appendChild(document.createElement("br"));
		
		for (j=1 ; j < total ; j++){
			opt = document.createElement("option");
			opt.setAttribute("value",j);
			opt.setAttribute("class","boxCont");
			opt.text = j;
			sel.appendChild(opt);
		}
		div.appendChild(sel);
		div.appendChild(document.createElement("br"));
		return div;
	}
	
	function loading(){
		loadPics();
		loadMusic();
	}

	function loadPics(){
		pics999 = [];
		musics = [];
		for (var i=1;i<25;i++) {
		     pics999[i] = [];
			 if (gameMode < 3)
				musics[i-1] = i;
		}
		pics999[1][1] = "images/999/intro1.png";
		pics999[1][2] = "images/999/intro2.png";
		pics999[1][3] = "images/999/intro3.png";
		pics999[1][4] = "images/999/intro1.png";
		pics999[1][5] = "images/999/intro2.png";
		pics999[1][6] = "images/999/intro3.png";
		pics999[2][1] = "images/999/room4-1.png";
		pics999[2][2] = "images/999/room5-1.png";
		pics999[2][3] = "images/999/room4-1.png";
		pics999[2][4] = "images/999/room5-1.png";
		pics999[2][5] = "images/999/room4-1.png";
		pics999[2][6] = "images/999/room5-1.png";
		pics999[3][1] = "images/999/room4-2.png";
		pics999[3][2] = "images/999/room5-2.png";
		pics999[3][3] = "images/999/room4-2.png";
		pics999[3][4] = "images/999/room5-2.png";
		pics999[3][5] = "images/999/room4-2.png";
		pics999[3][6] = "images/999/room5-2.png";
		pics999[4][1] = "images/999/room8-1.png";
		pics999[4][2] = "images/999/room8-1.png";
		pics999[4][3] = "images/999/room8-1.png";
		pics999[4][4] = "images/999/room8-2.png";
		pics999[4][5] = "images/999/room8-2.png";
		pics999[4][6] = "images/999/room8-2.png";
		pics999[5][1] = "images/999/room1-1.png";
		pics999[5][2] = "images/999/room2-1.png";
		pics999[5][3] = "images/999/room6-1.png";
		pics999[5][4] = "images/999/room1-1.png";
		pics999[5][5] = "images/999/room2-1.png";
		pics999[5][6] = "images/999/room6-1.png";
		pics999[6][1] = "images/999/room1-2.png";
		pics999[6][2] = "images/999/room2-2.png";
		pics999[6][3] = "images/999/room6-2.png";
		pics999[6][4] = "images/999/room1-2.png";
		pics999[6][5] = "images/999/room2-2.png";
		pics999[6][6] = "images/999/room6-2.png";
		pics999[7][1] = "images/999/room3.png";
		pics999[7][2] = "images/999/room7.png";
		pics999[7][3] = "images/999/room3.png";
		pics999[7][4] = "images/999/room7.png";
		pics999[7][5] = "images/999/room3.png";
		pics999[7][6] = "images/999/room7.png";
		pics999[8][1] = "images/999/room9-1.png";
		pics999[8][2] = "images/999/room9-1.png";
		pics999[8][3] = "images/999/room9-1.png";
		pics999[8][4] = "images/999/room9-1.png";
		pics999[8][5] = "images/999/room9-1.png";
		pics999[8][6] = "images/999/room9-1.png";
		pics999[9][1] = "images/999/room9-2.png";
		pics999[9][2] = "images/999/room9-2.png";
		pics999[9][3] = "images/999/room9-2.png";
		pics999[9][4] = "images/999/room9-2.png";
		pics999[9][5] = "images/999/room9-2.png";
		pics999[9][6] = "images/999/room9-2.png";
		pics999[10][1] = "images/999/unary.png";
		pics999[10][2] = "images/999/unary2.png";
		pics999[10][3] = "images/999/unary3.png";
		pics999[10][4] = "images/999/unary5.png";
		pics999[10][5] = "images/999/unary6.png";
		pics999[10][6] = "images/999/unary8.png";
		pics999[11][1] = "images/999/9years.png";
		pics999[11][2] = "images/999/9years.png";
		pics999[11][3] = "images/999/9years2.png";
		pics999[11][4] = "images/999/9years3.png";
		pics999[11][5] = "images/999/9years4.png";
		pics999[11][6] = "images/999/9years5.png";
		pics999[12][1] = "images/999/chill.png";
		pics999[12][2] = "images/999/chill.png";
		pics999[12][3] = "images/999/chill2.png";
		pics999[12][4] = "images/999/chill3.png";
		pics999[12][5] = "images/999/chill4.png";
		pics999[12][6] = "images/999/chill5.png";
		pics999[13][1] = "images/999/digital.png";
		pics999[13][2] = "images/999/digital3.png";
		pics999[13][3] = "images/999/digital5.png";
		pics999[13][4] = "images/999/digital6.png";
		pics999[13][5] = "images/999/digital8.png";
		pics999[13][6] = "images/999/digital10.png";
		pics999[14][1] = "images/999/eternity.png";
		pics999[14][2] = "images/999/eternity2.png";
		pics999[14][3] = "images/999/eternity3.png";
		pics999[14][4] = "images/999/eternity5.png";
		pics999[14][5] = "images/999/eternity6.png";
		pics999[14][6] = "images/999/eternity7.png";
		pics999[15][1] = "images/999/ext.png";
		pics999[15][2] = "images/999/ext2.png";
		pics999[15][3] = "images/999/ext3.png";
		pics999[15][4] = "images/999/ext4.png";
		pics999[15][5] = "images/999/ext5.png";
		pics999[15][6] = "images/999/ext6.png";
		pics999[16][1] = "images/999/forebode.png";
		pics999[16][2] = "images/999/forebode2.png";
		pics999[16][3] = "images/999/forebode3.png";
		pics999[16][4] = "images/999/forebode4.png";
		pics999[16][5] = "images/999/forebode5.png";
		pics999[16][6] = "images/999/forebode6.png";
		pics999[17][1] = "images/999/imagine.png";
		pics999[17][2] = "images/999/imagine2.png";
		pics999[17][3] = "images/999/imagine3.png";
		pics999[17][4] = "images/999/imagine3.png";
		pics999[17][5] = "images/999/imagine4.png";
		pics999[17][6] = "images/999/imagine5.png";
		pics999[18][1] = "images/999/morph.png";
		pics999[18][2] = "images/999/morph3.png";
		pics999[18][3] = "images/999/morph5.png";
		pics999[18][4] = "images/999/morph7.png";
		pics999[18][5] = "images/999/morph8.png";
		pics999[18][6] = "images/999/morph9.png";
		pics999[19][1] = "images/999/quiet.png";
		pics999[19][2] = "images/999/quiet.png";
		pics999[19][3] = "images/999/quiet.png";
		pics999[19][4] = "images/999/quiet2.png";
		pics999[19][5] = "images/999/quiet2.png";
		pics999[19][6] = "images/999/quiet2.png";
		pics999[20][1] = "images/999/riddle.png";
		pics999[20][2] = "images/999/riddle.png";
		pics999[20][3] = "images/999/riddle.png";
		pics999[20][4] = "images/999/riddle2.png";
		pics999[20][5] = "images/999/riddle2.png";
		pics999[20][6] = "images/999/riddle2.png";
		pics999[21][1] = "images/999/tinder.png";
		pics999[21][2] = "images/999/tinder3.png";
		pics999[21][3] = "images/999/tinder4.png";
		pics999[21][4] = "images/999/tinder5.png";
		pics999[21][5] = "images/999/tinder6.png";
		pics999[21][6] = "images/999/tinder7.png";
		pics999[22][1] = "images/999/trepid.png";
		pics999[22][2] = "images/999/trepid2.png";
		pics999[22][3] = "images/999/trepid3.png";
		pics999[22][4] = "images/999/trepid6.png";
		pics999[22][5] = "images/999/trepid8.png";
		pics999[22][6] = "images/999/trepid11.png";
		pics999[23][1] = "images/999/who2.png";
		pics999[23][2] = "images/999/who4.png";
		pics999[23][3] = "images/999/who5.png";
		pics999[23][4] = "images/999/who6.png";
		pics999[23][5] = "images/999/who7.png";
		pics999[23][6] = "images/999/who8.png";
		pics999[24][1] = "images/999/recollect.png";
		pics999[24][2] = "images/999/recollect.png";
		pics999[24][3] = "images/999/recollect2.png";
		pics999[24][4] = "images/999/recollect3.png";
		pics999[24][5] = "images/999/recollect4.png";
		pics999[24][6] = "images/999/recollect5.png";
		
		
		picsVLR = [];
		var length = musics.length-1;
		for (var i=1;i<18;i++) {
		     picsVLR[i] = [];
			 if (gameMode % 2 == 1 || gameMode == 0)
				musics[i+length] = -i;
		}
		picsVLR[1][1] = "images/VLR/elev1.jpg";
		picsVLR[1][2] = "images/VLR/elev2.png";
		picsVLR[1][3] = "images/VLR/elev1.jpg";
		picsVLR[1][4] = "images/VLR/elev2.png";
		picsVLR[1][5] = "images/VLR/elev1.jpg";
		picsVLR[1][6] = "images/VLR/elev2.png";
		picsVLR[2][1] = "images/VLR/lounge1.jpg";
		picsVLR[2][2] = "images/VLR/lounge2.jpg";
		picsVLR[2][3] = "images/VLR/lounge1.jpg";
		picsVLR[2][4] = "images/VLR/lounge2.jpg";
		picsVLR[2][5] = "images/VLR/lounge1.jpg";
		picsVLR[2][6] = "images/VLR/lounge2.jpg";
		picsVLR[3][1] = "images/VLR/infirm1.jpg";
		picsVLR[3][2] = "images/VLR/infirm2.jpg";
		picsVLR[3][3] = "images/VLR/infirm1.jpg";
		picsVLR[3][4] = "images/VLR/infirm2.jpg";
		picsVLR[3][5] = "images/VLR/infirm1.jpg";
		picsVLR[3][6] = "images/VLR/infirm2.jpg";
		picsVLR[4][1] = "images/VLR/crew1.jpg";
		picsVLR[4][2] = "images/VLR/crew2.jpg";
		picsVLR[4][3] = "images/VLR/crew1.jpg";
		picsVLR[4][4] = "images/VLR/crew2.jpg";
		picsVLR[4][5] = "images/VLR/crew1.jpg";
		picsVLR[4][6] = "images/VLR/crew2.jpg";
		picsVLR[5][1] = "images/VLR/gaulem1.jpg";
		picsVLR[5][2] = "images/VLR/gaulem2.jpg";
		picsVLR[5][3] = "images/VLR/gaulem1.jpg";
		picsVLR[5][4] = "images/VLR/gaulem2.jpg";
		picsVLR[5][5] = "images/VLR/gaulem1.jpg";
		picsVLR[5][6] = "images/VLR/gaulem2.jpg";
		picsVLR[6][1] = "images/VLR/treat1.jpg";
		picsVLR[6][2] = "images/VLR/treat2.jpg";
		picsVLR[6][3] = "images/VLR/treat1.jpg";
		picsVLR[6][4] = "images/VLR/treat2.jpg";
		picsVLR[6][5] = "images/VLR/treat1.jpg";
		picsVLR[6][6] = "images/VLR/treat2.jpg";
		picsVLR[7][1] = "images/VLR/lab1.jpg";
		picsVLR[7][2] = "images/VLR/lab2.jpg";
		picsVLR[7][3] = "images/VLR/lab1.jpg";
		picsVLR[7][4] = "images/VLR/lab2.jpg";
		picsVLR[7][5] = "images/VLR/lab1.jpg";
		picsVLR[7][6] = "images/VLR/lab2.jpg";
		picsVLR[8][1] = "images/VLR/pantry1.jpg";
		picsVLR[8][2] = "images/VLR/pantry2.jpg";
		picsVLR[8][3] = "images/VLR/pantry1.jpg";
		picsVLR[8][4] = "images/VLR/pantry2.jpg";
		picsVLR[8][5] = "images/VLR/pantry1.jpg";
		picsVLR[8][6] = "images/VLR/pantry2.jpg";
		picsVLR[9][1] = "images/VLR/rec1.jpg";
		picsVLR[9][2] = "images/VLR/rec2.jpg";
		picsVLR[9][3] = "images/VLR/rec1.jpg";
		picsVLR[9][4] = "images/VLR/rec2.jpg";
		picsVLR[9][5] = "images/VLR/rec1.jpg";
		picsVLR[9][6] = "images/VLR/rec2.jpg";
		picsVLR[10][1] = "images/VLR/pec1.jpg";
		picsVLR[10][2] = "images/VLR/pec2.jpg";
		picsVLR[10][3] = "images/VLR/pec1.jpg";
		picsVLR[10][4] = "images/VLR/pec2.jpg";
		picsVLR[10][5] = "images/VLR/pec1.jpg";
		picsVLR[10][6] = "images/VLR/pec2.jpg";
		picsVLR[11][1] = "images/VLR/garden1.jpg";
		picsVLR[11][2] = "images/VLR/garden2.jpg";
		picsVLR[11][3] = "images/VLR/garden1.jpg";
		picsVLR[11][4] = "images/VLR/garden2.jpg";
		picsVLR[11][5] = "images/VLR/garden1.jpg";
		picsVLR[11][6] = "images/VLR/garden2.jpg";
		picsVLR[12][1] = "images/VLR/arch1.jpg";
		picsVLR[12][2] = "images/VLR/arch2.jpg";
		picsVLR[12][3] = "images/VLR/arch1.jpg";
		picsVLR[12][4] = "images/VLR/arch2.jpg";
		picsVLR[12][5] = "images/VLR/arch1.jpg";
		picsVLR[12][6] = "images/VLR/arch2.jpg";
		picsVLR[13][1] = "images/VLR/control1.jpg";
		picsVLR[13][2] = "images/VLR/control2.jpg";
		picsVLR[13][3] = "images/VLR/control1.jpg";
		picsVLR[13][4] = "images/VLR/control2.jpg";
		picsVLR[13][5] = "images/VLR/control1.jpg";
		picsVLR[13][6] = "images/VLR/control2.jpg";
		picsVLR[14][1] = "images/VLR/security1.jpg";
		picsVLR[14][2] = "images/VLR/security2.jpg";
		picsVLR[14][3] = "images/VLR/security1.jpg";
		picsVLR[14][4] = "images/VLR/security2.jpg";
		picsVLR[14][5] = "images/VLR/security1.jpg";
		picsVLR[14][6] = "images/VLR/security2.jpg";
		picsVLR[15][1] = "images/VLR/director1.jpg";
		picsVLR[15][2] = "images/VLR/director2.jpg";
		picsVLR[15][3] = "images/VLR/director1.jpg";
		picsVLR[15][4] = "images/VLR/director2.jpg";
		picsVLR[15][5] = "images/VLR/director1.jpg";
		picsVLR[15][6] = "images/VLR/director2.jpg";
		picsVLR[16][1] = "images/VLR/q1.jpg";
		picsVLR[16][2] = "images/VLR/q2.jpg";
		picsVLR[16][3] = "images/VLR/q1.jpg";
		picsVLR[16][4] = "images/VLR/q2.jpg";
		picsVLR[16][5] = "images/VLR/q1.jpg";
		picsVLR[16][6] = "images/VLR/q2.jpg";
		picsVLR[17][1] = "images/VLR/intro1.jpg";
		picsVLR[17][2] = "images/VLR/intro2.jpg";
		picsVLR[17][3] = "images/VLR/intro5.jpg";
		picsVLR[17][4] = "images/VLR/intro4.jpg";
		picsVLR[17][5] = "images/VLR/intro5.jpg";
		picsVLR[17][6] = "images/VLR/intro6.jpg";
		
	}

	function checkBrowser(){
		isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		// Firefox 1.0+
		isFirefox = typeof InstallTrigger !== 'undefined';
		// At least Safari 3+: "[object HTMLElementConstructor]"
		isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
		// Internet Explorer 6-11
		isIE = /*@cc_on!@*/false || !!document.documentMode;
		// Edge 20+
		isEdge = !isIE && !!window.StyleMedia;
		// Chrome 1+
		isChrome = !!window.chrome && !!window.chrome.webstore;
		// Blink engine detection
		isBlink = (isChrome || isOpera) && !!window.CSS;
		
		if (isOpera || isFirefox || isChrome)
			ending = "ogg";
		else if (isIE || isSafari)
			ending = "mp3";
	}
	
	function loadMusic(){
		music999 = [];
		music999[1] = "audio/999/9hours.";
		music999[2] = "audio/999/Binary.";
		music999[3] = "audio/999/Ternary.";
		music999[4] = "audio/999/Quaternary.";
		music999[5] = "audio/999/Quinary.";
		music999[6] = "audio/999/Senary.";
		music999[7] = "audio/999/Septenary.";
		music999[8] = "audio/999/Octal.";
		music999[9] = "audio/999/Nonary.";
		music999[10] = "audio/999/Unary.";
		music999[11] = "audio/999/9Years.";
		music999[12] = "audio/999/Chill.";
		music999[13] = "audio/999/Digital.";
		music999[14] = "audio/999/Eternity.";
		music999[15] = "audio/999/Extrication.";
		music999[16] = "audio/999/Foreboding.";
		music999[17] = "audio/999/Imaginary.";
		music999[18] = "audio/999/Morphogenetic.";
		music999[19] = "audio/999/Quietus.";
		music999[20] = "audio/999/Riddle.";
		music999[21] = "audio/999/Tinderbox.";
		music999[22] = "audio/999/Trepidation.";
		music999[23] = "audio/999/Who.";
		music999[24] = "audio/999/Recollection.";
		
		musicVLR = [];
		musicVLR[1] = "audio/VLR/Ambidex.";
		musicVLR[2] = "audio/VLR/Lounge.";
		musicVLR[3] = "audio/VLR/Dispensary.";
		musicVLR[4] = "audio/VLR/Cabin.";
		musicVLR[5] = "audio/VLR/Gaulem.";
		musicVLR[6] = "audio/VLR/Treatment.";
		musicVLR[7] = "audio/VLR/Biology.";
		musicVLR[8] = "audio/VLR/Pantry.";
		musicVLR[9] = "audio/VLR/Recreation.";
		musicVLR[10] = "audio/VLR/Decompression.";
		musicVLR[11] = "audio/VLR/Biotope.";
		musicVLR[12] = "audio/VLR/Data.";
		musicVLR[13] = "audio/VLR/Annihilation.";
		musicVLR[14] = "audio/VLR/Monitor.";
		musicVLR[15] = "audio/VLR/Director.";
		musicVLR[16] = "audio/VLR/Q.";
		musicVLR[17] = "audio/VLR/Virtue.";
	}

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		}

		return array;
	}
	
	function convert(array){
		var array2 = [];
		var j = 9;
		if (gameMode == 0 )
			j = 18;
		arrayr = array.filter(Number);
		
		for (i in arrayr) {
			array2[j] = arrayr[i];
			j--;
			if (j <= 0)
				break;
		}
		return array2;
	}
	
	
	