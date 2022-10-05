// * 아나그램(해쉬)

// 첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다.
// 단어의 길이는 100을 넘지 않습니다

function solution1(str1, str2) {
  return [...str1].sort().join('') === [...str2].sort().join('') ? 'YES' : 'NO';
}

function solution2(str1, str2) {
  let sH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }

  return 'YES';
}

//* 입력예제 1
// let a = 'AbaAeCe';
// let b = 'baeeACA';

//* 출력예제 1
// YES

//* 입력예제 2
let a = 'abaCC';
let b = 'Caaab';

//* 출력예제 2
// NO
console.log(solution1(a, b));
console.log(solution2(a, b));
