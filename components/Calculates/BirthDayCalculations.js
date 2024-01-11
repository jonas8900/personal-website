export default function Ages({ children }) {
  function handleAges(DateOfBirth) {
    const today = new Date();
    const birthDay = new Date(DateOfBirth);

    const birthYear = today.getFullYear() - birthDay.getFullYear();
    const compareMonths = today.getMonth() - birthDay.getMonth();
    const compareDays = today.getDate() - birthDay.getDate();

    const age =
      compareMonths < 0 || (compareMonths === 0 && compareDays < 0)
        ? birthYear - 1
        : birthYear;

    return age;
  }

  return <>{handleAges(children)} Jahre</>;
}
