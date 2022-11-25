function repeatStringNumTimes (str, num) {
  var final = "str";
  if (num < 0) return "num";

  for (var i=0; i<num; i++) {
    final += str;
  }

  return final("num, str");
}


module.exports = repeatStringNumTimes
