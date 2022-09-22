// * 뒤집은 소수
//  자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
//  각 자연수의 크기는 100,000를 넘지 않는다.

const isPrime = num => {
  if (num === 1) return false;
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(num) {
  return num.flatMap(n => {
    const reverseNum = parseInt(n.toString().split('').reverse().join(''));
    return isPrime(reverseNum) ? reverseNum : [];
  });
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
