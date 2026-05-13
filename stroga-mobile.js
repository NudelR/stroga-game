(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"stroga_mobile_atlas_1", frames: [[0,0,250,250],[0,252,250,250],[252,0,250,250],[252,406,67,50],[373,406,30,30],[321,406,50,50],[252,334,70,70],[252,252,80,80],[324,334,70,70],[334,252,60,60]]}
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
p.nominalBounds = new cjs.Rectangle(0,0,1875,3334);


(lib.gras1 = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gras2 = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gras3 = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.obstacle_1 = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pasta = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.player = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.premiumpasta = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Schild = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Startscreen = function() {
	this.initialize(img.Startscreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3334);


(lib.waste = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Wolken = function() {
	this.initialize(ss["stroga_mobile_atlas_1"]);
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


(lib.startScreen = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startScreen, new cjs.Rectangle(0,0,450,800.2), null);


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


(lib.gameOverScreen1 = function(mode,startPosition,loop,reversed) {
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
	this.highscoreText = new cjs.Text("highscoreText", "bold 26px 'NimbusSanNovConBla'", "#22317F");
	this.highscoreText.name = "highscoreText";
	this.highscoreText.textAlign = "center";
	this.highscoreText.lineHeight = 33;
	this.highscoreText.lineWidth = 293;
	this.highscoreText.parent = this;
	this.highscoreText.setTransform(224.25,401.55);

	this.gameOverScore = new cjs.Text("gameOverScore", "bold 20px 'NimbusSanNov'", "#22317F");
	this.gameOverScore.name = "gameOverScore";
	this.gameOverScore.textAlign = "center";
	this.gameOverScore.lineHeight = 25;
	this.gameOverScore.lineWidth = 235;
	this.gameOverScore.parent = this;
	this.gameOverScore.setTransform(222.1,295.45);

	this.instance = new lib.GameOverscreen();
	this.instance.setTransform(0,0,0.24,0.24);

	this.instance_1 = new lib.GameOverscreen();
	this.instance_1.setTransform(0,0,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AyrigMAlWAAAIAAFBMglWAAAg");
	this.shape.setTransform(222.1,428.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#22317F").s().p("AyrChIAAlBMAlWAAAIAAFBg");
	this.shape_1.setTransform(222.1,428.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.gameOverScore},{t:this.highscoreText}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameOverScreen1, new cjs.Rectangle(0,0,450,800.2), null);


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
(lib.strogamobile = function(mode,startPosition,loop,reversed) {
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
		// =====================
		// ROOT
		// =====================
		var root = this;
		
		// =====================
		// SUPABASE
		// =====================
		const SUPABASE_URL = "https://hohluulorqiawwvcrpcs.supabase.co";
		
		const SUPABASE_KEY =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvaGx1dWxvcnFpYXd3dmNycGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5OTQwODYsImV4cCI6MjA4OTU3MDA4Nn0.c76k-mTwqTEd2dqgp_lrhLTSfQCbzzuYm7o00upva7g";
		
		let supabaseClient = null;
		
		if (window.supabase && window.supabase.createClient) {
		
		    supabaseClient = window.supabase.createClient(
		        SUPABASE_URL,
		        SUPABASE_KEY
		    );
		
		    console.log("✅ Supabase geladen");
		
		} else {
		
		    console.warn("❌ Supabase nicht geladen");
		}
		
		// =====================
		// SETTINGS
		// =====================
		const WIDTH = 450;
		const HEIGHT = 800;
		const GROUND_Y = 650;
		
		const MIN_OBSTACLE_DISTANCE = 220;
		
		// =====================
		// GAME STATE
		// =====================
		let gameStarted = false;
		
		let velocityY = 0;
		let gravity = 0.9;
		
		let isJumping = false;
		let isGameOver = false;
		
		let gameSpeed = 3.5;
		let maxSpeed = 7;
		
		let score = 0;
		
		// Premium Spawn Cooldown
		let premiumCooldown = 0;
		
		// Floating Score Array
		let floatingScores = [];
		
		// =====================
		// HTML ELEMENTS
		// =====================
		const nameInput = document.getElementById("nameInput");
		const emailInput = document.getElementById("emailInput");
		const darkBg = document.getElementById("darkBg");
		
		const submitBtn = document.getElementById("submitBtn");
		const skipBtn = document.getElementById("skipBtn");
		
		// =====================
		// INIT
		// =====================
		if (root.startScreen) {
		    root.startScreen.visible = true;
		}
		
		if (root.gameOverScreen) {
		    root.gameOverScreen.visible = false;
		}
		
		if (root.player) {
		    root.player.visible = false;
		}
		
		if (root.scoreText) {
		    root.scoreText.text = "Score: 0";
		}
		
		// =====================
		// INPUT
		// =====================
		const canvas = document.getElementById("canvas");
		
		if (canvas) {
		
		    canvas.addEventListener("mousedown", handleInput);
		
		    canvas.addEventListener("touchstart", function(e){
		
		        e.preventDefault();
		        handleInput();
		    });
		}
		
		// =====================
		// HANDLE INPUT
		// =====================
		function handleInput() {
		
		    // START GAME
		    if (!gameStarted) {
		
		        gameStarted = true;
		
		        if (root.startScreen) {
		            root.startScreen.visible = false;
		        }
		
		        if (root.player) {
		            root.player.visible = true;
		        }
		
		        return;
		    }
		
		    // RESTART NACH GAMEOVER
		    if (isGameOver) {
		
		        restartGame();
		        return;
		    }
		
		    // JUMP
		    if (!isJumping) {
		
		        velocityY = -24;
		        isJumping = true;
		    }
		}
		
		// =====================
		// TICKER
		// =====================
		createjs.Ticker.framerate = 30;
		createjs.Ticker.addEventListener("tick", update);
		
		// =====================
		// UPDATE
		// =====================
		function update() {
		
		    if (!root || !root.player) return;
		    if (!gameStarted || isGameOver) return;
		
		    // =====================
		    // PLAYER
		    // =====================
		    velocityY += gravity;
		    root.player.y += velocityY;
		
		    if (root.player.y >= GROUND_Y) {
		
		        root.player.y = GROUND_Y;
		
		        velocityY = 0;
		        isJumping = false;
		    }
		
		    // =====================
		    // SPEED
		    // =====================
		    if (gameSpeed < maxSpeed) {
		        gameSpeed += 0.002;
		    }
		
		    // =====================
		    // BACKGROUND
		    // =====================
		    moveBackground(root.cloud1, 0.28, WIDTH + 40, 80, 140);
		    moveBackground(root.cloud2, 0.38, WIDTH + 80, 120, 140);
		    moveBackground(root.cloud3, 0.52, WIDTH + 20, 60, 120);
		
		    moveBackground(root.sign1, 0.55, WIDTH + 300, GROUND_Y - 40);
		
		    moveBackground(root.grass1, 0.65, WIDTH + 40, GROUND_Y + 15);
		    moveBackground(root.grass2, 0.70, WIDTH + 110, GROUND_Y + 10);
		    moveBackground(root.grass3, 0.60, WIDTH + 180, GROUND_Y + 18);
		
		    if (root.grass4) root.grass4.y = GROUND_Y + 12;
		    if (root.grass5) root.grass5.y = GROUND_Y + 14;
		
		    // =====================
		    // HINDERNISSE
		    // =====================
		    moveObstacle(root.obstacle, root.obstacle2);
		    moveObstacle(root.obstacle2, root.obstacle);
		
		    // =====================
		    // PASTA
		    // =====================
		    movePasta(root.pasta1, 1);
		    movePasta(root.pasta2, 1);
		    movePasta(root.pasta3, 1);
		
		    movePremiumPasta(root.pastaPremium);
		
		    // =====================
		    // FLOATING SCORES
		    // =====================
		    updateFloatingScores();
		
		    // =====================
		    // SCORE
		    // =====================
		    if (root.scoreText) {
		        root.scoreText.text = "Score: " + score;
		    }
		
		    // =====================
		    // GAME OVER
		    // =====================
		    if (hit(root.obstacle) || hit(root.obstacle2)) {
		
		        triggerGameOver();
		    }
		}
		
		// =====================
		// GAME OVER
		// =====================
		function triggerGameOver() {
		
		    if (isGameOver) return;
		
		    isGameOver = true;
		
		    // GAME OVER SCREEN
		    if (root.gameOverScreen) {
		        root.gameOverScreen.visible = true;
		    }
		
		    // SCORE
		    if (root.gameOverScreen?.gameOverScore) {
		
		        root.gameOverScreen.gameOverScore.text =
		            "Score: " + score;
		    }
		
		    // SHOW OVERLAY
		    if (darkBg) {
		        darkBg.style.display = "block";
		    }
		
		    if (nameInput) {
		        nameInput.style.display = "block";
		    }
		
		    if (emailInput) {
		        emailInput.style.display = "block";
		    }
		
		    if (submitBtn) {
		        submitBtn.style.display = "block";
		    }
		
		    if (skipBtn) {
		        skipBtn.style.display = "block";
		    }
		
		    // LOAD TOP SCORES
		    loadTopScores();
		}
		
		// =====================
		// LOAD TOP SCORES
		// =====================
		async function loadTopScores() {
		
		    if (!supabaseClient) return;
		
		    try {
		
		        const { data, error } = await supabaseClient
		            .from("scores")
		            .select("*")
		            .order("score", { ascending: false })
		            .limit(3);
		
		        if (error) {
		
		            console.warn(error);
		            return;
		        }
		
		        console.log("TOP SCORES:", data);
		
		        let highscoreField =
		            root.gameOverScreen?.highscoreText;
		
		        if (highscoreField) {
		
		            highscoreField.text =
		                "1. " + (data[0]?.name || "-") + " - " + (data[0]?.score || 0) + "\n" +
		                "2. " + (data[1]?.name || "-") + " - " + (data[1]?.score || 0) + "\n" +
		                "3. " + (data[2]?.name || "-") + " - " + (data[2]?.score || 0);
		
		        } else {
		
		            console.warn("❌ highscoreText nicht gefunden");
		        }
		
		    } catch(e) {
		
		        console.warn(e);
		    }
		}
		
		// =====================
		// SUBMIT SCORE
		// =====================
		async function submitScore() {
		
		    if (!supabaseClient) {
		
		        console.warn("Supabase nicht verbunden");
		
		        hideOverlay();
		        return;
		    }
		
		    let name = nameInput?.value?.trim() || "Player";
		    let email = emailInput?.value?.trim() || "";
		
		    try {
		
		        const { error } = await supabaseClient
		            .from("scores")
		            .insert([
		                {
		                    name: name,
		                    email: email,
		                    score: score
		                }
		            ]);
		
		        if (error) {
		
		            console.warn("SUPABASE ERROR:", error);
		
		        } else {
		
		            console.log("✅ Score gespeichert");
		        }
		
		    } catch(e) {
		
		        console.warn("SUPABASE CRASH:", e);
		    }
		
		    hideOverlay();
		    loadTopScores();
		}
		
		// =====================
		// SKIP SCORE
		// =====================
		function skipScore() {
		
		    hideOverlay();
		}
		
		// =====================
		// HIDE OVERLAY
		// =====================
		function hideOverlay() {
		
		    if (darkBg) {
		        darkBg.style.display = "none";
		    }
		
		    if (nameInput) {
		
		        nameInput.style.display = "none";
		        nameInput.value = "";
		    }
		
		    if (emailInput) {
		
		        emailInput.style.display = "none";
		        emailInput.value = "";
		    }
		
		    if (submitBtn) {
		        submitBtn.style.display = "none";
		    }
		
		    if (skipBtn) {
		        skipBtn.style.display = "none";
		    }
		}
		
		// =====================
		// RESTART GAME
		// =====================
		function restartGame() {
		
		    // RESET STATE
		    isGameOver = false;
		
		    score = 0;
		
		    gameSpeed = 3.5;
		
		    velocityY = 0;
		    isJumping = false;
		
		    premiumCooldown = 0;
		
		    // HIDE GAMEOVER
		    if (root.gameOverScreen) {
		        root.gameOverScreen.visible = false;
		    }
		
		    // PLAYER
		    if (root.player) {
		
		        root.player.visible = true;
		        root.player.y = GROUND_Y;
		    }
		
		    // RESET OBJECTS
		    if (root.obstacle) {
		        root.obstacle.x = 700;
		    }
		
		    if (root.obstacle2) {
		        root.obstacle2.x = 1000;
		    }
		
		    if (root.pasta1) {
		        root.pasta1.x = 600;
		    }
		
		    if (root.pasta2) {
		        root.pasta2.x = 850;
		    }
		
		    if (root.pasta3) {
		        root.pasta3.x = 1100;
		    }
		
		    if (root.pastaPremium) {
		        root.pastaPremium.x = 1400;
		    }
		}
		
		// =====================
		// FLOATING SCORE
		// =====================
		function createFloatingScore(x, y, text, color) {
		
		    let scoreText = new createjs.Text(
		        text,
		        "bold 28px Arial",
		        color
		    );
		
		    scoreText.x = x;
		    scoreText.y = y;
		
		    scoreText.alpha = 1;
		
		    // SCHATTEN
		    scoreText.shadow = new createjs.Shadow(
		        "#000000",
		        2,
		        2,
		        8
		    );
		
		    stage.addChild(scoreText);
		
		    floatingScores.push(scoreText);
		}
		
		function updateFloatingScores() {
		
		    for (let i = floatingScores.length - 1; i >= 0; i--) {
		
		        let txt = floatingScores[i];
		
		        txt.y -= 2;
		        txt.alpha -= 0.03;
		
		        if (txt.alpha <= 0) {
		
		            stage.removeChild(txt);
		            floatingScores.splice(i, 1);
		        }
		    }
		}
		
		// =====================
		// BACKGROUND
		// =====================
		function moveBackground(obj, speedMult, respawnX, fixedY, randomYRange = 0) {
		
		    if (!obj) return;
		
		    obj.x -= gameSpeed * speedMult;
		
		    if (fixedY !== undefined) {
		        obj.y = fixedY;
		    }
		
		    if (obj.x < -120) {
		
		        obj.x = respawnX + Math.random() * 80;
		
		        if (randomYRange > 0) {
		            obj.y = fixedY + Math.random() * randomYRange;
		        }
		    }
		}
		
		// =====================
		// HINDERNIS
		// =====================
		function moveObstacle(obj, other) {
		
		    if (!obj) return;
		
		    obj.x -= gameSpeed;
		    obj.y = GROUND_Y;
		
		    if (obj.x < -100) {
		
		        let gap = 180 + Math.random() * 260;
		        let newX = WIDTH + gap;
		
		        if (
		            other &&
		            Math.abs(other.x - newX) < MIN_OBSTACLE_DISTANCE
		        ) {
		
		            newX =
		                other.x +
		                MIN_OBSTACLE_DISTANCE +
		                Math.random() * 100;
		        }
		
		        obj.x = newX;
		    }
		}
		
		// =====================
		// PASTA
		// =====================
		function movePasta(pasta, points) {
		
		    if (!pasta) return;
		
		    pasta.x -= gameSpeed;
		
		    if (pasta.x < -50) {
		
		        pasta.x = WIDTH + Math.random() * 300;
		
		        pasta.y =
		            GROUND_Y - (60 + Math.random() * 140);
		    }
		
		    // STÄRKERER BLINKEFFEKT
		    let pulse =
		        1 + Math.sin(Date.now() * 0.008) * 0.08;
		
		    pasta.scaleX = pulse * 1.15;
		    pasta.scaleY = pulse * 1.15;
		
		    pasta.alpha =
		        0.75 + Math.sin(Date.now() * 0.01) * 0.25;
		
		    if (
		        Math.abs(root.player.x - pasta.x) < 45 &&
		        Math.abs(root.player.y - pasta.y) < 45
		    ) {
		
		        score += points;
		
		        // FLOATING SCORE
		        createFloatingScore(
		            pasta.x,
		            pasta.y - 20,
		            "+1",
		            "#ffffff"
		        );
		
		        pasta.x = WIDTH + 220;
		    }
		}
		
		// =====================
		// PREMIUM PASTA
		// =====================
		function movePremiumPasta(pasta) {
		
		    if (!pasta) return;
		
		    pasta.x -= gameSpeed;
		
		    premiumCooldown--;
		
		    if (pasta.x < -50) {
		
		        if (
		            premiumCooldown > 0 ||
		            Math.random() < 0.45
		        ) {
		
		            pasta.x =
		                WIDTH + 700 + Math.random() * 300;
		
		            return;
		        }
		
		        premiumCooldown =
		            120 + Math.random() * 180;
		
		        pasta.x =
		            WIDTH + 350 + Math.random() * 450;
		
		        pasta.y =
		            GROUND_Y - (100 + Math.random() * 180);
		    }
		
		    // PREMIUM GLOW
		    let pulse =
		        1 + Math.sin(Date.now() * 0.01) * 0.12;
		
		    pasta.scaleX = pulse * 1.1;
		    pasta.scaleY = pulse * 1.1;
		
		    pasta.alpha =
		        0.7 + Math.sin(Date.now() * 0.012) * 0.3;
		
		    // GOLDENER SCHEIN
		    pasta.shadow = new createjs.Shadow(
		        "#ffd700",
		        0,
		        0,
		        25
		    );
		
		    if (
		        Math.abs(root.player.x - pasta.x) < 48 &&
		        Math.abs(root.player.y - pasta.y) < 48
		    ) {
		
		        score += 3;
		
		        // FLOATING SCORE
		        createFloatingScore(
		            pasta.x,
		            pasta.y - 20,
		            "+3",
		            "#ffd700"
		        );
		
		        pasta.x = WIDTH + 450;
		
		        premiumCooldown =
		            140 + Math.random() * 180;
		    }
		}
		
		// =====================
		// HIT
		// =====================
		function hit(obj) {
		
		    if (!obj) return false;
		
		    return (
		        Math.abs(root.player.x - obj.x) < 35 &&
		        Math.abs(root.player.y - obj.y) < 30
		    );
		}
		
		// =====================
		// GLOBAL BUTTONS
		// =====================
		window.submitScore = submitScore;
		window.skipScore = skipScore;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// player
	this.floatingScore = new cjs.Text("+1", "bold 28px 'NimbusSanNovConBla'", "#FFFFFF");
	this.floatingScore.name = "floatingScore";
	this.floatingScore.textAlign = "center";
	this.floatingScore.lineHeight = 35;
	this.floatingScore.lineWidth = 60;
	this.floatingScore.parent = this;
	this.floatingScore.setTransform(622.95,252.75);
	this.floatingScore.shadow = new cjs.Shadow("rgba(255,204,51,1)",1,1,4);

	this.gameOverScreen = new lib.gameOverScreen1();
	this.gameOverScreen.name = "gameOverScreen";
	this.gameOverScreen.setTransform(225,400.1,1,1,0,0,0,225,400.1);

	this.player = new lib.PlayerImage();
	this.player.name = "player";
	this.player.setTransform(101.5,628.5,1,1,0,0,180,18.5,18.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAGYIAAsv");
	this.shape.setTransform(-1,394.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.player},{t:this.gameOverScreen},{t:this.floatingScore}]}).wait(1));

	// obstacle
	this.obstacle = new lib.obstacle1();
	this.obstacle.name = "obstacle";
	this.obstacle.setTransform(490.8,645.85,1.67,1.67,0,0,0,17.8,17.8);

	this.timeline.addTween(cjs.Tween.get(this.obstacle).wait(1));

	// Score__0
	this.startScreen = new lib.startScreen();
	this.startScreen.name = "startScreen";
	this.startScreen.setTransform(225,400.1,1,1,0,0,0,225,400.1);

	this.scoreText = new cjs.Text("Score: 0", "bold 26px 'NimbusSanNov'");
	this.scoreText.name = "scoreText";
	this.scoreText.lineHeight = 33;
	this.scoreText.lineWidth = 182;
	this.scoreText.parent = this;
	this.scoreText.setTransform(22,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scoreText},{t:this.startScreen}]}).wait(1));

	// pasta
	this.pasta3 = new lib.PastaImage1();
	this.pasta3.name = "pasta3";
	this.pasta3.setTransform(840.1,585.5,1,1,0,0,0,18.5,18.5);

	this.pasta2 = new lib.PastaImage1();
	this.pasta2.name = "pasta2";
	this.pasta2.setTransform(740.5,506.5,1,1,0,0,0,18.5,18.5);

	this.pasta1 = new lib.PastaImage1();
	this.pasta1.name = "pasta1";
	this.pasta1.setTransform(618.5,555.5,1,1,0,0,0,18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pasta1},{t:this.pasta2},{t:this.pasta3}]}).wait(1));

	// Ebene_1
	this.grass5 = new lib.GrassMove5();
	this.grass5.name = "grass5";
	this.grass5.setTransform(723.5,665,1,1,0,0,0,20,20);

	this.grass4 = new lib.GrassMove4();
	this.grass4.name = "grass4";
	this.grass4.setTransform(466.05,723.5,1,1,0,0,0,20,20);

	this.grass3 = new lib.GrassMove3();
	this.grass3.name = "grass3";
	this.grass3.setTransform(607.05,704,1,1,0,0,0,14,14);

	this.grass2 = new lib.GrassMove2();
	this.grass2.name = "grass2";
	this.grass2.setTransform(364,636,1,1,0,0,0,14,14);

	this.grass1 = new lib.GrassMove1();
	this.grass1.name = "grass1";
	this.grass1.setTransform(228,667,1,1,0,0,0,28,28);

	this.pastaPremium = new lib.PremiumPasta();
	this.pastaPremium.name = "pastaPremium";
	this.pastaPremium.setTransform(967,511,1,1,0,0,0,35,35);

	this.obstacle2 = new lib.Obstacle2();
	this.obstacle2.name = "obstacle2";
	this.obstacle2.setTransform(923,679.7,1.3829,1.3829,0,0,0,35,35);

	this.cloud1 = new lib.Cloud();
	this.cloud1.name = "cloud1";
	this.cloud1.setTransform(198.75,198.75,1.5192,1.5192,0,0,0,65,65);

	this.cloud3 = new lib.Cloud();
	this.cloud3.name = "cloud3";
	this.cloud3.setTransform(575.05,95.05,0.5385,0.5385,0,0,0,65.1,65.1);

	this.cloud2 = new lib.Cloud();
	this.cloud2.name = "cloud2";
	this.cloud2.setTransform(415,245,1,1,0,0,0,65,65);

	this.sign1 = new lib.Sign();
	this.sign1.name = "sign1";
	this.sign1.setTransform(743.5,616,1,1,0,0,0,40,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC33").s().p("EhGTANSIAA6jMCMnAAAIAAajg");
	this.shape_1.setTransform(450,734.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.sign1},{t:this.cloud2},{t:this.cloud3},{t:this.cloud1},{t:this.obstacle2},{t:this.pastaPremium},{t:this.grass1},{t:this.grass2},{t:this.grass3},{t:this.grass4},{t:this.grass5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(219,396,783,424);
// library properties:
lib.properties = {
	id: '17EB1DA2CECC234DA8D91937EA18CA9D',
	width: 450,
	height: 800,
	fps: 30,
	color: "#99CCFF",
	opacity: 1.00,
	manifest: [
		{src:"images/GameOverscreen.png?1778585450748", id:"GameOverscreen"},
		{src:"images/Startscreen.png?1778585450748", id:"Startscreen"},
		{src:"images/stroga_mobile_atlas_1.png?1778585450109", id:"stroga_mobile_atlas_1"}
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

	var lastW, lastH, lastS = 1;

	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();

	function resizeCanvas() {

		var w = lib.properties.width;
		var h = lib.properties.height;

		var iw = window.innerWidth;
		var ih = window.innerHeight;

		var pRatio = window.devicePixelRatio || 1;
		var xRatio = iw / w;
		var yRatio = ih / h;

		var sRatio = 1;

		if (isResp) {

			if (
				(respDim == 'width' && lastW == iw) ||
				(respDim == 'height' && lastH == ih)
			) {

				sRatio = lastS;

			} else if (!isScale) {

				if (iw < w || ih < h) {
					sRatio = Math.min(xRatio, yRatio);
				}

			} else if (scaleType == 1) {

				sRatio = Math.min(xRatio, yRatio);

			} else if (scaleType == 2) {

				sRatio = Math.max(xRatio, yRatio);
			}
		}

		domContainers[0].width = w * pRatio * sRatio;
		domContainers[0].height = h * pRatio * sRatio;

		domContainers.forEach(function(container) {

			container.style.width = (w * sRatio) + 'px';
			container.style.height = (h * sRatio) + 'px';
		});

		stage.scaleX = pRatio * sRatio;
		stage.scaleY = pRatio * sRatio;

		lastW = iw;
		lastH = ih;
		lastS = sRatio;

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
