module.exports = input => result(input);

function result(s) {
  let count = 0

  for (let i in s) {
    let line = s[i].split('\t').sort((a, b) => +a - +b)
    do number = line.pop()
    while (!(solution = line.find(c => number % c === 0)))
    count += number / solution;
  }

  return count;
}
