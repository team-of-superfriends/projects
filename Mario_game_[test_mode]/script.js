var output = document.querySelector("#output");
var spriteObject =
{
sourceX: 0,
sourceY: 0,
sourceWidth: 45,
sourceHeight: 90,
x: 0,
y: 0,
width: 50,
height: 60,
vx: 0,
vy: 0,
Alpha: 1
};






var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");


var sprites = [];

var background = Object.create(spriteObject);
background.sourceY = 320;
background.sourceWidth = 2399;
background.sourceHeight = 759;
background.width = 2399;
background.height = 759;
background.x = 0;
background.y = 0;
background.Alpha = 1;
sprites.push(background);

var score = Object.create(spriteObject);
score.sourceY = 891;
score.sourceWidth = 200;
score.sourceHeight = 35;
score.width = 100;
score.height = 35;
score.Alpha = 1;
sprites.push(score);
var cat = Object.create(spriteObject);
cat.x = 243;
cat.y = 300;
sprites.push(cat);
var predCoinY = [], predmasX = [], predCoinX = [];
var elem = 0;
var doublestart = false;
var defsH = 147, defsX = 0, defsY = 102, defH = 155/59, defY = 300/210, defy = 300;
var record = 0, newrec = 0;
var levelup = 0;
var Level = 50;
var mas = [];
mas[0] = Object.create(spriteObject);
mas[0].sourceWidth = 70;
mas[0].sourceHeight = 57;
mas[0].width = 70;
mas[0].height = 58;
mas[0].sourceY = 192;
mas[0].sourceX = 0;
mas[0].x = 800;
mas[0].y = 300;
mas[0].Alpha = 1;
sprites.push(mas[0]);
for (var i = 1; i < 50; i++){
mas[i] = Object.create(spriteObject);
mas[i].sourceWidth = 70;
mas[i].sourceHeight = 57;
mas[i].width = Math.floor(Math.random() * (200 - 50 + 1) + 50);
mas[i].height = Math.floor(Math.random() * ((200-mas[i].width/1.5) - 50 + 1) + 50);
mas[i].sourceY = 192;
mas[i].sourceX = 0;
mas[i].x = (mas[i-1].x + Math.floor(Math.random() * ((800+Level) - (600+Level) + 1) + (400+Level)));
mas[i].Alpha = 1;
mas[i].y = 360 - mas[i].height;

predmasX[i] = mas[i].x;
sprites.push(mas[i]);
}
var magstep = 0;
var lostco = false;
var coins = [];
for (var i = 0; i < 50; i++){
coins[i] = Object.create(spriteObject);
coins[i].sourceWidth = 54;
coins[i].sourceHeight = 54;
coins[i].width = 54;
coins[i].height = 54;
coins[i].sourceY = 249;
coins[i].sourceX = 0;
coins[i].x = Math.floor(Math.random() * (50000 - 600 + 1) + 400);
coins[i].y = Math.floor(Math.random() * ((300) - (0) + 1) + (0));
coins[i].Alpha = 1;
predCoinX[i] = coins[i].x;
predCoinY[i] =  coins[i].y;
if (coins[i].x > mas[i].x + mas[i].width + 20 || coins[i].y + coins[i].height + 20 < mas[i].y || coins[i].x + coins[i].width + 20 < mas[i].x)
sprites.push(coins[i]);
}
var mag = false;
var maghier = false;
var magX = 800, magY = 0;
var s = [];
for (var j = 0; j < 50; j++){
 s[j] = 1;
}

var x = 0, nowcoin = 0, inf = 0;
var bloom = false;
var k = 20, b = 0, c = 0;
var step = 38;
var jump2 = false, jump3 = true;
var game = false;
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "grey.png";


window.addEventListener("keydown", keydownHandler, false);

function Magnet(){
 document.getElementById('magnet').style.display = "none";
      for (var j = 0; j < 50; j++){
         if (coins[j].x > -60 && coins[j].x < 1000 && coins[j].y > 0 && coins[j].y < 500 ){
          
          s[j]*=1.05;
          maghier = true;
          if (coins[j].x < cat.x)
          coins[j].x += s[j];
          else
          coins[j].x -= s[j];
          if (coins[j].y < cat.y)
          coins[j].y += s[j];
          else
          coins[j].y -= s[j];
         }
         
      }
      
}


function keydownHandler(event){
    if (event.keyCode == step){
        
        if (jump2){
         b = 0;
         k = 17;
        }
        
        b++;
    }
        if (event.keyCode == 81)
        mag = true;
}

