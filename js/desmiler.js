initializeWindow("desmiler");

var rows=8;
var cols=8;
var board=[];

function createBoard(){
  board=[];

  for (let r=0; r<rows;r++){
    var row=[];

    for (let c=0; c<cols; c++){
      row.push({
        smiler: false,
        revealed: false,
        marked: false, 
        count: 0
      });
    }
    board.push(row);
  }
}

function drawBoard(){
  var grid=document.querySelector("#desmilerGrid");
  grid.innerHTML="";

  for (let r=0; r<rows; r++){
    for (let c=0; c<cols; c++){
      var tile=document.createElement("div");
      tile.className="tile";
      grid.appendChild(tile);
    }
  }
}

function placeSmilers(count){
  var placed=0;

  while (placed<count){
    var r=Math.floor(Math.random()*rows);
    var c=Math.floor(Math.random()*cols);

    if (board[r][c].smiler==false){
      board[r][c].smiler=true;
      placed++;
    }

  }
}
createBoard();
placeSmilers(10);
drawBoard();
