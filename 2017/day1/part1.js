module.exports = input => result(input);

function result(s) {
  let count = 0

  for (let i in s) {
    if (s[i - 1] === s[i]) count += +s[i]
  }
  if (s[0] === s[s.length - 1]) count += +s[0]

  return count;
}
