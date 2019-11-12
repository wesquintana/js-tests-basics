//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2";

function camelCase(str) {
  let newStr = "";
  let ccArr = str.split(" ");
  //turn the first character of every word but the first to Upper case
  for (let i = 0; i < ccArr.length; i++) {
    let thisWord = ccArr[i];
    if (i == 0) {
      newStr += thisWord.toLowerCase();
    } else {
      newStr += thisWord[0].toUpperCase() + thisWord.slice(1);
    }
  }
  return newStr;
}
camelCase(str);
