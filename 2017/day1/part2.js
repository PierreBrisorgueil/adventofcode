module.exports = input => result(input);

function result(s) {
  let count = 0
  let position = 0
  const offset = s.length / 2

  for (let i in s) {
    if ((i - offset) >= 0) position = i - offset
    else position = s.length + (i - offset)
    if (s[i] === s[position]) {
      count += +s[i]
    }
  }

  return count;
}
