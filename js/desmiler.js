initializeWindow("desmiler");

var rows=8;
var cols=8;
var board=[];
var seconds=0;
var timer=null;
var gameOver=false;

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
  var marks=0;

  for (let r=0; r<rows; r++){
    for (let c=0; c<cols; c++){
      var tile=document.createElement("div");
      tile.className="tile";

      if (board[r][c].revealed){
        tile.className="tile revealed";
        
        if (board[r][c].smiler){
          tile.textContent="☺︎";
        }
        else if (board[r][c].count>0){
          tile.textContent=board[r][c].count;
        }
      }
      else if (board[r][c].marked){
        tile.className="tile chalked";
        tile.textContent="✕";
        marks++;
      }
      tile.addEventListener("click",function(){
        revealTile(r, c);
      });
      tile.addEventListener("contextmenu", function(e){
        e.preventDefault();
        markTile(r, c);
      });

      grid.appendChild(tile);
    }
   }
   document.querySelector("#desmilerMarks").textContent="x " + String(10-marks).padStart(3, "0");
 }

 function revealTile(r,c){
  if(gameOver){
    return;
  }
  if (board[r][c].revealed || board[r][c].marked){
    return;
  }

  if (timer==null){
    timer=setInterval(function(){
      seconds++;
      document.querySelector("#desmilerTimer").textContent=String(seconds).padStart(3,"0");
    },1000);
  }

  board[r][c].revealed=true;

if (board[r][c].count==0 && board[r][c].smiler==false){
  for (let dr=-1; dr<=1; dr++){
    for (let dc=-1; dc<=1; dc++){
      var nr=r+dr;
      var nc=c+dc;

      if (nr<0 || nr>=rows || nc<0 || nc>=cols){
      continue;
      }
      revealTile(nr,nc);
  
    }
  }
}


  if (board[r][c].smiler){
    for (let r=0; r<rows; r++){
      for (let c=0; c<cols; c++){
        if (board[r][c].smiler){
          board[r][c].revealed=true;
        }
      }
    }
    clearInterval(timer);
    gameOver=true;
    document.querySelector("#desmilerMessage").textContent="it saw you."
  }
  checkWin();
  drawBoard();
 }

function markTile(r,c){
  if (gameOver){
    return;
  }
  if (board[r][c].revealed){
    return;
  }
  board[r][c].marked=!board[r][c].marked;

  drawBoard();
}

function checkWin(){
  var opened=0;

  for (let r=0; r<rows; r++){
    for (let c=0; c<cols; c++){
      if (board[r][c].revealed && board[r][c].smiler==false){
        opened++;
      }
    }
  }
  if (opened==54){
    for (let r=0; r<rows; r++){
      for (let c=0; c<cols; c++){
        if (board[r][c].smiler){
          board[r][c].marked=true;
        }
      }
    }
    clearInterval(timer);
    gameOver=true;
    document.querySelector("#desmilerMessage").textContent="the exit is closer. remember: 2";
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
function countNeighbours(r,c){
  var total=0;

  for (let dr=-1; dr<=1; dr++){
    for (let dc=-1; dc<=1; dc++){
      var nr=r+dr;
      var nc=c+dc;

      if (nr<0 || nr>=rows || nc<0 || nc>=cols){
        continue;
      }
      if (dr==0 && dc==0){
        continue;
      }
      if (board[nr][nc].smiler){
        total++;
      }
    }
  }
  return total;
}

function countAll(){
  for (let r=0; r<rows; r++){
    for (let c=0; c<cols; c++){
      board[r][c].count=countNeighbours(r,c);
    }
  }
}

document.querySelector("#desmilerRestart").addEventListener("click",function(){
  clearInterval(timer);

  seconds=0;
  timer=null;
  gameOver=false;

  document.querySelector("#desmilerTimer").textContent="000";
  document.querySelector("#desmilerMessage").textContent="";

  createBoard();
  placeSmilers(10);
  countAll();
  drawBoard();
});

createBoard();
placeSmilers(10);
countAll();
drawBoard();
