/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const lines = points.map(e => e[0]);
    lines.sort(function(a, b){return a - b});
    let max = 0;
    for(let i = 0; i < lines.length - 1; i++) {
        const w = lines[i + 1] - lines[i];
        if(w > max) max = w;
    }
    return max;
};