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