/* static game configurations*/
const speeds         = Object.freeze({"slow": 400, "medium":200, "fast":80});
const boardPieces    = Object.freeze({"wall":0, "dot":1, "candy":2, "empty":3, "pacman":4});
const directions     = Object.freeze({"left":0, "right":1, "up":2, "down":3, "same":4, "new":5});
const dotScore       = 1;
const candyScore     = 4;
const dotColor       = "#ffaa00";
const candyColor     = "#aaaaff";
const pacmanSize     = 20;
const tileSize       = 20;
const dotSize        = 2;
const candySize      = 7;
const boardHeight    = 31; //number of vertical tiles
const boardWidth     = 28; //number of horizontal tiles

/* initial pac-man configurations */
let currentDirection = directions.left;
let nextDirection    = directions.left;
let pacmanSpeed      = speeds.fast;
let pacmanI          = 23; //initial vertical tile
let pacmanJ          = 14; //initial horizontal tile
let score            = 0;
let numDots          = 0;
let numCandies       = 0;
let canvas;
let context;
let board;
let pacmanRight;
let pacmanLeft;
let pacmanUp;
let pacmanDown;
let startGameSound;




function createBoard() {
    board = new Array(boardHeight);

    board[0]     = new Array(boardWidth).fill(boardPieces.wall);

    board[1]     = new Array(boardWidth).fill(boardPieces.dot);
    board[1][0]  = boardPieces.wall;
    board[1][13] = boardPieces.wall;
    board[1][14] = boardPieces.wall;
    board[1][boardWidth-1] = boardPieces.wall;

    board[2]     = new Array(boardWidth).fill(boardPieces.wall);
    board[2][1]  = boardPieces.dot;
    board[2][6]  = boardPieces.dot;
    board[2][12] = boardPieces.dot;
    board[2][15] = boardPieces.dot;
    board[2][21] = boardPieces.dot;
    board[2][26] = boardPieces.dot;

    board[3]     = new Array(boardWidth).fill(boardPieces.wall);
    board[3][1]  = boardPieces.candy;
    board[3][6]  = boardPieces.dot;
    board[3][12] = boardPieces.dot;
    board[3][15] = boardPieces.dot;
    board[3][21] = boardPieces.dot;
    board[3][26] = boardPieces.candy;

    board[4]     = new Array(boardWidth).fill(boardPieces.wall);
    board[4][1]  = boardPieces.dot;
    board[4][6]  = boardPieces.dot;
    board[4][12] = boardPieces.dot;
    board[4][15] = boardPieces.dot;
    board[4][21] = boardPieces.dot;
    board[4][26] = boardPieces.dot;

    board[5]     = new Array(boardWidth).fill(boardPieces.dot);
    board[5][0]  = boardPieces.wall;
    board[5][boardWidth-1] = boardPieces.wall;

    board[6]     = new Array(boardWidth).fill(boardPieces.wall);
    board[6][1]  = boardPieces.dot;
    board[6][6]  = boardPieces.dot;
    board[6][9]  = boardPieces.dot;
    board[6][18] = boardPieces.dot;
    board[6][21] = boardPieces.dot;
    board[6][26] = boardPieces.dot;

    board[7]     = new Array(boardWidth).fill(boardPieces.wall);
    board[7][1]  = boardPieces.dot;
    board[7][6]  = boardPieces.dot;
    board[7][9]  = boardPieces.dot;
    board[7][18] = boardPieces.dot;
    board[7][21] = boardPieces.dot;
    board[7][26] = boardPieces.dot;

    board[8]     = new Array(boardWidth).fill(boardPieces.dot);
    board[8][0]  = boardPieces.wall;
    board[8][7]  = boardPieces.wall;
    board[8][8]  = boardPieces.wall;
    board[8][13] = boardPieces.wall;
    board[8][14] = boardPieces.wall;
    board[8][19] = boardPieces.wall;
    board[8][20] = boardPieces.wall;
    board[8][boardWidth-1] = boardPieces.wall;

    board[9]     = new Array(boardWidth).fill(boardPieces.wall);
    board[9][6]  = boardPieces.dot;
    board[9][12] = boardPieces.empty;
    board[9][15] = boardPieces.empty;
    board[9][21] = boardPieces.dot;

    board[10]     = new Array(boardWidth).fill(boardPieces.wall);
    board[10][6]  = boardPieces.dot;
    board[10][12] = boardPieces.empty;
    board[10][15] = boardPieces.empty;
    board[10][21] = boardPieces.dot;

    board[11]     = new Array(boardWidth).fill(boardPieces.wall);
    board[11][6]  = boardPieces.dot;
    board[11][9]  = boardPieces.empty;
    board[11][10] = boardPieces.empty;
    board[11][11] = boardPieces.empty;
    board[11][12] = boardPieces.empty;
    board[11][13] = boardPieces.empty;
    board[11][14] = boardPieces.empty;
    board[11][15] = boardPieces.empty;
    board[11][16] = boardPieces.empty;
    board[11][17] = boardPieces.empty;
    board[11][18] = boardPieces.empty;
    board[11][21] = boardPieces.dot;

    board[12]     = new Array(boardWidth).fill(boardPieces.wall);
    board[12][6]  = boardPieces.dot;
    board[12][9]  = boardPieces.empty;
    board[12][18] = boardPieces.empty;
    board[12][21] = boardPieces.dot;

    board[13]     = new Array(boardWidth).fill(boardPieces.wall);
    board[13][6]  = boardPieces.dot;
    board[13][9]  = boardPieces.empty;
    board[13][18] = boardPieces.empty;
    board[13][21] = boardPieces.dot;

    board[14]     = new Array(boardWidth).fill(boardPieces.empty);
    board[14][6]  = boardPieces.dot;
    board[14][10]  = boardPieces.wall;
    board[14][11]  = boardPieces.wall;
    board[14][12]  = boardPieces.wall;
    board[14][13]  = boardPieces.wall;
    board[14][14]  = boardPieces.wall;
    board[14][15]  = boardPieces.wall;
    board[14][16]  = boardPieces.wall;
    board[14][17]  = boardPieces.wall;
    board[14][21] = boardPieces.dot;

    board[15]     = new Array(boardWidth).fill(boardPieces.wall);
    board[15][6]  = boardPieces.dot;
    board[15][9]  = boardPieces.empty;
    board[15][18] = boardPieces.empty;
    board[15][21] = boardPieces.dot;

    board[16]     = new Array(boardWidth).fill(boardPieces.wall);
    board[16][6]  = boardPieces.dot;
    board[16][9]  = boardPieces.empty;
    board[16][18] = boardPieces.empty;
    board[16][21] = boardPieces.dot;

    board[17]     = new Array(boardWidth).fill(boardPieces.wall);
    board[17][6]  = boardPieces.dot;
    board[17][9]  = boardPieces.empty;
    board[17][10] = boardPieces.empty;
    board[17][11] = boardPieces.empty;
    board[17][12] = boardPieces.empty;
    board[17][13] = boardPieces.empty;
    board[17][14] = boardPieces.empty;
    board[17][15] = boardPieces.empty;
    board[17][16] = boardPieces.empty;
    board[17][17] = boardPieces.empty;
    board[17][18] = boardPieces.empty;
    board[17][21] = boardPieces.dot;

    board[18]     = new Array(boardWidth).fill(boardPieces.wall);
    board[18][6]  = boardPieces.dot;
    board[18][9]  = boardPieces.empty;
    board[18][18] = boardPieces.empty;
    board[18][21] = boardPieces.dot;

    board[19]     = new Array(boardWidth).fill(boardPieces.wall);
    board[19][6]  = boardPieces.dot;
    board[19][9]  = boardPieces.empty;
    board[19][18] = boardPieces.empty;
    board[19][21] = boardPieces.dot;

    board[20]     = new Array(boardWidth).fill(boardPieces.dot);
    board[20][0]  = boardPieces.wall;
    board[20][13] = boardPieces.wall;
    board[20][14] = boardPieces.wall;
    board[20][boardWidth-1] = boardPieces.wall;

    board[21]     = new Array(boardWidth).fill(boardPieces.wall);
    board[21][1]  = boardPieces.dot;
    board[21][6]  = boardPieces.dot;
    board[21][12] = boardPieces.dot;
    board[21][15] = boardPieces.dot;
    board[21][21] = boardPieces.dot;
    board[21][26] = boardPieces.dot;

    board[22]     = new Array(boardWidth).fill(boardPieces.wall);
    board[22][1]  = boardPieces.dot;
    board[22][6]  = boardPieces.dot;
    board[22][12] = boardPieces.dot;
    board[22][15] = boardPieces.dot;
    board[22][21] = boardPieces.dot;
    board[22][26] = boardPieces.dot;

    board[23]     = new Array(boardWidth).fill(boardPieces.dot);
    board[23][1]  = boardPieces.candy;
    board[23][0]  = boardPieces.wall;
    board[23][4]  = boardPieces.wall;
    board[23][5]  = boardPieces.wall;
    board[23][13] = boardPieces.empty;
    board[23][14] = boardPieces.empty;
    board[23][22] = boardPieces.wall;
    board[23][23] = boardPieces.wall;
    board[23][26] = boardPieces.candy;
    board[23][boardWidth-1] = boardPieces.wall;

    board[24]     = new Array(boardWidth).fill(boardPieces.wall);
    board[24][3]  = boardPieces.dot;
    board[24][6]  = boardPieces.dot;
    board[24][9]  = boardPieces.dot;
    board[24][18] = boardPieces.dot;
    board[24][21] = boardPieces.dot;
    board[24][24] = boardPieces.dot;

    board[25]     = new Array(boardWidth).fill(boardPieces.wall);
    board[25][3]  = boardPieces.dot;
    board[25][6]  = boardPieces.dot;
    board[25][9]  = boardPieces.dot;
    board[25][18] = boardPieces.dot;
    board[25][21] = boardPieces.dot;
    board[25][24] = boardPieces.dot;

    board[26]     = new Array(boardWidth).fill(boardPieces.dot);
    board[26][0]  = boardPieces.wall;
    board[26][7]  = boardPieces.wall;
    board[26][8]  = boardPieces.wall;
    board[26][13] = boardPieces.wall;
    board[26][14] = boardPieces.wall;
    board[26][19] = boardPieces.wall;
    board[26][20] = boardPieces.wall;
    board[26][boardWidth-1] = boardPieces.wall;

    board[27]     = new Array(boardWidth).fill(boardPieces.wall);
    board[27][1]  = boardPieces.dot;
    board[27][12] = boardPieces.dot;
    board[27][15] = boardPieces.dot;
    board[27][26] = boardPieces.dot;

    board[28]     = new Array(boardWidth).fill(boardPieces.wall);
    board[28][1]  = boardPieces.dot;
    board[28][12] = boardPieces.dot;
    board[28][15] = boardPieces.dot;
    board[28][26] = boardPieces.dot;

    board[29]    = new Array(boardWidth).fill(boardPieces.dot);
    board[29][0] = boardPieces.wall;
    board[29][boardWidth-1] = boardPieces.wall;
    board[boardHeight-1] = new Array(boardWidth).fill(boardPieces.wall);

    for (let i=0; i<boardHeight; i++) {
        for (let j=0; j<boardWidth; j++) {
            if (board[i][j] === boardPieces.dot) {
                numDots++;
            } else if (board[i][j] === boardPieces.candy) {
                numCandies++;
            }
        }

    }
    return board;
}

