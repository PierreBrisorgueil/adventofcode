module.exports = input => result(input);

function result(s){
  // find loop state
  const res = loopDetect(s);
  // get the count of the infinit loop
  return loopDetect(res.state).count;
}

function loopDetect(s) {
  let count = 0,
    i = 0,
    blocks = 0,
    states= [];

  // clean data
  s = s.split('\t').map(v => +v)

  do {
    // save state
    states.push(s.join('\t'))

    // block distribution
    i = s.indexOf(Math.max(...s))
    blocks = s[i]
    s[i] = 0
    do {
      i++
      if (i > s.length - 1) i = 0
      s[i]++
      blocks--
    } while (blocks !== 0)

    count++
  } while (states.indexOf(s.join('\t')) === -1)

  return {
    count: count,
    state: s.join('\t')
  };
}
