   // Creating variables
var cookies = 0;
var grandmaNum = 0;
var farmNum = 0;
var mineNum = 0;
var factNum = 0;
var bankNum = 0;        
var templeNum = 0;



function update() {
   cookies+=1;
   document.getElementById("demo").innerHTML = cookies;
}


//GRANY
function AddGrandma() {
   if(cookies<100){
      alert("NE CUKASH DOSTATU4NO")
   }else{
   grandmaNum++;
   cookies=cookies-100;
   document.getElementById("demo").innerHTML = cookies;
   var img = document.createElement("img");
   img.src = "babushka.jpg";
   document.body.appendChild(img);
   }
};
function grandma(){
   if(cookies>0){
      cookies+=grandmaNum*1;
      document.getElementById("demo").innerHTML = cookies;
   }
};
setInterval(grandma,1000);




//FARM
function AddFarm () {
   if(cookies<1100){
      alert("NE CUKASH DOSTATU4NO I SEGA IDWAM DA TE NACUKAM")
   }else{
   farmNum++;
   cookies=cookies-1100;
   document.getElementById("demo").innerHTML = cookies;
   var img = document.createElement("img");
   img.src = "farm.jpg";
   document.body.appendChild(img);
   }
};
function farm(){
   if(cookies>0){
      cookies+=farmNum*8;
      document.getElementById("demo").innerHTML = cookies;
   }
};
setInterval(farm,1000);



//MINE
function AddMine () {
   if(cookies<12000){
      alert("NE CUKASH DOSTATU4NO I SEGA IDWAM DA TE NACUKAM")
   }else{
   farmNum++;
   cookies=cookies-12000;
   document.getElementById("demo").innerHTML = cookies;
   var img = document.createElement("img");
   img.src = "mine.jpg";
   document.body.appendChild(img);
   }
};
function mine(){
   if(cookies>0){
      cookies+=mineNum*260;
      document.getElementById("demo").innerHTML = cookies;
   }
};
setInterval(mine,1000);



//FACTORY
function AddFactory () {
   if(cookies<130000){
      alert("NE CUKASH DOSTATU4NO I SEGA IDWAM DA TE NACUKAM")
   }else{
   factNum++;
   cookies=cookies-130000;
   document.getElementById("demo").innerHTML = cookies;
   var img = document.createElement("img");
   img.src = "factroy.jpg";
   document.body.appendChild(img);
   }
};
function factory(){
   if(cookies>0){
      cookies+=factNum*47;
      document.getElementById("demo").innerHTML = cookies;
   }
};
setInterval(factory,1000);


//BANK
function AddBank() {
   if(cookies<1400000){
      alert("NE CUKASH DOSTATU4NO I SEGA IDWAM DA TE NACUKAM")
   }else{
   bankNum++;
   cookies=cookies-1400000;
   document.getElementById("demo").innerHTML = cookies;
   var img = document.createElement("img");
   img.src = "bank.jpg";
   document.body.appendChild(img);
   }
};
function bank(){
   if(cookies>0){
      cookies+=bankNum*1400;
      document.getElementById("demo").innerHTML = cookies;
   }
};
setInterval(bank,1000);




//KREMEL
function AddKremlin() {
   if(cookies<20000000){
      alert("NE CUKASH DOSTATU4NO I SEGA IDWAM DA TE NACUKAM")
   }else{
   templeNum++;
   cookies=cookies-20000000;
   document.getElementById("demo").innerHTML = cookies;
   var img = document.createElement("img");
   img.src = "kremel.jpg";
   document.body.appendChild(img);
   }
};
function kremel(){
   if(cookies>0){
      cookies+=bankNum*7800;
      document.getElementById("demo").innerHTML = cookies;
   }
};
setInterval(kremel,1000);