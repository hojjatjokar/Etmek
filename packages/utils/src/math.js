export function sum(...args) {
  let result = 0;

  args.forEach(item => (result += item));

  return result;
}

export default {
  sum,
};
