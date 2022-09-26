// * 연속 부분수열 1

// 수열의 원소값은 1,000을 넘지 않는 자연수이다.

function solution1(m, arr) {
  let answer = 0;
  let temp = 0;
  let [p1, p2] = [0, 0];

  while (p1 < arr.length && p2 < arr.length) {
    temp += arr[p2];
    if (temp === m) {
      answer++;
      p2 = p1++ + 1;
      temp = 0;
    } else if (temp > m) {
      p2 = p1++ + 1;
      temp = 0;
    } else p2++;
  }

  return answer;
}

function solution2(m, arr) {
  let answer = 0;
  let temp = 0;
  let p1 = 0;

  for (let p2 = 0; p2 < arr.length; p2++) {
    temp += arr[p2];
    if (temp === m) answer++;
    while (temp >= m) {
      temp -= arr[p1++];
      if (temp === m) answer++;
    }
  }

  return answer;
}

//* 입력예제
let a = [1, 2, 1, 3, 1, 1, 1, 2];

//* 출력예제
// 3
console.log(solution1(6, a));
console.log(solution2(6, a));
