module.exports = input => result(input);

function result(s) {
  let count = 0, line

  for (let i in s) {
    line = s[i].split('\t')
    for (let j in line) {
      line[j] = +line[j]
    }
    count += Math.max(...line) - Math.min(...line)
  }

  return count;
}
