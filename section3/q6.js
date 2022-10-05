// * 학급 회장(해쉬)

// 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.

function solution1(s) {
  const arr = [...new Set(s)];
  let answer = '';
  let maxLength = 0;

  arr.forEach(t => {
    const regex = new RegExp(`${t}`, 'gi');
    const tLength = s.match(regex).length;

    if (maxLength < tLength) {
      maxLength = tLength;
      answer = t;
    }
  });

  return answer;
}

function solution2(s) {
  let sH = new Map();

  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  return [...sH.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
}

// * 입력예제
let str = 'BACBACCACCBDEDE';

//* 출력예제
// C
console.log(solution1(str));
console.log(solution2(str));
