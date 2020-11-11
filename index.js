var arr = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '_', '!', '@', '#', '$', '%', '^', '&', '*', '/', '\\', '(', ')', '?', '.', ';', ':', '|', '{', '}', '\'', '\"'];

var decode = (num) => {
  var toReturn = "";
  for (var i = 0; i < num.length; i++) {
    if (num[i] == 0 && i%2 == 0) {
      toReturn += arr[num[i + 1]];
      i++;
    } else {
      toReturn += arr[num[i] + num[i + 1]]; 
      i++;
    }
  }
  return toReturn;
}

var encode = (str) => {
  var toReturn = "";
  for (var i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]).toString().length == 1) {
      toReturn += '0' + arr.indexOf(str[i]).toString(); 
    } else {
      toReturn += arr.indexOf(str[i]).toString();
    }
  }
  return toReturn;
}

module.exports = {
  defaultArray: arr,
  encode: encode,
  decode: decode
}
