var movePiece = function(event){
  var location = event.target;
  console.log(location);
  if (location.className === "square") {
    console.log("Can you spare a square?");
  }
}
var board = document.getElementById("board").addEventListener("click", movePiece);