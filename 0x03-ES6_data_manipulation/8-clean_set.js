export default function cleanSet(set, startString) {
  if (startString.trim() !== startString || startString.length === 0) {
    return '';
  }
  let ans = '';
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      ans = ans.concat(value.slice(startString.length), '-');
    }
  });
  if (ans.length > 0) {
    ans = ans.slice(0, -1);
  }
  return ans;
}
