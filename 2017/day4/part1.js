module.exports = input => result(input);

function result(s) {
  let count = 0,
    line;

  for (let i in s) {
    line = s[i].split(' ');
    do word = line.pop()
    while (line.indexOf(word) === -1 && line.length > 0)
    if (line.length === 0) count++
  }

  return count;
}
