export default function cleanSet(set, startString) {
  if (startString.trim() !== startString || startString.length === 0) {
    return '';
  }
  const start = startString.toLowerCase();
  let ans = '';
  set.forEach((value) => {
    if (typeof value !== 'string') {
      return;
    }
    const v = value.toLowerCase();
    if (v.startsWith(start)) {
      ans = ans.concat(v.slice(start.length), '-');
    }
  });
  if (ans.length > 0) {
    ans = ans.slice(0, -1);
  }
  return ans;
}
