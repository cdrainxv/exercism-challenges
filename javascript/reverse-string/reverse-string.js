function reverseString(str) {
  let answer = ''
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i]
  }
  return answer;
}

export default reverseString;