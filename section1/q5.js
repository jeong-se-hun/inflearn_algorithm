// * 문자열 압축
// 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

function solution(s) {
  return [...new Set(s)]
    .map(arr => {
      const regex = new RegExp(`${arr}`, 'g');
      if (s.match(regex).length === 1) return arr;
      else return arr + s.match(regex).length;
    })
    .join('');
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
