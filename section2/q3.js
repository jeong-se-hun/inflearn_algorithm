// * 멘토링
//  첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
// 두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일
// 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
// 만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이
function solution(test) {
  let answer = 0;

  for (let j = 0; j < test[0].length - 1; j++) {
    for (let k = j + 1; k < test[0].length; k++) {
      for (let p = 1; p < test.length; p++) {
        if (test[p].indexOf(test[0][j]) > test[p].indexOf(test[0][k])) break;
        if (p === test.length - 1) answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
