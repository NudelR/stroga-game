(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Stroga Game_Test _ Kopie_atlas_1", frames: [[0,0,250,250],[0,252,250,250],[252,0,250,250],[252,406,67,50],[373,406,30,30],[321,406,50,50],[252,334,70,70],[252,252,80,80],[324,334,70,70],[334,252,60,60]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.GameOverscreen = function() {
	this.initialize(img.GameOverscreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3334,1875);


(lib.gras1 = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gras2 = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gras3 = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.obstacle_1 = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pasta = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.player = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.premiumpasta = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Schild = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Startscreen = function() {
	this.initialize(img.Startscreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3334,1875);


(lib.waste = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Wolken = function() {
	this.initialize(ss["Stroga Game_Test _ Kopie_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.StartScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Startscreen();
	this.instance.setTransform(0,0,0.2399,0.2399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StartScreen, new cjs.Rectangle(0,0,799.9,449.9), null);


(lib.Sign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Schild();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sign, new cjs.Rectangle(0,0,80,80), null);


(lib.PremiumPasta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.premiumpasta();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PremiumPasta, new cjs.Rectangle(0,0,70,70), null);


(lib.PlayerImage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.player();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PlayerImage, new cjs.Rectangle(0,0,50,50), null);


(lib.PastaImage1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.pasta();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PastaImage1, new cjs.Rectangle(0,0,30,30), null);


(lib.Obstacle2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.waste();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Obstacle2, new cjs.Rectangle(0,0,70,70), null);


(lib.obstacle1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.obstacle_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.obstacle1, new cjs.Rectangle(0,0,67,50), null);


(lib.GrassMove5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.gras2();
	this.instance.setTransform(0,0,0.16,0.16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GrassMove5, new cjs.Rectangle(0,0,40,40), null);


(lib.GrassMove4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.gras2();
	this.instance.setTransform(0,0,0.16,0.16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GrassMove4, new cjs.Rectangle(0,0,40,40), null);


(lib.GrassMove3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.gras3();
	this.instance.setTransform(0,0,0.112,0.112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GrassMove3, new cjs.Rectangle(0,0,28,28), null);


(lib.GrassMove2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.gras3();
	this.instance.setTransform(0,0,0.112,0.112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GrassMove2, new cjs.Rectangle(0,0,28,28), null);


(lib.GrassMove1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.gras1();
	this.instance.setTransform(0,0,0.224,0.224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GrassMove1, new cjs.Rectangle(0,0,56,56), null);


(lib.gameOverScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.highscoreText = new cjs.Text("Top 3:", "bold 20px 'NimbusSanNovCon'");
	this.highscoreText.name = "highscoreText";
	this.highscoreText.textAlign = "center";
	this.highscoreText.lineHeight = 25;
	this.highscoreText.lineWidth = 488;
	this.highscoreText.parent = this;
	this.highscoreText.setTransform(0,297.7);

	this.finalScoreText = new cjs.Text("Score: 0", "italic 35px 'NimbusSanNov'");
	this.finalScoreText.name = "finalScoreText";
	this.finalScoreText.textAlign = "center";
	this.finalScoreText.lineHeight = 42;
	this.finalScoreText.lineWidth = 488;
	this.finalScoreText.parent = this;
	this.finalScoreText.setTransform(0,239.75);

	this.text = new cjs.Text("GAME OVER", "bold 28px 'NimbusSanNov'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 488;
	this.text.parent = this;
	this.text.setTransform(0,191.3);

	this.instance = new lib.GameOverscreen();
	this.instance.setTransform(-681,-89,0.4083,0.4083);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.finalScoreText},{t:this.highscoreText}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameOverScreen, new cjs.Rectangle(-681,-89,1361.2,765.5), null);


(lib.Cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Wolken();
	this.instance.setTransform(0,0,2.1667,2.1667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud, new cjs.Rectangle(0,0,130,130), null);


// stage content:
(lib.StrogaGame_TestKopie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var stageRef = this;
		
		// ===== GAME STATE =====
		let gameStarted = false;
		let isGameOver = false;
		
		// 👉 NEU: prüfen ob Spiel schon lief
		if (sessionStorage.getItem("played") === "true") {
		    gameStarted = true;
		}
		
		// ===== SUPABASE =====
		const supabaseUrl = "https://hohluulorqiawwvcrpcs.supabase.co";
		const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvaGx1dWxvcnFpYXd3dmNycGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5OTQwODYsImV4cCI6MjA4OTU3MDA4Nn0.c76k-mTwqTEd2dqgp_lrhLTSfQCbzzuYm7o00upva7g";
		
		let supabaseClient = window.supabase
		    ? window.supabase.createClient(supabaseUrl, supabaseKey)
		    : null;
		
		// ===== SETUP =====
		createjs.Ticker.framerate = 30;
		createjs.Ticker.addEventListener("tick", update);
		
		let velocityY = 0;
		let gravity = 1.2;
		let isJumping = false;
		let scoreValue = 0;
		
		let groundY = 300;
		let gameSpeed = 5;
		
		// ===== INIT SCREENS =====
		if (stageRef.gameOverScreen) {
		    stageRef.gameOverScreen.visible = false;
		}
		
		// 👉 Startscreen direkt ausblenden wenn schon gespielt
		if (gameStarted && stageRef.startScreen) {
		    stageRef.startScreen.visible = false;
		}
		
		// ===== INPUT =====
		this.stage.on("stagemousedown", function() {
		
		    // Startscreen (nur beim allerersten Start)
		    if (!gameStarted) {
		        gameStarted = true;
		
		        // 👉 merken dass gespielt wurde
		        sessionStorage.setItem("played", "true");
		
		        if (stageRef.startScreen) {
		            stageRef.startScreen.visible = false;
		        }
		        return;
		    }
		
		    // Restart bei Game Over → direkt reload ohne Startscreen
		    if (isGameOver) {
		        location.reload();
		        return;
		    }
		
		    // Springen
		    if (!isJumping) {
		        velocityY = -22;
		        isJumping = true;
		    }
		});
		
		// ===== UPDATE =====
		function update() {
		
		    if (!gameStarted || isGameOver) return;
		
		    velocityY += gravity;
		    stageRef.player.y += velocityY;
		
		    if (stageRef.player.y >= groundY) {
		        stageRef.player.y = groundY;
		        velocityY = 0;
		        isJumping = false;
		    }
		
		    gameSpeed += 0.002;
		
		    moveObject(stageRef.sign1, 0.6, 800, 400);
		
		    moveObject(stageRef.grass1, 0.6, 800, 400);
		    moveObject(stageRef.grass2, 0.6, 800, 400);
		    moveObject(stageRef.grass3, 0.6, 800, 400);
		    moveObject(stageRef.grass4, 0.6, 800, 400);
		    moveObject(stageRef.grass5, 0.6, 800, 400);
		
		    moveObject(stageRef.cloud1, 0.2, 800, 300, true);
		    moveObject(stageRef.cloud2, 0.3, 800, 300, true);
		    moveObject(stageRef.cloud3, 0.4, 800, 300, true);
		
		    moveObject(stageRef.obstacle, 1, 900, 200);
		    moveObject(stageRef.obstacle2, 1.1, 1000, 300);
		
		    movePasta(stageRef.pasta1);
		    movePasta(stageRef.pasta2);
		    movePasta(stageRef.pasta3);
		    movePasta(stageRef.pastaPremium);
		
		    glow(stageRef.pasta1);
		    glow(stageRef.pasta2);
		    glow(stageRef.pasta3);
		
		    if (stageRef.pastaPremium && !stageRef.pastaPremium.collected) {
		        let pulse = 1 + Math.sin(Date.now() * 0.005) * 0.1;
		        stageRef.pastaPremium.scaleX = pulse;
		        stageRef.pastaPremium.scaleY = pulse;
		    }
		
		    checkPasta(stageRef.pasta1, 1);
		    checkPasta(stageRef.pasta2, 1);
		    checkPasta(stageRef.pasta3, 1);
		    checkPasta(stageRef.pastaPremium, 3);
		
		    stageRef.scoreText.text = "Score: " + scoreValue;
		
		    if (hit(stageRef.obstacle) || hit(stageRef.obstacle2)) {
		        triggerGameOver();
		    }
		}
		
		// ===== MOVE =====
		function moveObject(obj, speedMult, spawnX, range, randomY = false) {
		    if (!obj) return;
		
		    obj.x -= gameSpeed * speedMult;
		
		    if (obj.x < -100) {
		        obj.x = spawnX + Math.random() * range;
		
		        if (randomY) {
		            obj.y = 50 + Math.random() * 100;
		        }
		    }
		}
		
		// ===== GLOW =====
		function glow(pasta) {
		    if (!pasta || pasta.collected) return;
		    pasta.alpha = 0.8 + Math.sin(Date.now() * 0.01) * 0.2;
		}
		
		// ===== PASTA =====
		function movePasta(pasta) {
		    if (!pasta) return;
		
		    pasta.x -= gameSpeed;
		
		    if (pasta.x < -50) {
		        pasta.x = 800 + Math.random() * 200;
		        pasta.y = 250 + Math.random() * 80;
		
		        pasta.scaleX = 1;
		        pasta.scaleY = 1;
		        pasta.alpha = 1;
		        pasta.collected = false;
		    }
		}
		
		function checkPasta(pasta, points = 1) {
		
		    if (!pasta || pasta.collected) return;
		
		    if (
		        Math.abs(stageRef.player.x - pasta.x) < 50 &&
		        Math.abs(stageRef.player.y - pasta.y) < 50
		    ) {
		        scoreValue += points;
		        pasta.collected = true;
		
		        pasta.scaleX = 1.5;
		        pasta.scaleY = 1.5;
		        pasta.alpha = 0.5;
		
		        setTimeout(function() {
		            pasta.x = 900;
		            pasta.scaleX = 1;
		            pasta.scaleY = 1;
		            pasta.alpha = 1;
		            pasta.collected = false;
		        }, 150);
		    }
		}
		
		// ===== HIT =====
		function hit(obj) {
		    if (!obj) return false;
		
		    return (
		        Math.abs(stageRef.player.x - obj.x) < 50 &&
		        Math.abs(stageRef.player.y - obj.y) < 30
		    );
		}
		
		// ===== HIGHSCORES =====
		async function loadHighscores() {
		
		    if (!supabaseClient) return;
		
		    const { data } = await supabaseClient
		        .from("scores")
		        .select("name, score")
		        .order("score", { ascending: false })
		        .limit(3);
		
		    let text = "Top 3:\n";
		
		    for (let i = 0; i < 3; i++) {
		        if (data && data[i]) {
		            text += (i + 1) + ". " + data[i].name + " - " + data[i].score;
		        } else {
		            text += (i + 1) + ". ---";
		        }
		        if (i < 2) text += "\n";
		    }
		
		    if (stageRef.gameOverScreen && stageRef.gameOverScreen.highscoreText) {
		        stageRef.gameOverScreen.highscoreText.text = text;
		    }
		}
		
		// ===== SAVE SCORE =====
		async function saveScore(playerName, scoreValue, email = null) {
		    if (!supabaseClient) return;
		
		    await supabaseClient.from("scores").insert([
		        { name: playerName, score: scoreValue, email: email }
		    ]);
		}
		
		// ===== GAME OVER =====
		function triggerGameOver() {
		
		    if (isGameOver) return;
		    isGameOver = true;
		
		    if (stageRef.gameOverScreen) {
		        stageRef.gameOverScreen.visible = true;
		
		        if (stageRef.gameOverScreen.finalScoreText) {
		            stageRef.gameOverScreen.finalScoreText.text = "Score: " + scoreValue;
		        }
		    }
		
		    loadHighscores();
		
		    setTimeout(function() {
		
		        let playerName = prompt("Dein Name:");
		        if (!playerName) return;
		
		        let email = prompt("E-Mail (optional):");
		
		        saveScore(playerName, scoreValue, email);
		
		    }, 300);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// player
	this.gameOverScreen = new lib.gameOverScreen();
	this.gameOverScreen.name = "gameOverScreen";
	this.gameOverScreen.setTransform(576.1,282.3,0.589,0.589,0,0,0,300.2,388.6);

	this.startScreen = new lib.StartScreen();
	this.startScreen.name = "startScreen";
	this.startScreen.setTransform(399.9,225.9,1,1,0,0,0,399.9,224.9);

	this.player = new lib.PlayerImage();
	this.player.name = "player";
	this.player.setTransform(168.5,318.5,1,1,0,0,180,18.5,18.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA+lAHlMh9JAAAIAAvJ");
	this.shape.setTransform(399.4625,402.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.player},{t:this.startScreen},{t:this.gameOverScreen}]}).wait(1));

	// obstacle
	this.obstacle = new lib.obstacle1();
	this.obstacle.name = "obstacle";
	this.obstacle.setTransform(817.85,319.75,1.67,1.67,0,0,0,17.8,17.8);

	this.timeline.addTween(cjs.Tween.get(this.obstacle).wait(1));

	// Score__0
	this.scoreText = new cjs.Text("Score: 0", "bold 26px 'NimbusSanNov'");
	this.scoreText.name = "scoreText";
	this.scoreText.lineHeight = 33;
	this.scoreText.lineWidth = 182;
	this.scoreText.parent = this;
	this.scoreText.setTransform(25,20.3);

	this.timeline.addTween(cjs.Tween.get(this.scoreText).wait(1));

	// pasta
	this.pasta3 = new lib.PastaImage1();
	this.pasta3.name = "pasta3";
	this.pasta3.setTransform(930.5,293.7,1,1,0,0,0,18.5,18.5);

	this.pasta2 = new lib.PastaImage1();
	this.pasta2.name = "pasta2";
	this.pasta2.setTransform(768.5,225.1,1,1,0,0,0,18.5,18.5);

	this.pasta1 = new lib.PastaImage1();
	this.pasta1.name = "pasta1";
	this.pasta1.setTransform(618.5,318.5,1,1,0,0,0,18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pasta1},{t:this.pasta2},{t:this.pasta3}]}).wait(1));

	// Ebene_1
	this.grass5 = new lib.GrassMove5();
	this.grass5.name = "grass5";
	this.grass5.setTransform(1220,420,1,1,0,0,0,20,20);

	this.grass4 = new lib.GrassMove4();
	this.grass4.name = "grass4";
	this.grass4.setTransform(1020,310,1,1,0,0,0,20,20);

	this.grass3 = new lib.GrassMove3();
	this.grass3.name = "grass3";
	this.grass3.setTransform(914,364,1,1,0,0,0,14,14);

	this.grass2 = new lib.GrassMove2();
	this.grass2.name = "grass2";
	this.grass2.setTransform(1314,380,1,1,0,0,0,14,14);

	this.grass1 = new lib.GrassMove1();
	this.grass1.name = "grass1";
	this.grass1.setTransform(828,302,1,1,0,0,0,28,28);

	this.pastaPremium = new lib.PremiumPasta();
	this.pastaPremium.name = "pastaPremium";
	this.pastaPremium.setTransform(1842.9,241.6,1,1,0,0,0,35,35);

	this.obstacle2 = new lib.Obstacle2();
	this.obstacle2.name = "obstacle2";
	this.obstacle2.setTransform(1608.5,326,1.3829,1.3829,0,0,0,35,35);

	this.cloud1 = new lib.Cloud();
	this.cloud1.name = "cloud1";
	this.cloud1.setTransform(936.65,83.3,1.5192,1.5192,0,0,0,65,65);

	this.cloud3 = new lib.Cloud();
	this.cloud3.name = "cloud3";
	this.cloud3.setTransform(612.9,138.5,0.5385,0.5385,0,0,0,65.1,65.1);

	this.cloud2 = new lib.Cloud();
	this.cloud2.name = "cloud2";
	this.cloud2.setTransform(252,99.7,1,1,0,0,0,65,65);

	this.sign1 = new lib.Sign();
	this.sign1.name = "sign1";
	this.sign1.setTransform(1143.05,290,1,1,0,0,0,40,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC33").s().p("Eg+fAKKIAA0TMB8/AAAIAAUTg");
	this.shape_1.setTransform(400,386);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.sign1},{t:this.cloud2},{t:this.cloud3},{t:this.cloud1},{t:this.obstacle2},{t:this.pastaPremium},{t:this.grass1},{t:this.grass2},{t:this.grass3},{t:this.grass4},{t:this.grass5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(398,209.6,1479.9,242.4);
// library properties:
lib.properties = {
	id: '17EB1DA2CECC234DA8D91937EA18CA9D',
	width: 800,
	height: 450,
	fps: 30,
	color: "#99CCFF",
	opacity: 1.00,
	manifest: [
		{src:"images/GameOverscreen.png?1777366634878", id:"GameOverscreen"},
		{src:"images/Startscreen.png?1777366634878", id:"Startscreen"},
		{src:"images/Stroga Game_Test _ Kopie_atlas_1.png?1777366633156", id:"Stroga Game_Test _ Kopie_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['17EB1DA2CECC234DA8D91937EA18CA9D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;