function getTile(n) {
    return n*tileSize;
}

function clearTile() {
    switch (board[pacmanI][pacmanJ]) {
        case boardPieces.dot:
            score += dotScore;
            numDots--;
            break;
        case boardPieces.candy:
            score += candyScore;
            numCandies--;
            break;
        case boardPieces.wall:
            return;
        default:
            break;
    }
    board[pacmanI][pacmanJ] = boardPieces.empty;
    context.fillStyle = "#000000";
    context.beginPath();
    context.rect(getTile(pacmanJ), getTile(pacmanI), tileSize, tileSize);
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
    for (let i=boardPieces.wall; i<boardHeight; i++) {
        for (let j=boardPieces.wall; j<boardWidth; j++) {
            switch (board[i][j]) {
                case boardPieces.dot:   drawDot(i, j);   break;
                case boardPieces.candy: drawCandy(i, j); break;
                // case boardPieces.wall:  drawCandy(i, j); break;
            }
        }
    }
}

function drawPacman(direction) {
    switch (direction) {
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

function drawClosedPacman(draw_remove_, direction) {
    let i, j;
    switch (direction) {
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
    drawClosedPacman(1, directions.right);

    setTimeout(function() {
        drawClosedPacman(0, directions.right);
        pacmanJ = (++pacmanJ)%boardWidth;
        drawPacman(directions.right);
        setTimeout(move, pacmanSpeed);
    }, pacmanSpeed);
}

function moveLeft() {
    drawClosedPacman(1, directions.left);

    setTimeout(function() {
        drawClosedPacman(0, directions.left);
        pacmanJ = pacmanJ ? pacmanJ-1 : boardWidth;
        drawPacman(directions.left);
        setTimeout(move, pacmanSpeed);
    }, pacmanSpeed);
}

function moveUp() {
    drawClosedPacman(1, directions.up);

    setTimeout(function() {
        drawClosedPacman(0, directions.up);
        pacmanI = (--pacmanI)%boardHeight;
        drawPacman(directions.up);
        setTimeout(move, pacmanSpeed);
    }, pacmanSpeed);
}

function moveDown() {
    drawClosedPacman(1, directions.down);

    setTimeout(function() {
        drawClosedPacman(0, directions.down);
        pacmanI = (++pacmanI)%boardHeight;
        drawPacman(directions.down);
        setTimeout(move, pacmanSpeed);
    }, pacmanSpeed);
}

function canMove(newDirection) {
    switch (newDirection) {
        case directions.right:
            if (board[pacmanI][pacmanJ + 1] === boardPieces.wall) {
                return false;
            }
            break;
        case directions.left:
            if (board[pacmanI][pacmanJ - 1] === boardPieces.wall) {
                return false;
            }
            break;
        case directions.up:
            if (board[pacmanI - 1][pacmanJ] === boardPieces.wall) {
                return false;
            }
            break;
        case directions.down:
            if (board[pacmanI + 1][pacmanJ] === boardPieces.wall) {
                return false;
            }
    }
    return true;
}

function isOppositeDirection(direction) {
    switch (currentDirection) {
        case directions.left:
            if (direction === directions.right) {
                return true;
            }
            break;
        case directions.right:
            if (direction === directions.left) {
                return true;
            }
            break;
        case directions.up:
            if (direction === directions.down) {
                return true;
            }
            break;
        case directions.down:
            if (direction === directions.up) {
                return true;
            }
            break;
    }
    return false;
}

function gameOver() {
    return numCandies + numDots === 0;
}
function move() {
    if (gameOver()) {
        return;
    }

    if (isOppositeDirection(nextDirection)) {
        currentDirection = nextDirection;
    }

    if (canMove(nextDirection)) {
        currentDirection = nextDirection;
    }

    if (!canMove(currentDirection)) {
        setTimeout(move, pacmanSpeed);
        return;
    }

    clearTile();
    switch (currentDirection) {
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
    /* start main loop */
    $("#startGameButton").hide();
    startGameSound.play();
    setTimeout(move, 4000);
}

function initializeGame() {
    const backgroundImage = new Image();
    backgroundImage.src = "./images/background.png";

    backgroundImage.onload = function() {
        /* draw background */
        context.drawImage(backgroundImage, 0, 0, 560, 620);

        /* create 2d array with dots and candies */
        createBoard();

        /* draw array on background */
        drawBoardPieces();

        /* draw pac-man in initial tile */
        drawPacman(currentDirection);
    };
}

document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowUp':
            nextDirection = directions.up; break;
        case 'ArrowDown':
            nextDirection = directions.down; break;
        case 'ArrowLeft':
            nextDirection = directions.left; break;
        case 'ArrowRight':
            nextDirection = directions.right;
    }
};

function loadAssets() {
    pacmanRight     = new Image();
    pacmanLeft      = new Image();
    pacmanDown      = new Image();
    pacmanUp        = new Image();
    pacmanRight.src = "./images/pacman_right.png";
    pacmanDown.src  = "./images/pacman_down.png";
    pacmanLeft.src  = "./images/pacman_left.png";
    pacmanUp.src    = "./images/pacman_up.png";
    startGameSound  = new Audio("./sounds/pacman_beginning.wav");
}

$(document).ready(function() {
    canvas  = document.getElementById("canvas");
    context = canvas.getContext("2d");
    loadAssets();
    initializeGame();
});

