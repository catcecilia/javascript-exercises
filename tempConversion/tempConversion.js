const ftoc = function(oldTemp) {
  let newTemp = Math.round(((oldTemp-32)*5/9)*10)/10;
  return newTemp
}

const ctof = function(oldTemp) {
  let newTemp = Math.round(((oldTemp/5*9)+32)*10)/10; 
  return newTemp
}

module.exports = {
  ftoc,
  ctof
}
