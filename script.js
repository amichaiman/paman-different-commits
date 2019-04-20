var speeds          = Object.freeze({"slow": 400, "medium":200, "fast":100});
var boardEnum       = Object.freeze({"wall":0, "dot":1, "candy":2, "empty":3, "pacman":4});
var directions      = Object.freeze({"left":0, "right":1, "up":2, "down":3, "same":4, "new":5});
var canvas;
var context;
var board;
var pacmanRight;
var pacmanLeft;
var pacmanUp;
var pacmanDown;
var pacmanI         = 23;
var pacmanJ         = 14;
var pacmanDirection = directions.left;
var pacmanSpeed     = speeds.fast;
const boardHeight   = 31;
const boardWidth    = 28;
const pacmanSize    = 20;
const tileSize      = 20;
const dotSize       = 2;
const candySize     = 7;
const dotColor      = "#ffaa00";
const candyColor    = "#aaaaff";
var movementInterval;
var score = 0;


function createBoard() {
    board = new Array(boardHeight);

    board[0]     = new Array(boardWidth).fill(boardEnum.wall);

    board[1]     = new Array(boardWidth).fill(boardEnum.dot);
    board[1][0]  = boardEnum.wall;
    board[1][13] = boardEnum.wall;
    board[1][14] = boardEnum.wall;
    board[1][boardWidth-1] = boardEnum.wall;

    board[2]     = new Array(boardWidth).fill(0);
    board[2][1]  = boardEnum.dot;
    board[2][6]  = boardEnum.dot;
    board[2][12] = boardEnum.dot;
    board[2][15] = boardEnum.dot;
    board[2][21] = boardEnum.dot;
    board[2][26] = boardEnum.dot;

    board[3]     = new Array(boardWidth).fill(0);
    board[3][1]  = boardEnum.candy;
    board[3][6]  = boardEnum.dot;
    board[3][12] = boardEnum.dot;
    board[3][15] = boardEnum.dot;
    board[3][21] = boardEnum.dot;
    board[3][26] = boardEnum.candy;

    board[4]     = new Array(boardWidth).fill(0);
    board[4][1]  = boardEnum.dot;
    board[4][6]  = boardEnum.dot;
    board[4][12] = boardEnum.dot;
    board[4][15] = boardEnum.dot;
    board[4][21] = boardEnum.dot;
    board[4][26] = boardEnum.dot;

    board[5]     = new Array(boardWidth).fill(1);
    board[5][0]  = boardEnum.wall;
    board[5][boardWidth-1] = boardEnum.wall;

    board[6]     = new Array(boardWidth).fill(0);
    board[6][1]  = boardEnum.dot;
    board[6][6]  = boardEnum.dot;
    board[6][9]  = boardEnum.dot;
    board[6][18] = boardEnum.dot;
    board[6][21] = boardEnum.dot;
    board[6][26] = boardEnum.dot;

    board[7]     = new Array(boardWidth).fill(0);
    board[7][1]  = boardEnum.dot;
    board[7][6]  = boardEnum.dot;
    board[7][9]  = boardEnum.dot;
    board[7][18] = boardEnum.dot;
    board[7][21] = boardEnum.dot;
    board[7][26] = boardEnum.dot;

    board[8]     = new Array(boardWidth).fill(1);
    board[8][0]  = boardEnum.wall;
    board[8][7]  = boardEnum.wall;
    board[8][8]  = boardEnum.wall;
    board[8][13] = boardEnum.wall;
    board[8][14] = boardEnum.wall;
    board[8][19] = boardEnum.wall;
    board[8][20] = boardEnum.wall;
    board[8][boardWidth-1] = boardEnum.wall;

    board[9]     = new Array(boardWidth).fill(boardEnum.wall);
    board[9][6]  = boardEnum.dot;
    board[9][12] = boardEnum.empty;
    board[9][15] = boardEnum.empty;
    board[9][21] = boardEnum.dot;

    board[10]     = new Array(boardWidth).fill(boardEnum.wall);
    board[10][6]  = boardEnum.dot;
    board[10][12] = boardEnum.empty;
    board[10][15] = boardEnum.empty;
    board[10][21] = boardEnum.dot;

    board[11]     = new Array(boardWidth).fill(boardEnum.wall);
    board[11][6]  = boardEnum.dot;
    board[11][9]  = boardEnum.empty;
    board[11][10] = boardEnum.empty;
    board[11][11] = boardEnum.empty;
    board[11][12] = boardEnum.empty;
    board[11][13] = boardEnum.empty;
    board[11][14] = boardEnum.empty;
    board[11][15] = boardEnum.empty;
    board[11][16] = boardEnum.empty;
    board[11][17] = boardEnum.empty;
    board[11][18] = boardEnum.empty;
    board[11][21] = boardEnum.dot;

    board[12]     = new Array(boardWidth).fill(boardEnum.wall);
    board[12][6]  = boardEnum.dot;
    board[12][9]  = boardEnum.empty;
    board[12][18] = boardEnum.empty;
    board[12][21] = boardEnum.dot;

    board[13]     = new Array(boardWidth).fill(boardEnum.wall);
    board[13][6]  = boardEnum.dot;
    board[13][9]  = boardEnum.empty;
    board[13][18] = boardEnum.empty;
    board[13][21] = boardEnum.dot;

    board[14]     = new Array(boardWidth).fill(boardEnum.empty);
    board[14][6]  = boardEnum.dot;
    board[14][10]  = boardEnum.wall;
    board[14][11]  = boardEnum.wall;
    board[14][12]  = boardEnum.wall;
    board[14][13]  = boardEnum.wall;
    board[14][14]  = boardEnum.wall;
    board[14][15]  = boardEnum.wall;
    board[14][16]  = boardEnum.wall;
    board[14][17]  = boardEnum.wall;
    board[14][21] = boardEnum.dot;

    board[15]     = new Array(boardWidth).fill(boardEnum.wall);
    board[15][6]  = boardEnum.dot;
    board[15][9]  = boardEnum.empty;
    board[15][18] = boardEnum.empty;
    board[15][21] = boardEnum.dot;

    board[16]     = new Array(boardWidth).fill(boardEnum.wall);
    board[16][6]  = boardEnum.dot;
    board[16][9]  = boardEnum.empty;
    board[16][18] = boardEnum.empty;
    board[16][21] = boardEnum.dot;

    board[17]     = new Array(boardWidth).fill(boardEnum.wall);
    board[17][6]  = boardEnum.dot;
    board[17][9]  = boardEnum.empty;
    board[17][10] = boardEnum.empty;
    board[17][11] = boardEnum.empty;
    board[17][12] = boardEnum.empty;
    board[17][13] = boardEnum.empty;
    board[17][14] = boardEnum.empty;
    board[17][15] = boardEnum.empty;
    board[17][16] = boardEnum.empty;
    board[17][17] = boardEnum.empty;
    board[17][18] = boardEnum.empty;
    board[17][21] = boardEnum.dot;

    board[18]     = new Array(boardWidth).fill(0);
    board[18][6]  = boardEnum.dot;
    board[18][9]  = boardEnum.empty;
    board[18][18] = boardEnum.empty;
    board[18][21] = boardEnum.dot;

    board[19]     = new Array(boardWidth).fill(0);
    board[19][6]  = boardEnum.dot;
    board[19][9]  = boardEnum.empty;
    board[19][18] = boardEnum.empty;
    board[19][21] = boardEnum.dot;

    board[20]     = new Array(boardWidth).fill(1);
    board[20][0]  = boardEnum.wall;
    board[20][13] = boardEnum.wall;
    board[20][14] = boardEnum.wall;
    board[20][boardWidth-1] = boardEnum.wall;

    board[21]     = new Array(boardWidth).fill(0);
    board[21][1]  = boardEnum.dot;
    board[21][6]  = boardEnum.dot;
    board[21][12] = boardEnum.dot;
    board[21][15] = boardEnum.dot;
    board[21][21] = boardEnum.dot;
    board[21][26] = boardEnum.dot;

    board[22]     = new Array(boardWidth).fill(0);
    board[22][1]  = boardEnum.dot;
    board[22][6]  = boardEnum.dot;
    board[22][12] = boardEnum.dot;
    board[22][15] = boardEnum.dot;
    board[22][21] = boardEnum.dot;
    board[22][26] = boardEnum.dot;

    board[23]     = new Array(boardWidth).fill(1);
    board[23][1]  = boardEnum.candy;
    board[23][0]  = boardEnum.wall;
    board[23][4]  = boardEnum.wall;
    board[23][5]  = boardEnum.wall;
    board[23][13] = boardEnum.empty;
    board[23][14] = boardEnum.empty;
    board[23][22] = boardEnum.wall;
    board[23][23] = boardEnum.wall;
    board[23][26] = boardEnum.candy;
    board[23][boardWidth-1] = boardEnum.wall;

    board[24]     = new Array(boardWidth).fill(0);
    board[24][3]  = boardEnum.dot;
    board[24][6]  = boardEnum.dot;
    board[24][9]  = boardEnum.dot;
    board[24][18] = boardEnum.dot;
    board[24][21] = boardEnum.dot;
    board[24][24] = boardEnum.dot;

    board[25]     = new Array(boardWidth).fill(0);
    board[25][3]  = boardEnum.dot;
    board[25][6]  = boardEnum.dot;
    board[25][9]  = boardEnum.dot;
    board[25][18] = boardEnum.dot;
    board[25][21] = boardEnum.dot;
    board[25][24] = boardEnum.dot;

    board[26]     = new Array(boardWidth).fill(1);
    board[26][0]  = boardEnum.wall;
    board[26][7]  = boardEnum.wall;
    board[26][8]  = boardEnum.wall;
    board[26][13] = boardEnum.wall;
    board[26][14] = boardEnum.wall;
    board[26][19] = boardEnum.wall;
    board[26][20] = boardEnum.wall;
    board[26][boardWidth-1] = boardEnum.wall;

    board[27]     = new Array(boardWidth).fill(0);
    board[27][1]  = boardEnum.dot;
    board[27][12] = boardEnum.dot;
    board[27][15] = boardEnum.dot;
    board[27][26] = boardEnum.dot;

    board[28]     = new Array(boardWidth).fill(0);
    board[28][1]  = boardEnum.dot;
    board[28][12] = boardEnum.dot;
    board[28][15] = boardEnum.dot;
    board[28][26] = boardEnum.dot;

    board[29]    = new Array(boardWidth).fill(1);
    board[29][0] = boardEnum.wall;
    board[29][boardWidth-1] = boardEnum.wall;
    board[boardHeight-1] = new Array(boardWidth).fill(0);
    return board;
}

