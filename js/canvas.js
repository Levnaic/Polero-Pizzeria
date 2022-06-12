const canvas = document.getElementById('myCanvas');
canvas.width = 200;

const ctx = canvas.getContext('2d');

/*pravi put*/

function praviPut(x, width, laneCount = 3) {
  const left = x - width / 2;
  const right = x + width / 2;
  const infinity = 1000000;
  const top = -infinity;
  const bottom = infinity;
}
