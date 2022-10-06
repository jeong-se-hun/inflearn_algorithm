// * 후위식 연산(postfix)

// 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다
function solution(s) {
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      const [rt, lt] = [stack.pop(), stack.pop()];

      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  return stack[0];
}

// * 입력예제
let str = '352+*9-';

//* 출력예제
// 12
console.log(solution(str));
