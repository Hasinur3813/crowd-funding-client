const remainingDeadline = (deadline) => {
  const campaignDate = new Date(deadline).getTime();
  const newDate = new Date().getTime();

  const difference = campaignDate - newDate;
  let remainingDays = Math.floor(difference / (24 * 60 * 60 * 1000));
  remainingDays += 1;

  if (remainingDays < 0) {
    return "Over";
  } else if (remainingDays === 0) {
    return "Less than a day left";
  } else if (remainingDays === 1) {
    return "1 day left";
  } else {
    return `${remainingDays}  days left`;
  }
};

export default remainingDeadline;
