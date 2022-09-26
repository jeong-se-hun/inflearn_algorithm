// * 공통원소 구하기

// 첫 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
// 두 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
// 각 집합의 원소는 1,000,000,000이하의 자연수입니다.

function solution1(arr1, arr2) {
  const arr = [...arr1, ...arr2].sort((a, b) => a - b);
  return arr.filter((n, i) => arr[i] === arr[i + 1]);
}

function solution2(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let [p1, p2] = [0, 0];
  let answer = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
      continue;
    }
    arr1[p1] < arr2[p2] ? p1++ : p2++;
  }
  return answer;
}

//* 입력예제
let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

//* 출력예제
// 2 3 5
console.log(solution1(a, b));
console.log(solution2(a, b));
