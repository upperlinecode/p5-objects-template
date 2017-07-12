# Build a scene for our Tron Bike!
Code along with your instructor to learn about constructors! Then complete the steps below to finish the scene. 

    `function Car(speed){
        this.speed = speed
        this.yloc= 440,
        this.display= function(){
        fill("red")
        rect(100,this.yloc,100,60,5)
        fill(0)
        ellipse(100, this.yloc + 50 , 40, 40)
        ellipse(200, this.yloc + 50, 40, 40)
        
        }
      }`
    
 Remember that when we use a constructor to make a new object in our draw function, we use the new command:
    
    `function draw(){
       car1=new Car(5)
    
    
      }`
 
For your reference, below is an example of a const
## Instructions
**1.** Create a tree object. It should have a brown rectangle as its trunk, and a green circle as its leaves. You can make it more complex than this if you'd like it to look more tree-like! Make sure the tree starts in the far right of the screen, behind where the car will drive by. 

**2.** Make the tree move across the screen from right to left. 

**3.** When the tree gets to the left edge of the screen, make it start back at the far right of the screen and move to the left again. 


## Bonus Options

* Use the `mouseIsPressed` P5 variable to allow the user to pause all of the animations by clicking the screen. You can read more about this function in the <a href="https://p5js.org/reference/#/p5/keyPressed">P5 documentation</a>

* Make the tree wait a few seconds before resetting back to the far right of the screen

* Create multiple trees that all move across the screen at the same rate. 

