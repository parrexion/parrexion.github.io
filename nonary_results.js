
var picsR = [];
var textR = [];
var mode;

function loadingScreen(gamemode,correct){
	var div,img;
	cleanUp2();
	mode = gamemode;
	div = document.getElementById("loading");
	img = document.createElement("img");
	img.setAttribute("src", "");
	div.appendChild(img);
	img.setAttribute("src", "images/ZE/loading.gif");
	// setTimeout(function() { showResults(correct) }, 2300);
	// cleanUp2();
	showResults(correct);
}

function showResults(correct){
	cleanUp3();
	loadResults();
	createResults(correct);
}

function createResults(correct){
	var res,obj;
	res = document.getElementById("endGame");
	res.appendChild(getImage(correct));
	res.appendChild(getText(correct));
	res.appendChild(retryButton());
}

function getImage(correct){
	var div,obj,res;
	div = document.createElement("div");
	div.setAttribute("id","pic");
	div.setAttribute("class","pic");
	res = document.createElement("img");
	res.setAttribute("src","images/ZE/results.png");
	res.setAttribute("class","ztd");
	div.appendChild(res);
	div.appendChild(document.createElement("br"));
	obj = document.createElement("img");
	obj.setAttribute("src", picsR[correct][1]);
	div.appendChild(obj);
	return div;
}

function getText(correct){
	var div,res;
	div = document.createElement("div");
	div.setAttribute("id","tex");
	div.setAttribute("class","tex");
	res = document.createElement("h1");
	res.innerHTML = correct + " correct answers!"
	div.appendChild(res);
	obj = document.createElement("p");
	obj.setAttribute("class","comments");
	obj.innerHTML = textR[correct][1];
	div.appendChild(obj);
	return div;
}

function retryButton(){
	var but, div;
	but = document.createElement("img");
	but.setAttribute("id","retryButton");
	but.setAttribute("class","retry");
	but.setAttribute("src","images/ZE/retry_but.png");
	but.setAttribute("onClick","retry()");
	div = document.createElement("div");
	div.appendChild(but);
	return div;
}

