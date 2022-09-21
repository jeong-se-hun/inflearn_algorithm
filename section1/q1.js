// * 회문 문자열
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

function solution(s) {
  s = s.toUpperCase();
  return s === s.split('').reverse().join('') ? 'YES' : 'NO';
}

console.log(solution('goooG'));
