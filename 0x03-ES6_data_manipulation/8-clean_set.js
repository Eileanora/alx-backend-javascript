export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !set || !startString || !(set instanceof Set)) {
    return '';
  }
  const ans = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      ans.push(value.substring(startString.length));
    }
  });
  return ans.join('-');
}
