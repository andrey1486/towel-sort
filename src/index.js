
module.exports = function towelSort(matrix) {
    
  let res = [];
    
  if (arguments.length === 0) res = [];
  else {
    for (let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) res.push(...matrix[i]);
    else res.push(...matrix[i].sort((a, b) => b - a ))
    }
  }
    
  return res
}
