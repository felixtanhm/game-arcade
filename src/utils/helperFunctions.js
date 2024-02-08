const randomInt = (limit, rounding) => {
  return Math[rounding](Math.random() * limit);
};

export { randomInt };
