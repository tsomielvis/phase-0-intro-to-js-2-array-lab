// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  const newArray = cats.slice();
  newArray.push(name);
  return newArray;
}
function prependCat(name) {
  const newArray = cats.slice();
  newArray.unshift(name);
  return newArray;
}
function removeLastCat() {
  return cats.slice(0, -1);
}
function removeFirstCat() {
  return cats.slice(1);
}
