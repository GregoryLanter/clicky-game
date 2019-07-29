# clicky-game
react game

# Technology
react.js

We have 3 components Header, Friend Card and wrapper. Header display the name of game. Wrapper is used to output 
one object by wrapping other objects in it. Friend Card is where we have the  image the ID and the clicked status.
The work happens in app.js. We use an initalState we used to initalize the program and then to reset the game.
We use krustyPals in State to keep a clean list of all the images. We use an array called Clicked in state to keep 
track of which images were clicked. We have display in state to build a random set of images so the cards on the 
screen change after each click. it works like this we generate a randome number between 0 and 11(limit of the number of images).
we check to see if this number is in out array of used indices (used[]). If it is we increse the number by one until we find a 
number that is not in the used array. If we get to 12 for our random number we reset it back to 0 because 12 after all is 
our of bounds for our array. Then we add it to the diplay array in state. When a program is clicked we update the clicked 
array in state based on the id when use that later to tell if a card has been clicked twice.

## Game Play
In Krusty's Guess Who you can click a new image each turn when you click an image for the second time you are out.
Click all 12 images with a double click and you Win!

## Notes
The hard part of this program was working with state properly and learning the nuances of setting state. I would 
like to restart the game on the first click after you lose, but I am happy to get it to reset on the first click 
after a loss and then start again after the second click.
