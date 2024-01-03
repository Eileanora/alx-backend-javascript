export default function appendToEachArrayValue(array, appendString) {
  let ans = [];
  for (const item of array) {
    ans.push(appendString + item);
  }

  return ans;
}
