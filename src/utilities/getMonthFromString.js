const getMonthFromString = (dateString) => {
  const transactionDate = dateString;
  const formatedDate = transactionDate.replace(/-/g, ' ');
  const date = new Date(formatedDate);
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format;
  const month = monthName(date);

  return month;
};

export default getMonthFromString;
