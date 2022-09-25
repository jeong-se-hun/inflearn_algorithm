// * 두 배열 합치기
// 첫 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
// 두 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
// 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다..

function solution1(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function solution2(arr1, arr2) {
  let answer = [];
  let [p1, p2] = [0, 0];
  const n = arr1.length + arr2.length;

  for (let i = 0; i < n; i++) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
      if (p1 === arr1.length) {
        return (answer = [...answer, ...arr2.slice(p2)]);
      }
    } else {
      answer.push(arr2[p2++]);
      if (p2 === arr2.length) {
        return (answer = [...answer, ...arr1.slice(p1)]);
      }
    }
  }

  return answer;
}

//* 입력예제
let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];

//* 출력예제
// 1 2 3 3 5 6 7 9

console.log(solution1(a, b));
console.log(solution2(a, b));
