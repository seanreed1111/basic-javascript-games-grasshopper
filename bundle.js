
(function() {
  initBoard();
  setListeners();

  var clickLocation = null;

  function getClickLocation(event) {
    clickLocation = event.target.dataset.location;
    if (clickLocation != undefined) {
      updateBoard();
    }
  }

  function initBoard(){
    // reset game Arrays
    var currentBoardArray = ["L","L","L","L","","R","R","R","R"];
    var winningBoardArray = ["R","R","R","R","","L","L","L","L"];
    var startButton = document.getElementById("startButton");
    var endButton = document.getElementById("endButton");
    var board = document.getElementById("board");
    //render(currentBoardArray);
  }


  function startGame(){
    console.log("Starting new game.");
    console.log("Initializing Board. Setting Event Listeners");
  }

  function updateBoard(){
    console.log("Click location is " +clickLocation);
  }

  function endGame() {
    console.log("Bye Bye. Game Over");
    console.log("Clearing Event Listeners");
    clearListeners();
    console.log("Event Listeners cleared");
  }

  function setListeners(){
    board.addEventListener("click", getClickLocation);
    startButton.addEventListener("click", startGame);
    endButton.addEventListener("click", endGame);
  }

  function clearListeners(){
    board.removeEventListener("click", getClickLocation);
    startButton.removeEventListener("click", startGame);
    endButton.removeEventListener("click", endGame);
  }
})();





