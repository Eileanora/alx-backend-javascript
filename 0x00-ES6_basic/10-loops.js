export default function appendToEachArrayValue(array, appendString) {
  const ans = [];
  for (const item of array) {
    ans.push(appendString + item);
  }

  return ans;
}
