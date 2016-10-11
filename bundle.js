var movePiece = function(event){
console.log(event.target)
}
var board = document.getElementById("board").addEventListener("click", movePiece);