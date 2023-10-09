
//get data and split in array
const T = readline();
const splitted = T.split(' ');

//add n times the same caractère at the end of a string
function addXChar(_res, _nb, _char){
  while (_nb > 0){
      _nb--
      _res += _char
  }
  return _res
}

//regex, allows you to identify special cara "space, backslash, singlequote & newline"
res = "";
const sp = /sp$/;
const bs = /bS$/;
const sq = /sQ$/;
const nl = /nl$/;

for(e of splitted){
  nb = 0
  char = ''
  if(sp.test(e)){ //identify space
    nb = parseInt(e.slice(0,-2))
    char = ' '
  } else if(bs.test(e)){ //identify backslash
    nb = parseInt(e.slice(0,-2))
    char = '\\'
  } else if(sq.test(e)){ //identify single quote
    nb = parseInt(e.slice(0,-2))
    char = '\''
  } else if(nl.test(e)){ //identify new line
    nb = parseInt(e.slice(0,-2)) // if newline, print current line and reset "res"
    char = '\n'
    res = addXChar(res, nb, char) // add char to the "res"  
    console.log(res)
    res = ""  
  } else {
    nb = parseInt(e.slice(0,-1))
    char = e.charAt(e.length - 1);
  }
  res = addXChar(res, nb, char) 
}
console.log(res) 