function getTile(n) {
    return n*tileSize;
}

function clearTile() {
    switch (board[pacmanI][pacmanJ]) {
        case boardEnum.dot:   score += 1; break;
        case boardEnum.candy: score += 4; break;
        case boardEnum.wall: return; break;
        default: break;
    }
    board[pacmanI][pacmanJ] = boardEnum.empty;
    context.fillStyle = "#000000";
    context.beginPath();
    context.rect(getTile(pacmanJ), getTile(pacmanI), tileSize+4, tileSize+4);
    context.fill();
}

function drawDot(i, j) {
    context.fillStyle = dotColor;
    context.beginPath();
    context.arc(tileSize/2 + getTile(j), tileSize/2 + getTile(i), dotSize, 0, 2 * Math.PI);
    context.fill();
}

function drawCandy(i, j) {
    context.fillStyle = candyColor;
    context.beginPath();
    context.arc(tileSize/2 + getTile(j), tileSize/2 + getTile(i), candySize, 0, 2 * Math.PI);
    context.fill();
}

function drawBoardPieces() {
    /* draw dots and candy */
    for (var i=boardEnum.wall; i<boardHeight; i++) {
        for (var j=boardEnum.wall; j<boardWidth; j++) {
            if (board[i][j] === boardEnum.dot) {
                drawDot(i,j);
            } else if (board[i][j] === boardEnum.candy) {
                drawCandy(i,j);
            }
        }
    }
}

