module.exports = input => result(input);

function result(s) {
  let m = 1,
    x = 0,
    n = 0;

  do {
    m += 2;
    x++;
  } while ((n = m * m) < s)

  return Math.abs(x - (n - s)) + x;
}
