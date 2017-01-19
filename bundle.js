(function main() {

  var STARTING_BOARD_ARRAY = ["L","L","L","L","","R","R","R","R"];
  var WINNING_BOARD_STRING = JSON.stringify(["R","R","R","R","","L","L","L","L"]);

  var startButton = document.getElementById("startButton");
  var endButton = document.getElementById("endButton");
  var board = document.getElementById("board");

  var clickLocation;
  var currentBoardArray;
  var blankIndex;

  startButton.addEventListener("click", startGame);
  endButton.addEventListener("click", endGame);

// startButton callback handler
  function startGame(){
    currentBoardArray = STARTING_BOARD_ARRAY;
    blankIndex = currentBoardArray.indexOf("");
    console.log("Starting new game...Good Luck!");
    board.addEventListener("click", respondToBoardClick);
  }

  // board click event callback
  function respondToBoardClick(event) {
    clickLocation = event.target.dataset.location;

    if (isValidMove()) {
      currentBoardArray[blankIndex] = currentBoardArray[clickLocation];
      currentBoardArray[clickLocation] = "";
      updateUI(clickLocation, blankIndex);
      checkForWinner();
      blankIndex = clickLocation;
    }
  }

  function isValidMove(){
    return (clickLocation != undefined
      && Math.abs(clickLocation - blankIndex) <= 2
      && clickLocation !== blankIndex)
  }

  function updateUI(initialPosition, finalPosition){
    // move the element from the initial position to the final position
    initialSelector = "[data-location=\"" + initialPosition.toString() + "\"]";
    finalSelector = "[data-location=\"" + finalPosition.toString() + "\"]";

    initialPositionElement = document.querySelector(initialSelector);
    finalPositionElement = document.querySelector(finalSelector);

    finalPositionElement.innerHTML = initialPositionElement.innerHTML;
    initialPositionElement.innerHTML = "";
  }

  function checkForWinner(){
    if (WINNING_BOARD_STRING === JSON.stringify(currentBoardArray)){
      console.log("WINNER!!!!!!!!!!!")
      h1 = document.createElement("h1");
      text1 = document.createTextNode("You Won!! Congratulations!");
      text2 = document.createTextNode("Press Cmd-R to Play Again");
      winner = document.getElementById("winner")
      winner.appendChild(h1)
            .appendChild(text1);
      winner.appendChild(text2);
      endGame();
    }
  }


// endButton callback handler
  function endGame() {
    console.log("Bye Bye. Ending Program..");
    console.log("Clearing Event Listeners..");
    clearListeners();
    console.log("Event Listeners cleared");
  }

  function clearListeners(){
    board.removeEventListener("click", respondToBoardClick);
    startButton.removeEventListener("click", startGame);
    endButton.removeEventListener("click", endGame);
  }
})();





