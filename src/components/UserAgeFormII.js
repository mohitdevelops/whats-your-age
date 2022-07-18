import { useState } from "react";

const UserAgeFormII = () => {
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const submitHandler = (event) => {
    event.preventDefault();
    const convertedBirthDate = new Date(birthYear, birthMonth, birthDay);
    const convertedBirthYear = convertedBirthDate.getFullYear();
    const convertedBirthMonth = convertedBirthDate.getMonth() -1;
    const convertedBirthDay = convertedBirthDate.getDate();
    console.log(
      calcAge(convertedBirthYear, convertedBirthMonth, convertedBirthDay)
    );
  };

  const calcAge = (year, month, day) => {
    const ageYear = currentYear - year;
    const ageMonth = currentMonth - month;
    const ageDay = currentDay - day;
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      return ageYear - 1;
    }
    return {
      ageYear,
      ageMonth,
      ageDay,
    };
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="bYear">Birth Year:</label>
        <input
          type="number"
          id="bYear"
          name="Birth Year"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bMonth">Birth Month:</label>
        <input
          type="number"
          id="bMonth"
          name="Birth Month"
          value={birthMonth}
          onChange={(e) => setBirthMonth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bDay">Birth Day:</label>
        <input
          type="number"
          id="bDay"
          name="Birth Day"
          value={birthDay}
          onChange={(e) => setBirthDay(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">let's check</button>
      </div>
    </form>
  );
};

export default UserAgeFormII;