function drawPacman() {
    switch (pacmanDirection) {
        case directions.right:
            context.drawImage(pacmanRight, getTile(pacmanJ), getTile(pacmanI), pacmanSize, pacmanSize);
            break;
        case directions.left:
            context.drawImage(pacmanLeft, getTile(pacmanJ), getTile(pacmanI), pacmanSize, pacmanSize);
            break;
        case directions.up:
            context.drawImage(pacmanUp, getTile(pacmanJ), getTile(pacmanI), pacmanSize, pacmanSize);
            break;
        case directions.down:
            context.drawImage(pacmanDown, getTile(pacmanJ), getTile(pacmanI), pacmanSize, pacmanSize);
            break;
    }
}

function drawClosedPacman(draw_remove_) {
    var i, j;
    switch (pacmanDirection) {
        case directions.right:
            i = getTile(pacmanI) + tileSize/2;
            j = getTile(pacmanJ) + tileSize;
            break;
        case directions.left:
            i = getTile(pacmanI) + tileSize/2;
            j = getTile(pacmanJ);
            break;
        case directions.up:
            i = getTile(pacmanI);
            j = getTile(pacmanJ) + tileSize/2;
            break;
        case directions.down:
            i = getTile(pacmanI) + tileSize;
            j = getTile(pacmanJ) + tileSize/2;
            break;
    }
    context.fillStyle = draw_remove_ ? "#ffdd00" : "#000000";
    context.beginPath();
    context.arc(j, i, pacmanSize/2 + (draw_remove_ ? 0 : 4), 0, 2 * Math.PI);
    context.fill();
}

