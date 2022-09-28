// * 연속 부분수열 2

// 수열의 원소값은 1,000을 넘지 않는 자연수이다.

function solution1(m, arr) {
  let [answer, temp] = [0, 0];
  let [p1, p2] = [0, 0];

  while (p1 < arr.length) {
    temp += arr[p2++];
    if (temp <= m) answer++;
    else {
      p2 = ++p1;
      temp = 0;
    }
  }

  return answer;
}
function solution2(m, arr) {
  let [answer, temp] = [0, 0];
  let p1 = 0;

  for (let p2 = 0; p2 < arr.length; p2++) {
    temp += arr[p2];
    while (temp > m) {
      temp -= arr[p1++];
    }
    answer += p2 - p1 + 1;
  }

  return answer;
}

// * 입력예제
let a = [1, 3, 1, 2, 3, 3, 1];

//* 출력예제
// 10
console.log(solution1(5, a));
console.log(solution2(5, a));
