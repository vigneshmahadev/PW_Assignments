function intersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => arr2.includes(item));
}
function union(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [...arr1];
  arr2.map((item) => {
    if (!arr1.includes(item)) result.push(item);
  });
  return result;
}
console.log(intersection([], [1, 2, 3, 4]));
console.log(union([1, 2, 3, 4], [2, 3, 4]));
