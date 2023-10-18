'use strict'

function getElementWidth (content, padding, border) {
  return +content.slice(0, -2) + (+padding.slice(0, -2) * 2) + (+border.slice(0, -2) * 2);
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200