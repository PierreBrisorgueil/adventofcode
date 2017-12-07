module.exports = input => result(input);

function result(s) {
  let count = 0,
    line;

  // clean data
  for (let i in s) {
    line = s[i].split('->')
    s[i] = {
      id: line[0].split(' ')[0],
      weight: line[0].split(' ')[1].slice(1, -1),
      childlist: line[1] ? line[1].slice(1).split(', ') : []
    }
  }

  return getParents(s).god;
}


function getParents(list) {
  let parentid,
    god;

  for (let i in list) {
    parentid = list.filter(v => v.childlist.indexOf(list[i].id) !== -1)[0]
    parentid ? list[i].parentid = parentid.id : god = list[i].id
  }
  
  return {
    list: list,
    god: god
  };
}
