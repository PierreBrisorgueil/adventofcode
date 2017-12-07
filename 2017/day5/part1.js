module.exports = input => result(input);

function result(s) {
  let count = 0,
    i = 0,
    nextJump;

  do {
    s[i] = +s[i]
    nextJump = s[i]
    s[i]++
    i += nextJump
    count++
  } while (i < s.length && i >= 0)

  return count;
}
