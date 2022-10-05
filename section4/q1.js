// * 올바른 괄호
// 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.

function solution(s) {
  let answer = 'YES';
  let tempStack = [];

  for (let x of s) {
    if (x === '(') tempStack.push(x);
    else if (x === ')') {
      if (tempStack.length === 0) return 'NO';
      tempStack.pop();
    }
  }

  if (tempStack.length > 0) return 'NO';
  return answer;
}

//* 입력예제
let a = '(()(()))(()';

//* 출력예제
// NO;

console.log(solution(a));
