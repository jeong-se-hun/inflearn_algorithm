// * 최대 매출

// N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.

// function solution(k, arr) {
//   let answer = 0;
//   let p2 = k;
//   for (let p1 = 0; p1 < arr.length - (k - 1); p1++) {
//     answer = Math.max(
//       answer,
//       arr.slice(p1, p2++).reduce((a, b) => a + b)
//     );
//   }
//   return answer;
// }

function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  for (let j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

//* 입력예제
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

//* 출력예제
// 56
// console.log(solution(3, a));
console.log(solution(3, a));
