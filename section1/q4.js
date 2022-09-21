// * 가장 짧은 문자거리
// 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

function solution(s, t) {
  let idxArr = [];
  let reverseIdxArr = [];

  let [f, b] = [1000, 1000];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      f = 0;
      idxArr.push(f);
    } else {
      f++;
      idxArr.push(f);
    }
    if (s[s.length - 1 - i] === t) {
      b = 0;
      reverseIdxArr.unshift(b);
    } else {
      b++;
      reverseIdxArr.unshift(b);
    }
  }

  return idxArr.map((arr, i) => (arr <= reverseIdxArr[i] ? arr : reverseIdxArr[i]));
}

let str = 'teachermode';
console.log(solution(str, 'e'));
