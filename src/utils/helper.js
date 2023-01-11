// This is a helper function used to debug for the dev purposes only.
// For production, it can removed.

export const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
