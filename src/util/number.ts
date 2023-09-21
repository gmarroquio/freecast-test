export const isBetween = (target: number, left: number, right: number) =>
  target > left && target < right;

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