function loadResults() {
	var i, quest;

	picsR = [];
	textR = [];
	
	quest = 10;
	if (mode == 0)
		quest = 19;
	
	for (i=0;i<quest;i++) {
		 picsR[i] = [];
		 textR[i] = [];
	}
	
	if (mode != 0) {
		picsR[0][1] = "images/results/door-0.png";
		picsR[1][1] = "images/results/door-1.png";
		picsR[2][1] = "images/results/door-2.png";
		picsR[3][1] = "images/results/door-3.png";
		picsR[4][1] = "images/results/door-4.png";
		picsR[5][1] = "images/results/door-5.png";
		picsR[6][1] = "images/results/door-6.png";
		picsR[7][1] = "images/results/door-7.png";
		picsR[8][1] = "images/results/door-8.png";
		picsR[9][1] = "images/results/door-9.png";
		
		textR[0][1] = "I see..., you got 0 correct answers.<br>You really think I will fall for that, that you're not Zero? You could've atleast tried to make it look real.";
		textR[1][1] = "Wait...<br>Are you sure you've played this game series?<br>Or couldn't you handle the suspense in the game and therefore have supressed all of those memories?";
		textR[2][1] = "Well, at least you tried.<br>But you know what fate awaits you when you get through door 2. Please don't scream so much, okay?";
		textR[3][1] = "Oh, you're totally okay actually.<br>I guess I could let you handle the music without messing up too bad. Like pushing the wrong person through a door...";
		textR[4][1] = "Cool.<br>Looks like you're an average person with average score. And it's nice to not having to step up and take that other awful door.";
		textR[5][1] = "Above average!<br>Therefore, you're better than the average person (duh!). But you really didn't have to prove it by forcing yourself through that door. Unless you like those kinds of things which would be kind of wierd...";
		textR[6][1] = "Really good performance. Looks like you got a good grasp on this. Just be careful for this dangerous thing with 6 things in it. I hear that smart-asses gets the first one.";
		textR[7][1] = "Almost perfect!<br>Looks like you've been studying a lot for this. Like, reading and experimenting and stuff like that. But I hope you haven't practiced disecting people as well.";
		textR[8][1] = "Almost perfect.<br><br>Wait a minute!<br> How did you end up like this? Weren't you brave enough to put each song in only one location? It's things like this which get people behind bars and burned to death, you know.";
		textR[9][1] = "It's unbelievable!<br>Finally, the journey has come to an end. You've found the door with a 9. Does that mean that you're done with this quiz?<br><br>Yeah, right. I'm sure you know what awaits you on the other side of the door.<br><br>(It's another door, I mean the harder modes of this quiz.)";
	}
	
	if (mode == 0){
		
		picsR[0][1] = "images/results/door-0.png";
		picsR[1][1] = "images/results/door-1.png";
		picsR[2][1] = "images/results/door-2.png";
		picsR[3][1] = "images/results/door-3.png";
		picsR[4][1] = "images/results/door-4.png";
		picsR[5][1] = "images/results/door-5.png";
		picsR[6][1] = "images/results/door-6.png";
		picsR[7][1] = "images/results/door-7.png";
		picsR[8][1] = "images/results/door-8.png";
		picsR[9][1] = "images/results/door-9.png";
		picsR[10][1] = "images/results/door-10.png";
		picsR[11][1] = "images/results/door-1.png";
		picsR[12][1] = "images/results/door-2.png";
		picsR[13][1] = "images/results/door-3.png";
		picsR[14][1] = "images/results/door-4.png";
		picsR[15][1] = "images/results/door-5.png";
		picsR[16][1] = "images/results/door-6.png";
		picsR[17][1] = "images/results/door-7.png";
		picsR[18][1] = "images/results/door-8.png";
		
		textR[0][1] = "Uh oh!<br>Looks like you ended up with 0 points this time around. You should've been more careful as I can't see how anyone could get 0 points without getting betrayed. I guess it's good night for you now.";
		textR[1][1] = "That is pretty bad actually.<br>It's like having 3 BP and then getting betrayed by you're best friend and they are like,<br>' it's just business '";
		textR[2][1] = "Not good at all.<br>If you keep this up we're gonna have to wait until we get old before everyone would be able to escape from here. Unless someone sneaks out before that. I could actually see that happen, if you know what I mean";
		textR[3][1] = "It's like you didn't even try.<br>Usually you start out with 3 and are still here with 3 points. You don't think it's time to get some help from your friends so you can acquire some more points.";
		textR[4][1] = "That wasn't something to write home about.<br>I mean, if this was 9 questions you would've been right below average. But it isn't so you're just really bad at this. Maybe it's time to replay one of the games.";
		textR[5][1] = "Well, it's not awful.<br>Sure, there are a lot questions you answered wrong but you were also right in some cases. Now if you just could find some more people who can help you achieve higher points.";
		textR[6][1] = "I would call this mediocre.<br>You probably could've done better but at least you know how to get more points the fastest way. Just be careful to not ruin the experience for everyone else.";
		textR[7][1] = "Kinda so-so.<br>You're not that far away from getting up to average. And by the looks of it you've chosen the slow and steady road which shows how good of a person you really are. Let's just hope you'll be able to reach your goals.";
		textR[8][1] = "Almost there.<br>You're almost an average Zero Escape fan and not a loser anymore. The thing is that getting the last point is the hardest as the other losers won't let you graduate that easily.";
		textR[9][1] = "Just below average!<br>You actually got 9 points! Too bad it's not the maximum in this game. But be careful if you're going through the 9 door leaving people behind. They'll hate you for the rest of their life. Even though their life won't be that long...";
		textR[10][1] = "Barely made it!<br>You're now among the selected few who has managed to get above 9 points and the average score. You should really get something else to motivate you than the number 9 door, otherwise you won't play this quiz anymore.";
		textR[11][1] = "Good!<br>You got a score with two 1s in it. Does that mean that you're number 1 now? And twice to say the least. ...At least people can dream, right?";
		textR[12][1] = "That's totally fine.<br>You've actually been able to get this many points. Are you like a genius or have you just been practicing a lot? Either way good work.";
		textR[13][1] = "Great!<br>You managed to figure out most of this which means you're ready to hold your own Nonary game. But just to be sure you might want someone helping you with the music. Just be careful so you don't suffer from bad luck because of this, okay?";
		textR[14][1] = "Just wow!<br>You managed to get over 75% correct answers. Have you done this before? Maybe you're one of those fan-boys who create their own stories, pictures and other material. Maybe you should create a meme or something about this?";
		textR[15][1] = "Amazing!<br>You're not that far away from a perfect score. But please don't betray anyone just to get to a perfect score faster. Especially when you've put in a lot of effort to manage to answer this many questions correct. I feel that you're strong enough to resist the temptation.";
		textR[16][1] = "Almost perfect!<br>You now have only one pair left to switch to get a perfect score. You know else is 16? 4 squared (4^2). Have you seen that white cube? It's so cool. Or maybe you should call it Qte? Anyways, it's just the final room left now, you can do it as I'm sure you've done it twice before already.";
		textR[17][1] = "Almost perfect!<br><br>Wait a minute! How did you end up like this? Are you not brave enough to bet everything by using all the songs and locations only once? If you show weakness like that someone is going to betray you. I'm fairly certain. And we don't want that to happen, right?";
		textR[18][1] = "It's unbelievable!<br>At long last you've managed to amass 18 points which means that everyone should've gathered enough points to get out of here safely which means the Nonary Game is no more.<br><br>What to do now? As you've already managed to beat the hardest quiz there is only one thing to do:<br><br>Hype ZTD, tell the world about this and get ready for the ZTD quiz!<br><br>(Or you could play this quiz a bit more, just for fun)";
	}
}

