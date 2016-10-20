
(function() {
  var startButton = document.getElementById("startButton");
  var endButton = document.getElementById("endButton");
  var board = document.getElementById("board");
  board.addEventListener("click", respondToBoardClick);
  startButton.addEventListener("click", startGame);
  endButton.addEventListener("click", endGame);

 // starting and winning position
  var currentBoardArray = ["L","L","L","L","","R","R","R","R"];
  var winningBoardArray = ["R","R","R","R","","L","L","L","L"];


// render the initial state
// render()
  var clickLocation = null;
  var blankIndex = currentBoardArray.indexOf("");

  // board click event callback handler
  function respondToBoardClick(event) {
    clickLocation = event.target.dataset.location;

    if (validMove()) {
      currentBoardArray[blankIndex] = currentBoardArray[clickLocation];
      currentBoardArray[clickLocation] = "";
      console.log("current board is" +currentBoardArray);

      updateUI(clickLocation, blankIndex);
      blankIndex = clickLocation; //reset for future moves
    }
  }

  function validMove(){

    console.log("You have clicked location " +clickLocation);
    console.log("that location has value " +currentBoardArray[clickLocation]);

    console.log("The blank space is at index " +blankIndex);

    var valid = (clickLocation != undefined 
      && Math.abs(clickLocation - blankIndex) <= 2
      && clickLocation - blankIndex != 0)

    if(!valid) {
      console.log("Sorry, that move is not allowed");
    }

    return valid;
  }

  function updateUI(initialPosition, finalPosition){
    // move the element from the initial position to the final position
    initialSelector = "[data-location=\"" + initialPosition.toString() + "\"]";    
    finalSelector = "[data-location=\"" + finalPosition.toString() + "\"]";
    console.log('initialPositionSelector is '+initialSelector);
    console.log('finalPositionSelector is '+finalSelector);

    initialPositionElement = document.querySelector(initialSelector);
    finalPositionElement = document.querySelector(finalSelector);
    console.log('initialPositionElement is '+initialPositionElement.innerHTML);    
    console.log('finalPositionElement is '+finalPositionElement.innerHTML);

    finalPositionElement.innerHTML = initialPositionElement.innerHTML;
    initialPositionElement.innerHTML = "";
  }




// startButton callback handler
  function startGame(){
    console.log("Starting new game.");
  }

// startButton callback handler
  function endGame() {
    console.log("Bye Bye. Game Over");
    console.log("Clearing Event Listeners");
    clearListeners();
    console.log("Event Listeners cleared");
  }


  function clearListeners(){
    board.removeEventListener("click", respondToBoardClick);
    startButton.removeEventListener("click", startGame);
    endButton.removeEventListener("click", endGame);
  }
})();





