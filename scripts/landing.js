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
var art = "Art is here."
var fontsize = 32
var font = 'BagnardRegular'
var artWidth, artHeight, artAscent, artDescent
var skip = " → lenamk.site"

// Circle
var circleRadius //somehow isn't the radius but the diameter...
var overflow = 20

function setup() { 
    
    createCanvas(windowWidth, windowHeight); 
    colorMode(HSB)
    textAlign(CENTER)
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
    
    var artCenterX = x + artWidth/2
    var artCenterY = y + artHeight/2

    var distance = dist(mouseX, mouseY, artCenterX, artCenterY)
    
    if (distance > overflow)
        window.open('./bio.html', '_parent');
    else 
        setArt()
    


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setArt()
}

function draw() { 
    
    background(0o0); 
    fill(0, 0, 100)
    textSize(42);
    text("Where is art?", windowWidth/2, windowHeight/4)

    

    circle(mouseX, mouseY, circleRadius); 
   
    fill(0, 0, 0)
    textSize(fontsize)
    text(art, x, y); 

    fill(0, 0, 100)
    textSize(14); 
    text("Click anywhere to skip", windowWidth/2, windowHeight * 4 / 5 - 50  )
    text(skip, windowWidth/2, windowHeight * 4 / 5 )

} 


