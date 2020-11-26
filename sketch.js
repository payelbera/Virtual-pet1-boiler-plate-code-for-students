//Create global variables dog, happyDog, database, foodS, foodStock

function preload(){
   //Load dog and happy dog image
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  //Fetch the foodStock from the database you have created using the following syntax.
  //see hint in point #5 in pdf
  textSize(20); 
}


function draw() {
  background(46,139,87);
 
  //Using UP_ARROW write the code to feed the dog.
  // call writeStock() inside it
//After feeding the dog, change the image of the dog to a happy image of the dog.
  drawSprites();
  //Use textSize to increase the size of the text, fill() to set text color and stroke() to outline the text.
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read  foodStock from the database.
function readStock(data){
  //Function to read values from DB
foodS = data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    //Deduct the count of food left from the firebase.
  } 
  database.ref('/').update({
    Food:x
  })
}
