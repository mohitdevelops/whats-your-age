import { logDOM } from "@testing-library/react";
import { useState } from "react";
import css from "./form.module.css";

const UserAgeForm = () => {

	let now = new Date();
	let date = now.getDate();
	let month = now.getMonth() + 1;
	let year = now.getFullYear();
	const [yearInput, setYearInput] = useState("");
	const [yearIsValid, setYearIsValid] = useState();
	const [monthInput, setMonthInput] = useState("");
	const [monthIsValid, setMonthIsValid] = useState("");
	const [dateInput, setDateInput] = useState("");
	const [dateIsValid, setDateIsValid] = useState("");

	function onChangeYearInput(e) {
		setYearInput(e.target.value);
	}
	function onBlurYearInput() {
		setYearIsValid(+yearInput > year);
	}
	function onChangeMonthInput(e) {
		setMonthInput(e.target.value);
	}
	function onBlurMonthInput() {
		setMonthIsValid(+monthInput > 12);
	}
	function onChangeDateInput(e){
		setDateInput(e.target.value)
	}
	function onBlurDateInput(){
		setDateIsValid(dateInput)
	}	
	
	const onSubmitHandler = (event) => {
		event.preventDefault();			

		const calcAge = (userYear, userMonth, userDate) => {
			let curMonthDays = new Date(year, month, 0).getDate();

			let newDate = userDate > date && date + curMonthDays;
			let newMonth = userDate > date && month - 1;
			let newYear = userMonth > month && month + 12 && year - 1;

			function calcDays(days){
				let curDays = days - dateInput;
				return curDays;
			}
			const currentDays = calcDays(newDate);

			function calcMonth(month){
				let curMonth = (month + 12) - monthInput;
				return curMonth;
			}
			const currentMonth = calcMonth(newMonth)

			function calcYear(year) {
				let curYear = year - yearInput;
				return curYear;
			}
			const currentYear = calcYear(newYear);

			
			console.log(`You are ${currentYear} years ${currentMonth} months and ${currentDays} days old on this planet 🤯`);
		}		

		calcAge(yearInput, monthInput, dateInput)
	};

	return (
		<div className={css.formMain}>
			<div className={css.formWrap}>
				<h1>What's your birth date? 🎂</h1>
				<form onSubmit={onSubmitHandler}>
					<div className={css.inputWrap}>
						<div className={css.form_group}>
							<input
								value={yearInput}
								onChange={onChangeYearInput}
								onBlur={onBlurYearInput}
								type="number"
								placeholder="Your Birth Year"
							/>
							<div className={css.msg}>
								{yearIsValid === true && "Future year, huh!😒"}
							</div>
						</div>
						<div className={css.form_group}>
							<input
								value={monthInput}
								onChange={onChangeMonthInput}
								onBlur={onBlurMonthInput}
								type="number"
								placeholder="Your Birth Month"
							/>
							<div className={css.msg}>
								{monthIsValid === true && "Only 12 months are there 😒"}
							</div>
						</div>
						<div className={css.form_group}>
							<input
								value={dateInput}
								onChange={onChangeDateInput}
								onBlur={onBlurDateInput}
								type="number"
								placeholder="Your Birth Date"
							/>
							<div className={css.msg}>
								{dateIsValid}
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