function cleanUp2(){
	var div;
	div = document.getElementById("mainDiv");
	remove(div);
	div = document.getElementById("settingUp");
	div.setAttribute("class", "hidden");
}

function cleanUp3(){
	var div;
	div = document.getElementById("loading");
	remove(div);
}

function retry(){
	var div,obj,cont,formus;
	div = document.getElementById("endGame");
	remove(div);
	
	// div = document.getElementById("topHeader");
	// obj = document.createElement("h1");
	// obj.innerHTML = " The Nonary Game Quiz! ";
	// obj.setAttribute("id", "header");
	// div.appendChild(obj);
	
	div = document.getElementById("mainBody");
	obj = document.createElement("div");
	obj.setAttribute("id", "settingUp");
	div.appendChild(obj);
	
	obj = document.createElement("div");
	obj.setAttribute("id", "mainDiv");
	div.appendChild(obj);
	cont = document.createElement("div");
	cont.setAttribute("id", "div_sound");
	obj.appendChild(cont);
	
	cont = document.createElement("div");
	obj.appendChild(cont);
	formus = document.createElement("form");
	formus.setAttribute("id", "formus");
	cont.appendChild(formus);
	
	cont = document.createElement("div");
	cont.setAttribute("id", "results");
	obj.appendChild(cont);
	formus = document.createElement("h2");
	formus.setAttribute("id", "res");
	formus.setAttribute("class", "center");
	cont.appendChild(formus);
	formus = document.createElement("h2");
	formus.setAttribute("id", "nrCorrect");
	formus.setAttribute("class", "center");
	cont.appendChild(formus);
	formus = document.createElement("ul");
	formus.setAttribute("id", "errorlist");
	formus.setAttribute("class", "err");
	cont.appendChild(formus);
	
	obj = document.createElement("div");
	obj.setAttribute("id", "loading");
	obj.setAttribute("class", "loading");
	div.appendChild(obj);
	obj = document.createElement("div");
	obj.setAttribute("id", "endGame");
	obj.setAttribute("class", "endgame");
	div.appendChild(obj);
	
	init();
}
