/*
Usage: in Grind75-w1-two-sum Solution on Leetcode
Link to study:
https://www.youtube.com/watch?v=hLgUTM3FOII
Link Usage on Leetcode: ( O(N))
https://leetcode.com/problems/two-sum/solutions/3000141/javascript-w-map-time-space-o-n/
*/

const a = new Map([
  [1, 'one'],
  [2, 'two'],
]);

a.set('name', 'Mui');
a.set('age', '30');
a.set('job', 'Architect');
console.log(a);
a.delete('job');
console.log(a);
const checkKey = a.has('name');
console.log(checkKey);
const checkSize = a.size;
console.log(checkSize);
a.clear();
console.log(a);
