// * 졸업 선물
// 첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.
// 두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다.
// 상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다

function solution(m, product) {
  const n = product.length;
  let answer = 0;

  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let count = 1;

    for (let j = 0; j < n; j++) {
      if (i !== j && money - (product[j][0] + product[j][1]) < 0) break;
      if (i !== j && money - (product[j][0] + product[j][1]) >= 0) {
        money -= product[j][0] + product[j][1];
        count++;
      }
    }

    answer = Math.max(answer, count);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
