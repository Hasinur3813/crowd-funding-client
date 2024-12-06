const remainingDeadline = (deadline) => {
  const campaignDate = new Date(deadline).getTime();
  const newDate = new Date().getTime();

  const difference = campaignDate - newDate;
  const remainingDays = parseInt(difference / (24 * 60 * 60 * 1000));

  if (remainingDays === 0 || remainingDays < 0) {
    return "Deadline Over";
  } else {
    return `${remainingDays} days left`;
  }
};

export default remainingDeadline;