var Koof = [], KoofY = [];
 for (var j = 0; j < 50; j++){
KoofY[j] = mas[j].y - (mas[j].height * defH-(mas[j].height));
Koof[j] = mas[j].height * defH;
 }
 
 function Start(){
  if (game)
game = false;
else
  game = true;
 }
 
 function tutorial (){
  if (doublestart){
  document.getElementById('tut').style.display = "none";
  doublestart = false;
  }
  else{
  document.getElementById('tut').style.display = "block";
  doublestart = true;
  }
 }
 
 function infiniti(){
  if (inf < 100){
  if (cat.Alpha > 0)
  cat.Alpha-=0.1;
  else if (cat.Alpha < 1) cat.Alpha+=0.1;
  inf++;
  }
  else lostco = false;
 }
 
function move(){



if (Math.floor(Math.random() * (18 - 1 + 1) + 1) == 5){
    for (var j = 0; j < 50; j++){
    if (mas[j].x < 600 + levelup && mas[j].x > 550 + levelup)
    elem = j;
   
    }
    if (elem != 0)
    bloom = true;
}

   if (mas[elem].sourceX < 350 && bloom == true){

    mas[elem].sourceX += 71;
  mas[elem].sourceHeight = defsH;
    mas[elem].sourceY = defsY;
mas[elem].height = Koof[elem];
mas[elem].y = KoofY[elem];
   }
if (mas[elem].sourceX > 350)
bloom = false;
        x++;
        if (x == 6){
            cat.sourceX += 46;
            x = 0;
        }
    if (cat.sourceX > 300)
    cat.sourceX = 0;
        background.x += -7 - levelup;
        
background.y += cat.vy;
if (background.x < -1193)
background.x = 0;

     if (lostco)
     infiniti();
     else {cat.Alpha = 1;
     inf = 0;
     }

wall();
}

function wall(){
    levelup += 0.005;
    Level +=0.002;
for (var i = 0; i < 50; i++){

mas[i].x += -7 - levelup;
if (mas[i].x > (cat.x - mas[i].width) && mas[i].x < (cat.x + cat.width) &&  mas[i].y < (cat.y + cat.height) && nowcoin < 1 && !lostco){
game = false;
document.getElementById('button').style.display = "none";
break;
}

if (mas[i].x > (cat.x - mas[i].width) && mas[i].x < (cat.x + cat.width) &&  mas[i].y < (cat.y + cat.height) && nowcoin > 0){
 if (!lostco){
  if (nowcoin < 4)
  nowcoin = 0;
  else
 nowcoin = nowcoin/2 - 2;
 lostco = true;
 
 }
}
}
}


function Jump(){
 if (cat.y < -40)
 cat.y = -40;
if (b > 0){
 jump2 = true;
cat.y -= k;
k-=1;
}
//if (cat.y < 50)
//step = 0;
if (cat.y > 299){
b = 0;
k = 20;
cat.y = 300;
step = 38;
jump2 = false;

}
}
var coi = 0;
function Coin(){
 
 for (var z = 0; z < 50; z++){
  if (coins[z].x > (cat.x - coins[z].width) && coins[z].x < (cat.x + cat.width) &&  coins[z].y < (cat.y + cat.height) && coins[z].y + coins[z].height > cat.y){
   nowcoin++;
  coins[z].y = 1000;
  }
  coi++;
  coins[z].x += -7 - levelup;
  if (coi > 5)
  coins[z].sourceX += 55;
  if (coins[z].sourceX > 460){
  coins[z].sourceX = 0;
  coi = 0;
  }
}
}
function loadHandler()
{
  
update();
}

function update()
{
if (game){
 Jump();
move();
Coin();
record+=1;
if (mag && magstep < 250){
Magnet();
magstep++;
}
}
console.log(magstep);
render();
drawingSurface.globalAlpha = 1;
}


function render()
{
 drawingSurface.globalAlpha = spriteObject.Alpha;
    requestAnimationFrame(update, canvas);

drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
//Перебор спрайтов и использование их свойств для отображения
if(sprites.length !== 0)
{
for(var i = 0; i < sprites.length; i++)
{
var sprite = sprites[i];
if (i == 2)
drawingSurface.globalAlpha = cat.Alpha;
if (i != 2)
 drawingSurface.globalAlpha = 1;
drawingSurface.drawImage(image,
sprite.sourceX, sprite.sourceY,
sprite.sourceWidth, sprite.sourceHeight,
Math.floor(sprite.x), Math.floor(sprite.y),
sprite.width, sprite.height);

}
}
if (record%10 == 0)
output.innerHTML = record;
outputcoin.innerHTML = Math.floor(nowcoin);

}

