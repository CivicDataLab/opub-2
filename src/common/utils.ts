/*
  Utility functions, like the ones you'd
  get from a library like lodash.
*/

// pluck a random item from an array
export const sampleOne = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
