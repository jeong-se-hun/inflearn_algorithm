// * 괄호문자제거

// 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  answer = stack.join('');
  return answer;
}

//* 입력예제
let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

//* 출력예제
// EFLM
console.log(solution(str));
