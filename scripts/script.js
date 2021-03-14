/* Global id variables */ 
var score = 0;

/* Generating Color functions */
function randomColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor
};

/* Updating Score function */
function updateScore(score){
    var currentScore = document.getElementById("score");
    currentScore.innerHTML = ("Score: "+score)
};

/* Changing RGB function */
function changeRGB(color){
    var rgb = document.getElementById("rgb");
    rgb.innerHTML = color;
};

/* Shuffling Order */
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

/* New round */
function newRound(){
    let orderArray = shuffle([0,1,2,3]);
    let colorArray = new Array();
    for(let i=0; i<4; i++){
        colorArray.push (randomColor());
    }; 
    document.getElementById('colorContainer').innerHTML = 
        `<div class="col-6"><div id="pixel1" class="pixel" style="background-color: `+colorArray[orderArray[0]]+`;" onclick="checkAns(`+orderArray[0]+`)"></div></div>
        <div class="col-6"><div id="pixel2" class="pixel" style="background-color: `+colorArray[orderArray[1]]+`;" onclick="checkAns(`+orderArray[1]+`)"></div></div>
        <div class="col-6"><div id="pixel3" class="pixel" style="background-color: `+colorArray[orderArray[2]]+`;" onclick="checkAns(`+orderArray[2]+`)"></div></div>
        <div class="col-6"><div id="pixel4" class="pixel" style="background-color: `+colorArray[orderArray[3]]+`;" onclick="checkAns(`+orderArray[3]+`)"></div></div>`
    changeRGB(colorArray[0]);
};

/* CheckAns */
function checkAns(ans){
    if (ans == 0){
        score += 1;
        updateScore(score);
        newRound();
    }
    else{
        alert("Wrong Answer!");
        score = 0;
        updateScore(0);
        newRound();
    };
};