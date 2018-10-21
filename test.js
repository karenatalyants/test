  const canvas = document.getElementById('board');
  const context = canvas.getContext('2d');

  canvas.width = 1400;
  canvas.height = 700;



  let x = 10;
  let y = 10;
  let width = 50;
  let height = 50;
  let xDelta = 10;
  let yDelta = 10;

  const reverseDirX = function() {
    xDelta = xDelta * (-1);
  }
  const reverseDirY = function() {
    yDelta = yDelta * (-1);
  }

  const move = function() {
    context.fillStyle = '#666ad1';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#001970';
    context.fillRect(x, y, width, height);
    if (x >= canvas.width - 50 || x <= 0) {
      reverseDirX();
    }
    if (y >= canvas.height - 50 || y <= 0) {
      reverseDirY();
    }
    x = x + xDelta;
    y = y + yDelta;
  }

  const loop = function() {
    move();
    requestAnimationFrame(loop);
  };

  loop();