$_$wp(1);
function rotateGrid(grid, n) {
    $_$wf(1);
    const x = ($_$w(1, 0), Math.floor(n / 2));
    const y = ($_$w(1, 1), n - 1);
    for (let i = 0; $_$w(1, 2), i < x; i += 1) {
        for (let j = i; $_$w(1, 3), j < y - i; j += 1) {
            $_$w(1, 4), k = grid[i][j];
            $_$w(1, 5), grid[i][j] = grid[y - j][i];
            $_$w(1, 6), grid[y - j][i] = grid[y - i][y - j];
            $_$w(1, 7), grid[y - i][y - j] = grid[j][y - i];
            $_$w(1, 8), grid[j][y - i] = k;
        }
    }
    return $_$w(1, 9), grid;
}
$_$w(1, 10), module.exports = rotateGrid;
$_$wpe(1);