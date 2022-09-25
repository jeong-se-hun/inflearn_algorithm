// * K번째 큰 수

// 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력
// 된다

function solution(n, k, card) {
  let sortArr = card.sort((a, b) => b - a);
  sortArr = [...new Set(sortArr)];
  return sortArr[0] + sortArr[1] + sortArr[1 + k];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
