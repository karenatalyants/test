  const canvas = document.getElementById('board');
  const context = canvas.getContext('2d');

  canvas.width = 1400;
  canvas.height = 700;

  // returns a random number between 1 and the given number inclusively
  const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
  };

  // returns a random hexadecimal color code
  const colorRandomizer = function() {
    const hexColorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';
    const random15 = function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }
    for (let j = 1; j <= 6; j++) {
      color = color + hexColorArr[random15(0, 15)];
    }
    return color;
  };


  let enemies = [];

  // creates the boxes, of random position and random color, as many as the number given
  const createBoxes = function(count, canvasWidth, canvasHeight) {



    let i = 0;
    for (let i = 0; i < count; i++) {

      enemies[i] = {
        x: rand(canvas.width - 50),
        y: rand(canvas.height - 50),
        xDelta: 10,
        yDelta: 10,
        width: 50,
        height: 50,
        color: colorRandomizer(),
        reverseDirX: function() {
          this.xDelta = this.xDelta * (-1);
        },
        reverseDirY: function() {
          this.yDelta = this.yDelta * (-1);
        },
        draw: function() {
          context.fillStyle = '#bbdefb';
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = this.color;
          context.fillRect(this.x, this.y, this.width, this.height);
        },
        update: function() {
          context.fillStyle = '#bbdefb';
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = this.color;
          context.fillRect(this.x, this.y, this.width, this.height);


          if (this.x >= canvas.width - this.width || this.x <= 0) {
            this.reverseDirX();
          }

          if (this.y >= canvas.height - this.height || this.y <= 0) {
            this.reverseDirY();
          }

          this.x = this.x + this.xDelta;
          this.y = this.y + this.yDelta;


        }
      }
    }

    return enemies;
  };


  createBoxes(25, canvas.width, canvas.height);

  console.log(enemies);


  const draw = function() {
    for (let d = 0; d < enemies.length; d++) {
      const obj = enemies[d];
      obj.draw();
    }
  }

  const update = function() {
    for (let d = 0; d < enemies.length; d++) {
      const obj = enemies[d];
      obj.update();
    }
  }

  const loop = function() {
    draw();
    update();
    requestAnimationFrame(loop);
  };

  loop()