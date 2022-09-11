import { useState } from "react";
import css from "./form.module.css";

const UserAgeForm = ({ userData }) => {
	const [birthYear, setBirthYear] = useState("");
	const [isBirthYearValid, setIsBirthYearValid] = useState(true);
	const [birthMonth, setBirthMonth] = useState("");
	const [isBirthMonthValid, setIsBirthMonthValid] = useState(true);
	const [birthDay, setBirthDay] = useState("");
	const [isBirthDayValid, setIsBirthDayValid] = useState(true);

	let today = new Date();
	let currentDate = today.getDate();
	let currentMonth = today.getMonth() + 1;
	let currentYear = today.getFullYear();
	let currentMonthDays = new Date(currentYear, currentMonth, 0).getDate();

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const calcAge = () => {
			let calcYear;
			let calcMonth;
			let calcDay;

			if (currentDate < birthDay || currentMonth < birthMonth) {
				calcDay = (currentDate + currentMonthDays) - birthDay;
				calcMonth = (currentMonth + 11) - birthMonth;
				calcYear = (currentYear - 1) - birthYear;
			} else {
				calcDay = currentDate - birthDay;
				calcMonth = currentMonth - birthMonth;
				calcYear = currentYear - birthYear;
			}

			console.log(`Year:${calcYear}, Month:${calcMonth}, Day:${calcDay}`);
			console.log(calcDay);
		};
		calcAge();
	};

	return (
		<div className={css.formMain}>
			<div className={css.formWrap}>
				<h1>What's your birth date? 🎂</h1>
				<form onSubmit={onSubmitHandler}>
					<div className={css.inputWrap}>
						<div className={css.form_group}>
							<input
								value={birthYear}
								onChange={(e) => setBirthYear(e.target.value)}
								type="number"
								placeholder="Your Birth Year"
							/>
							<div className={css.msg}>
								{!isBirthYearValid && "Invalid Year"}
							</div>
						</div>
						<div className={css.form_group}>
							<input
								value={birthMonth}
								onChange={(e) => setBirthMonth(e.target.value)}
								type="number"
								placeholder="Your Birth Month"
							/>
							<div className={css.msg}>
								{!isBirthMonthValid && "Invalid Month"}
							</div>
						</div>
						<div className={css.form_group}>
							<input
								value={birthDay}
								onChange={(e) => setBirthDay(e.target.value)}
								type="number"
								placeholder="Your Birth Date"
							/>
							<div className={css.msg}>
								{!isBirthDayValid && "Invalid date"}
							</div>
						</div>
					</div>
					<div className={css.submitBtn}>
						<button type="submit">Let's check</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserAgeForm;
