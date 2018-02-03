#!/usr/bin/env node

let n = process.argv[2] || 3;
let i = 0;
function printBracketCombinations(open, close, s) {
  i++;
  n = parseInt(n);
  console.log('START')
  console.log('stack: ', i);
  console.log('open close: ', open, close, s);
  if (open === 0 && close === 0) {
    console.log(s);
    return;
  } 
  if (open > 0) {
    console.log('open > 0', open);
    printBracketCombinations(open-1, close + 1, s + '{')
  }
  if (close > 0) {
    console.log('close > 0', close);
    printBracketCombinations(open, close - 1, s + '}')
  }
  console.log('END')
}

function bracketCombos(n) {
  printBracketCombinations(n, 0, '');
}

printBracketCombinations(n, 0, '');
