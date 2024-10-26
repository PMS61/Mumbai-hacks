import numpy as np
import random
from queue import PriorityQueue
import json

v = np.array([0.9, 0.001, 0.02, 0.99, 0.7])

def min_max_normalize(matrix):
    # Convert the input list to a NumPy array
    np_matrix = np.array(matrix)
    
    # Find the minimum and maximum values in the array
    min_val = np_matrix.min()
    max_val = np_matrix.max()
    
    # Avoid division by zero if all values are the same
    if min_val == max_val:
        return np.zeros_like(np_matrix)  # Return a matrix of zeros

    # Normalize the array
    normalized_matrix = (np_matrix - min_val) / (max_val - min_val)
    
    return normalized_matrix

def softmax_2d(matrix):
    # Subtract the max for numerical stability
    e_x = np.exp(matrix - np.max(matrix, axis=1, keepdims=True))
    return e_x / np.sum(e_x, axis=1, keepdims=True)

def gen(n, m, f, file):
  visited = np.zeros((n, m, f), dtype=bool)
  out = np.zeros((n, m, f), dtype=int)

  maxi = 3* m*n


  for i in range(f):
    if (random.randint(0, 1) < 0.1):
      for x in range(n):
        for y in range(m):
          out[x][y][i] = random.randint(0, maxi)

      continue
    # multisource bfs
    q = PriorityQueue()

    # generate random sources
    sources = []
    rand = np.random.choice(np.arange(1, 4), p=[0.5, 0.35, 0.15])
    for j in range(rand):
      x = random.randint(0, n-1)
      y = random.randint(0, m-1)
      sources.append((x, y))
      q.put((0, x, y))
    
    while not q.empty():
      d, x, y = q.get()
      if visited[x][y][i]:
        continue
      visited[x][y][i] = True
      out[x][y][i] = maxi - d

      for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
        nx, ny = x+dx, y+dy
        if nx >= 0 and nx < n and ny >= 0 and ny < m and not visited[nx][ny][i]:
          q.put((d+np.random.choice(np.arange(1, 5), p=[0.40, 0.35, 0.15, 0.5]), nx, ny))

  for i in range(f):
    mini = np.min(out[:,:,i])
    out[:,:,i] -= mini

  new_grid = np.zeros((n, m), dtype=float)
  for i in range(n):
    for j in range(m):
      new_grid[i, j] = np.dot(out[i, j, :], v)

  new_grid = min_max_normalize(new_grid)

  arr = new_grid.tolist()
  json_str = json.dumps(arr)
  with open(file, 'w') as f:
    f.write(json_str)
  return out

grid = gen(29, 16, 5, 'multisource_bfs.txt')
# multiply the grid[i, j, :] by the vector v

print("grid", grid[:,:,0])

