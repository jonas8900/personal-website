export default function Ages({ children }) {
  //calculate the age for the Statboxes in the Photobox for the future
  function handleAges(DateOfBirth) {
    const today = new Date();
    const birthDay = new Date(DateOfBirth);

    const compareYears = today.getFullYear() - birthDay.getFullYear();
    const compareMonths = today.getMonth() - birthDay.getMonth();
    const compareDays = today.getDate() - birthDay.getDate();

    const age =
      compareMonths < 0 || (compareMonths === 0 && compareDays < 0)
        ? compareYears - 1
        : compareYears;

    return age;
  }

  return <>{handleAges(children)} Jahre</>;
}
