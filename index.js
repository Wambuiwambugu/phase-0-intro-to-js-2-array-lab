// Write your solution here!
 const cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(name) {
    return cats.push(name);
 }
 function destructivelyPrependCat(name) {
    return cats.unshift(name);
 }
 function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
 }
 function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
 }
 function appendCat(name) {
    const appends = [...cats,name];
    return appends;
 }
 function prependCat(name) {
    const prepends = [name,...cats];
    return prepends;
 }
 function removeLastCat() {
    return cats.slice(0,-1);
 }
 function removeFirstCat() {
    return cats.slice(1);
 }
