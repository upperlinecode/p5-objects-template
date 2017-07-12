function setup(){
    createCanvas(windowWidth,windowHeight)
    
}

function draw(){
    clear()
    // road color
    background(150)
    
    // Sky
    fill("#00bfff")
    noStroke()
    rect(0,0,windowWidth, windowHeight/3)
    
    // Lines on the road
    fill("yellow")
    rect(0,400,100,10)
    rect(200,400,100,10)
    rect(400,400,100,10)
    rect(600,400,100,10)
    rect(800,400,100,10)
    rect(1000,400,100,10)
    rect(1200,400,100,10)
    
}