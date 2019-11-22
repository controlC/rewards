export default (price) => {
  const singleRewardMin = 50;
  const doubleRewardMin = 100;

  if (price >= singleRewardMin && price < doubleRewardMin) return price - singleRewardMin;
  if (price > doubleRewardMin) return (2*(price - doubleRewardMin) + singleRewardMin);

  return 0;
};

