
exports.min = function min (array = 0) {
  if (array == 0) return 0;

  array = array.sort( (a,b) => {return a - b});
  if (array[0]) return array[0];
}

exports.max = function max (array = 0) {
  if (array == 0) return 0;
  
  array = array.sort( (a,b) => {return b - a});
  if (array[0]) return array[0];
}

exports.avg = function avg (array = 0) {
  if (array == 0) return 0;
  
  let sum = 0;
  array.forEach( (number) => { sum += number});

  return (sum / array.length);
}
