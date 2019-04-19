var height = 31;
var width = 28;
var spotSize = 20;

var boardEnum = Object.freeze({"wall":0, "dot":1, "candy":2});

function createBoard() {
    var board = new Array(height);

    board[0]     = new Array(width).fill(boardEnum.wall);

    board[1]     = new Array(width).fill(boardEnum.dot);
    board[1][0]  = boardEnum.wall;
    board[1][13] = boardEnum.wall;
    board[1][14] = boardEnum.wall;
    board[1][width-1] = boardEnum.wall;

    board[2]     = new Array(width).fill(0);
    board[2][1]  = boardEnum.dot;
    board[2][6]  = boardEnum.dot;
    board[2][12] = boardEnum.dot;
    board[2][15] = boardEnum.dot;
    board[2][21] = boardEnum.dot;
    board[2][26] = boardEnum.dot;

    board[3]     = new Array(width).fill(0);
    board[3][1]  = boardEnum.candy;
    board[3][6]  = boardEnum.dot;
    board[3][12] = boardEnum.dot;
    board[3][15] = boardEnum.dot;
    board[3][21] = boardEnum.dot;
    board[3][26] = boardEnum.candy;

    board[4]     = new Array(width).fill(0);
    board[4][1]  = boardEnum.dot;
    board[4][6]  = boardEnum.dot;
    board[4][12] = boardEnum.dot;
    board[4][15] = boardEnum.dot;
    board[4][21] = boardEnum.dot;
    board[4][26] = boardEnum.dot;

    board[5]     = new Array(width).fill(1);
    board[5][0]  = boardEnum.wall;
    board[5][width-1] = boardEnum.wall;

    board[6]     = new Array(width).fill(0);
    board[6][1]  = boardEnum.dot;
    board[6][6]  = boardEnum.dot;
    board[6][9]  = boardEnum.dot;
    board[6][18] = boardEnum.dot;
    board[6][21] = boardEnum.dot;
    board[6][26] = boardEnum.dot;

    board[7]     = new Array(width).fill(0);
    board[7][1]  = boardEnum.dot;
    board[7][6]  = boardEnum.dot;
    board[7][9]  = boardEnum.dot;
    board[7][18] = boardEnum.dot;
    board[7][21] = boardEnum.dot;
    board[7][26] = boardEnum.dot;

    board[8]     = new Array(width).fill(1);
    board[8][0]  = boardEnum.wall;
    board[8][7]  = boardEnum.wall;
    board[8][8]  = boardEnum.wall;
    board[8][13] = boardEnum.wall;
    board[8][14] = boardEnum.wall;
    board[8][19] = boardEnum.wall;
    board[8][20] = boardEnum.wall;
    board[8][width-1] = boardEnum.wall;

    board[9]     = new Array(width).fill(0);
    board[9][6]  = boardEnum.dot;
    board[9][12] = boardEnum.dot;
    board[9][15] = boardEnum.dot;
    board[9][21] = boardEnum.dot;

    board[10]     = new Array(width).fill(0);
    board[10][6]  = boardEnum.dot;
    board[10][12] = boardEnum.dot;
    board[10][15] = boardEnum.dot;
    board[10][21] = boardEnum.dot;

    board[11]     = new Array(width).fill(0);
    board[11][6]  = boardEnum.dot;
    board[11][9]  = boardEnum.dot;
    board[11][10] = boardEnum.dot;
    board[11][11] = boardEnum.dot;
    board[11][12] = boardEnum.dot;
    board[11][13] = boardEnum.dot;
    board[11][14] = boardEnum.dot;
    board[11][15] = boardEnum.dot;
    board[11][16] = boardEnum.dot;
    board[11][17] = boardEnum.dot;
    board[11][18] = boardEnum.dot;
    board[11][21] = boardEnum.dot;

    board[12]     = new Array(width).fill(0);
    board[12][6]  = boardEnum.dot;
    board[12][9]  = boardEnum.dot;
    board[12][18] = boardEnum.dot;
    board[12][21] = boardEnum.dot;

    board[13]     = new Array(width).fill(0);
    board[13][6]  = boardEnum.dot;
    board[13][9]  = boardEnum.dot;
    board[13][18] = boardEnum.dot;
    board[13][21] = boardEnum.dot;

    board[14]     = new Array(width).fill(0);
    board[14][6]  = boardEnum.dot;
    board[14][7]  = boardEnum.dot;
    board[14][8]  = boardEnum.dot;
    board[14][9]  = boardEnum.dot;
    board[14][18] = boardEnum.dot;
    board[14][19] = boardEnum.dot;
    board[14][20] = boardEnum.dot;
    board[14][21] = boardEnum.dot;

    board[15]     = new Array(width).fill(0);
    board[15][6]  = boardEnum.dot;
    board[15][9]  = boardEnum.dot;
    board[15][18] = boardEnum.dot;
    board[15][21] = boardEnum.dot;

    board[16]     = new Array(width).fill(0);
    board[16][6]  = boardEnum.dot;
    board[16][9]  = boardEnum.dot;
    board[16][18] = boardEnum.dot;
    board[16][21] = boardEnum.dot;

    board[17]     = new Array(width).fill(0);
    board[17][6]  = boardEnum.dot;
    board[17][9]  = boardEnum.dot;
    board[17][10] = boardEnum.dot;
    board[17][11] = boardEnum.dot;
    board[17][12] = boardEnum.dot;
    board[17][13] = boardEnum.dot;
    board[17][14] = boardEnum.dot;
    board[17][15] = boardEnum.dot;
    board[17][16] = boardEnum.dot;
    board[17][17] = boardEnum.dot;
    board[17][18] = boardEnum.dot;
    board[17][21] = boardEnum.dot;

    board[18]     = new Array(width).fill(0);
    board[18][6]  = boardEnum.dot;
    board[18][9]  = boardEnum.dot;
    board[18][18] = boardEnum.dot;
    board[18][21] = boardEnum.dot;

    board[19]     = new Array(width).fill(0);
    board[19][6]  = boardEnum.dot;
    board[19][9]  = boardEnum.dot;
    board[19][18] = boardEnum.dot;
    board[19][21] = boardEnum.dot;

    board[20]     = new Array(width).fill(1);
    board[20][0]  = boardEnum.wall;
    board[20][width-1] = boardEnum.wall;
    board[20][13] = boardEnum.wall;
    board[20][14] = boardEnum.wall;

    board[21]     = new Array(width).fill(0);
    board[21][1]  = boardEnum.dot;
    board[21][6]  = boardEnum.dot;
    board[21][12] = boardEnum.dot;
    board[21][15] = boardEnum.dot;
    board[21][21] = boardEnum.dot;
    board[21][26] = boardEnum.dot;

    board[22]     = new Array(width).fill(0);
    board[22][1]  = boardEnum.dot;
    board[22][6]  = boardEnum.dot;
    board[22][12] = boardEnum.dot;
    board[22][15] = boardEnum.dot;
    board[22][21] = boardEnum.dot;
    board[22][26] = boardEnum.dot;

    board[23]     = new Array(width).fill(1);
    board[23][1]  = boardEnum.candy;
    board[23][0]  = boardEnum.wall;
    board[23][4]  = boardEnum.wall;
    board[23][5]  = boardEnum.wall;
    board[23][13] = boardEnum.wall;
    board[23][14] = boardEnum.wall;
    board[23][22] = boardEnum.wall;
    board[23][23] = boardEnum.wall;
    board[23][26] = boardEnum.candy;
    board[23][width-1] = boardEnum.wall;

    board[24]     = new Array(width).fill(0);
    board[24][3]  = boardEnum.dot;
    board[24][6]  = boardEnum.dot;
    board[24][9]  = boardEnum.dot;
    board[24][18] = boardEnum.dot;
    board[24][21] = boardEnum.dot;
    board[24][24] = boardEnum.dot;

    board[25]     = new Array(width).fill(0);
    board[25][3]  = boardEnum.dot;
    board[25][6]  = boardEnum.dot;
    board[25][9]  = boardEnum.dot;
    board[25][18] = boardEnum.dot;
    board[25][21] = boardEnum.dot;
    board[25][24] = boardEnum.dot;

    board[26]     = new Array(width).fill(1);
    board[26][0]  = boardEnum.wall;
    board[26][7]  = boardEnum.wall;
    board[26][8]  = boardEnum.wall;
    board[26][13] = boardEnum.wall;
    board[26][14] = boardEnum.wall;
    board[26][19] = boardEnum.wall;
    board[26][20] = boardEnum.wall;
    board[26][width-1] = boardEnum.wall;

    board[27]     = new Array(width).fill(0);
    board[27][1]  = boardEnum.dot;
    board[27][12] = boardEnum.dot;
    board[27][15] = boardEnum.dot;
    board[27][26] = boardEnum.dot;

    board[28]     = new Array(width).fill(0);
    board[28][1]  = boardEnum.dot;
    board[28][12] = boardEnum.dot;
    board[28][15] = boardEnum.dot;
    board[28][26] = boardEnum.dot;

    board[29]    = new Array(width).fill(1);
    board[29][0] = boardEnum.wall;
    board[29][width-1] = boardEnum.wall;

    board[height-1] = new Array(width).fill(0);
    return board;
}
function drawBoardPieces(board, context) {
    /* draw dots and candy */
    for (var i=boardEnum.wall; i<height; i++) {
        for (var j=boardEnum.wall; j<width; j++) {
            if (board[i][j] === boardEnum.dot) {
                context.beginPath();
                context.arc(spotSize/2 + j*spotSize, spotSize/2 +i*spotSize, 3, 0, 2 * Math.PI);
                context.fill();
            } else if (board[i][j] === boardEnum.candy) {
                context.beginPath();
                context.arc(spotSize/2 + j*spotSize, spotSize/2 +i*spotSize, 10, 0, 2 * Math.PI);
                context.fill();
            }
        }
    }
    /* draw pac-man */
}
function initBoard(board, context) {
    var img = new Image();
    img.src = "./images/background.png";

    img.onload = function() {
        context.drawImage(img, 0, 0, 560, 620);
        context.fillStyle = "#ffff00";
        board = createBoard();
        drawBoardPieces(board, context);
    };


}

$(document).ready(function() {
    var canvas  = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var board;
    initBoard(board, context);
});