function moveRight() {
    drawClosedPacman(1);

    setTimeout(function() {
        drawClosedPacman(0);
        pacmanJ++;
        drawPacman();
        setTimeout(move, pacmanSpeed);
    }, pacmanSpeed);
}

function moveLeft() {
    drawClosedPacman(1, pacmanI, pacmanJ);

    setTimeout(function() {
        drawClosedPacman(0);
        pacmanJ--;
        drawPacman();
        setTimeout(move, pacmanSpeed);
    }, pacmanSpeed);
}

function moveUp() {
    drawClosedPacman(1, pacmanI, pacmanJ);

    setTimeout(function() {
        drawClosedPacman(0);
        pacmanI--;
        drawPacman();
        setTimeout(move, pacmanSpeed);
    }, pacmanSpeed);
}

function moveDown() {
    drawClosedPacman(1, pacmanI, pacmanJ);

    setTimeout(function() {
        drawClosedPacman(0);
        pacmanI++;
        drawPacman();
        setTimeout(move, pacmanSpeed);
    }, pacmanSpeed);
}

function canMove(newDirection) {
    switch (newDirection) {
        case directions.right:
            if (board[pacmanI][pacmanJ + 1] === boardEnum.wall) {
                return false;
            }
            break;
        case directions.left:
            if (board[pacmanI][pacmanJ - 1] === boardEnum.wall) {
                return false;
            }
            break;
        case directions.up:
            if (board[pacmanI - 1][pacmanJ] === boardEnum.wall) {
                return false;
            }
            break;
        case directions.down:
            if (board[pacmanI + 1][pacmanJ] === boardEnum.wall) {
                return false;
            }
    }
    return true;
}

function move() {
    if (!canMove(pacmanDirection)) {
        setTimeout(move, pacmanSpeed);
        return;
    }
    clearTile();
    switch (pacmanDirection) {
        case directions.right:
            moveRight();
            break;
        case directions.left:
            moveLeft();
            break;
        case directions.up:
            moveUp();
            break;
        case directions.down:
            moveDown();
            break;
    }
}

function startGame() {
    var backgroundImage = new Image();
    backgroundImage.src = "./images/background.png";

    backgroundImage.onload = function() {
        /* draw background */
        context.drawImage(backgroundImage, 0, 0, 560, 620);

        /* create 2d array with dots and candies */
        createBoard();

        /* draw array on background */
        drawBoardPieces();

        /* draw pac-man in initial tile */
        pacmanDirection = directions.left;
        setTimeout(move, pacmanSpeed);
    };
}

document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowUp':
            if (canMove(directions.up)) {
                pacmanDirection = directions.up;
            }
            break;
        case 'ArrowDown':
            if (canMove(directions.down)) {
                pacmanDirection = directions.down;
            }
            break;
        case 'ArrowLeft':
            if (canMove(directions.left)) {
                pacmanDirection = directions.left;
            }
            break;
        case 'ArrowRight':
            if (canMove(directions.right)) {
                pacmanDirection = directions.right;
            }
    }
};

$(document).ready(function() {
    canvas          = document.getElementById("canvas");
    context         = canvas.getContext("2d");
    pacmanRight     = new Image();
    pacmanLeft      = new Image();
    pacmanUp        = new Image();
    pacmanDown      = new Image();
    pacmanRight.src = "./images/pacman_right.png";
    pacmanLeft.src  = "./images/pacman_left.png";
    pacmanUp.src    = "./images/pacman_up.png";
    pacmanDown.src  = "./images/pacman_down.png";

    startGame();
});