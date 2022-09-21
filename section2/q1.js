// * 자릿수의 합
// 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
//각 자연수의 크기는 10,000,000를 넘지 않는다.

function solution(n, arr) {
  const result = { maxSum: 0, idx: 0 };

  for (let i = 0; i < n; i++) {
    const sum = arr[i]
      .toString()
      .split('')
      .reduce((a, b) => +a + +b);

    if (sum >= result.maxSum) [result.maxSum, result.idx] = [sum, arr[i]];
  }
  return result.idx;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
