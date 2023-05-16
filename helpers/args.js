const getArgs = (args) => {
  const res = {}

  const [, , ...rest] = args

  rest.forEach((val, i, array) => {
    if (val.charAt(0) === '-') {
      if (i === array.length - 1) {
        res[val.substring((1))] = true
      } else if (array[i + 1].charAt(0) !== '-') {
        res[val.substring((1))] = array[i + 1];
      } else {
        res[val.substring((1))] = true
      }
    }
  })

  return res;
}

export { getArgs }
