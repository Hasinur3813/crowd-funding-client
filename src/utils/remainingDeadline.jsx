const remainingDeadline = (deadline) => {
  const campaignDate = new Date(deadline).getTime();
  const newDate = new Date().getTime();

  const difference = campaignDate - newDate;
  const remainingDays = parseInt(difference / (24 * 60 * 60 * 1000));
  console.log(remainingDays);

  if (remainingDays < 0) {
    return "Over";
  } else if (remainingDays === 0) {
    return "1 day left";
  } else if (remainingDays < `${-0}`) {
    return "Less than a day left";
  } else {
    return `${remainingDays} days left`;
  }
};

export default remainingDeadline;
