// * 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다

function solution(s, t) {
  let answer = 0;
  let n = t.length;
  let temp = new Map();
  let tH = new Map();
  let p1 = 0;
  let idx = 0;

  for (let i = 0; i < n; i++) {
    if (temp.has(s[i])) temp.set(s[i], temp.get(s[i]) + 1);
    else temp.set(s[i], 1);
    if (tH.has(t[i])) temp.set(t[i], temp.get(t[i]) + 1);
    else tH.set(t[i], 1);
  }

  for (let p2 = n; p2 <= s.length; p2++) {
    for (let k of temp) {
      if (tH.get(k[0]) !== k[1]) break;

      idx++;
      if (idx === n) answer++;
    }

    if (temp.get(s[p1]) === 1) temp.delete(s[p1++]);
    else temp.set(s[p1], temp.get(s[p1++]) - 1);

    if (temp.has(s[p2])) temp.set(s[p2], temp.get(s[p2]) + 1);
    else temp.set(s[p2], 1);
    idx = 0;
  }

  return answer;
}

//* 입력예제
let a = 'bacaAacba';
let b = 'abc';

//*  출력예제
// 3
//* 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.

console.log(solution(a, b));
