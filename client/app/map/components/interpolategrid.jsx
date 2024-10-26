"use client"

export default function GenerateInterpolatedGrid(originalGrid, scalar = 5) {
  console.log(
    "originalGrid: ", originalGrid
  )
  const n = originalGrid.length;
  const m = originalGrid[0].length;
  const newGrid = Array.from({ length: scalar * n }, () => Array(scalar * m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // Corner values from the original grid
      const topLeft = originalGrid[i][j];
      const topRight = j < m - 1 ? originalGrid[i][j + 1] : topLeft;
      const bottomLeft = i < n - 1 ? originalGrid[i + 1][j] : topLeft;
      const bottomRight = i < n - 1 && j < m - 1 ? originalGrid[i + 1][j + 1] : topLeft;

      // Fill a scalar x scalar block for each (i, j) cell in the original grid
      for (let di = 0; di < scalar; di++) {
        for (let dj = 0; dj < scalar; dj++) {
          // Fractional distances
          const fracX = dj / (scalar - 1);
          const fracY = di / (scalar - 1);

          // Bilinear interpolation formula
          const interpolatedValue =
            (1 - fracX) * (1 - fracY) * topLeft +
            fracX * (1 - fracY) * topRight +
            (1 - fracX) * fracY * bottomLeft +
            fracX * fracY * bottomRight;

          newGrid[scalar * i + di][scalar * j + dj] = interpolatedValue;
        }
      }
    }
  }

  return newGrid;
}
