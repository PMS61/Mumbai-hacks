// Define the minMaxNormalize function
export default function minMaxNormalize(matrix) {
  const flatMatrix = matrix.flat(); // Flatten to find min and max
  const minVal = Math.min(...flatMatrix);
  const maxVal = Math.max(...flatMatrix);

  // Avoid division by zero if all values are the same
  if (minVal === maxVal) {
    return matrix.map(row => row.map(() => 0)); // Return matrix of zeros
  }

  // Normalize the matrix
  return matrix.map(row => row.map(value => (value - minVal) / (maxVal - minVal)));
}

// Define the main grid generation function
function generateGrid(out, v) {
  const n = out.length;
  const m = out[0].length;
  const k = out[0][0].length;
  const newGrid = Array.from({ length: n }, () => Array(m).fill(0)); // Initialize grid with zeros

  // Populate the grid with dot products
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let dotProduct = 0
      for (let l = 0; l < k; l++) {
        dotProduct += out[i][j][l] * v[l];
      }
      newGrid[i][j] = dotProduct;
    }
  }

  // Normalize the grid
  return minMaxNormalize(newGrid);
}

