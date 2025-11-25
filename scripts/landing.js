/*
    title: Website landing page
    author: LenaMK
    date: 2024-08-01
    description: p5 landing page for website
    initial code inspired by: 
        - http://lenamk.site/art-algorithmique/where-is-art/
        - https://www.geeksforgeeks.org/p5-js-displaywidth-variable/

*/

// Art position
var x, y
var art = "Projets"
var fontsize = 35
var font = 'BagnardRegular'
var artWidth, artHeight, artAscent, artDescent

// Circle
var circleRadius //somehow isn't the radius but the diameter...
var overflow

function setup() { 
    
    createCanvas(windowWidth, windowHeight); 
  
    textSize(fontsize); 
    textFont(font) 

    artWidth = textWidth(art)
    artAscent = textAscent()
    artDescent = textDescent()
    artHeight = artAscent+artDescent

    overflow = windowHeight/10
    circleRadius = (artWidth+overflow)

    setArt();

    noCursor(); 
} 

function setArt(){
    //clear previous setArt
    clear() 

    x = random(5, windowWidth-artWidth) 
    y = random(artAscent, windowHeight-artDescent)
}



function mousePressed() {
    /*
    var artCenterX = x + artWidth/2
    var artCenterY = y + artHeight/2

    var distance = dist(mouseX, mouseY, artCenterX, artCenterY)
    
    if (distance < overflow)
        window.open('./projets.html', '_parent');
    */


    //for now, just click to redirect to projects page
    window.location.href = "./projets.html";

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setArt()
}

function draw() { 
     
    background(0o0); 

    circle(mouseX, mouseY, circleRadius); 
   
    text(art, x, y); 

} 


