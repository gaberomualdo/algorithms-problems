/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const players = ["A", "B"];
    const grid = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    for(let i = 0; i < moves.length; i++) {
        grid[moves[i][0]][moves[i][1]] = i % 2;
    }
    for(let n = 0; n < 3; n++){
        if(grid[n][0] !== -1 && grid[n][0] === grid[n][1] && grid[n][1] === grid[n][2]) {
            return players[grid[n][0]];
        }
        if(grid[0][n] !== -1 && grid[0][n] === grid[1][n] && grid[1][n] === grid[2][n]) {
            return players[grid[0][n]];
        }
    }
    if(grid[0][0] !== -1 && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
        return players[grid[0][0]];
    }
    if(grid[2][0] !== -1 && grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) {
        return players[grid[2][0]];
    }
    return moves.length === 9 ? "Draw" : "Pending";
};