let cats=["Milo","Otis","Garfield"]
function destructivelyAppendCat(){
  cats.push("Ralph")
}
function destructivelyPrependCat(){
  cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
  cats.pop()
}
function destructivelyRemoveFirstCat(){
  cats.shift()
}
function appendCat(){
  let copyOfCats=[...cats]
copyOfCats.push("Broom")
return copyOfCats
}
function prependCat(){
  let copyOfCats=[...cats]
  copyOfCats.unshift("Arnold")
  return copyOfCats
}
function removeLastCat(){
  let copyOfCats=[...cats]
  copyOfCats.pop()
  return copyOfCats
}
function removeFirstCat(){
  let copyOfCats=[...cats]
  copyOfCats.shift()
  return copyOfCats
}