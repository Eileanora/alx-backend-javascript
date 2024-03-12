export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let ans = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      ans = ans.concat(value.slice(startString.length), '-');
    }
  });
  if (ans.length > 0) {
    ans = ans.slice(0, -1);
  }
  return ans;
}
