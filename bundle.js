function isNumber(testValue) {
  return !isNaN(testValue)
}
function findLocation(event){
  var location = event.target.dataset.location;
  console.log("location "+location);
  return location
}


function updateBoard(location, board){

}

var board = document.getElementById("board").addEventListener("click", findLocation);