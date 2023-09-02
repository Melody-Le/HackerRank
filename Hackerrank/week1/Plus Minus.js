/*
Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
*/

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else zero++;
  }
  const positiveRatio = positive / arr.length;
  const negativeRatio = negative / arr.length;
  const zeroRatio = zero / arr.length;
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

plusMinus([2, 1, 0, -2, -4]);
