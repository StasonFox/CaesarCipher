function rot13(str) {
  let acc = "";
  let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      let index = arr.findIndex((a) => a === str[i]);
      acc += arr[index + 13] || arr[index - 13]
    }
    else {
      acc += str[i];
    }
  }
  return acc;
}

rot13("SERR PBQR PNZC");