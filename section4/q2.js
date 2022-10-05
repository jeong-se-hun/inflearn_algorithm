// * 괄호문자제거

// 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

function solution(s) {
  let answer = [];

  for (let x of s) {
    if (x === ')') {
      while (answer.pop() !== '(');
    } else answer.push(x);
  }

  return answer.join('');
}

//* 입력예제
let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

//* 출력예제
// EFLM
console.log(solution(str));
