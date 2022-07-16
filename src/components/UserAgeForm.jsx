import { useReducer } from "react";
import { useState } from "react";
import css from "./form.module.css";

const UserAgeForm = () => {
	let now = new Date();
	let date = now.getDate();
	let month = now.getMonth() + 1;
	let year = now.getFullYear();

	const [dateInput, setDateInput] = useState("");
	const [dateIsValid, setDateIsValid] = useState("");

	const [yearState, dispatchYearFunc] = useReducer(
		(prevState, action) => {
			if (action.name === "userYearInput") {
				return {
					year: action.yearValue,
					isYearValid: action.yearValue > year,
				};
			}
			if (action.name === "yearOnBlur") {
				return {
					year: prevState.yearValue,
					isYearValid: prevState.yearValue > year,
				};
			}
		},
		{
			year: "",
			isYearValid: null,
		}
	);

	const [monthState, dispatchMonthFunc] = useReducer(
		(prevState, action) => {
			if (action.name === "userMonthInput") {
				return {
					month: action.monthValue,
					isMonthValid: action.monthValue > 12,
				};
			}
			if (action.name === "monthOnBlur") {
				return {
					month: prevState.monthValue,
					isMonthValid: prevState.monthValue > 12,
				};
			}
		},
		{
			month: "",
			isMonthValid: null,
		}
	);

	function onChangeYearInput(e) {
		dispatchYearFunc({
			name: "userYearInput",
			yearValue: e.target.value,
		});
	}
	function onBlurYearInput() {
		dispatchYearFunc({
			name: "yearOnBlur",
		});
	}
	function onChangeMonthInput(e) {
		dispatchMonthFunc({
			name: "userMonthInput",
			monthValue: e.target.value,
		});
	}
	function onBlurMonthInput() {
		dispatchMonthFunc({
			name: "monthOnBlur",
		});
	}

	function onChangeDateInput(e) {
		setDateInput(e.target.value);
	}
	function onBlurDateInput() {
		setDateIsValid(dateInput);
	}

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const calcAge = (userYear, userMonth, userDate) => {
			let curMonthDays = new Date(year, month, 0).getDate();

			let newDate = userDate > date && date + curMonthDays;
			let newMonth = userDate > date && month - 1;
			let newYear = userMonth > month && month + 12 && year - 1;

			function calcDays(days) {
				let curDays = days - userDate;
				return curDays;
			}
			const currentDays = calcDays(newDate);

			function calcMonth(month) {
				let curMonth = month + 12 - userMonth;
				return curMonth;
			}
			const currentMonth = calcMonth(newMonth);

			function calcYear(year) {
				let curYear = year - userYear;
				return curYear;
			}
			const currentYear = calcYear(newYear);

			console.log(
				`You are ${currentYear} years ${currentMonth} months and ${currentDays} days old.`
			);
		};

		calcAge(yearState.yearValue, monthState.monthValue, dateInput);
	};

	return (
		<div className={css.formMain}>
			<div className={css.formWrap}>
				<h1>What's your birth date? 🎂</h1>
				<form onSubmit={onSubmitHandler}>
					<div className={css.inputWrap}>
						<div className={css.form_group}>
							<input
								value={yearState.yearValue}
								onChange={onChangeYearInput}
								onBlur={onBlurYearInput}
								type="number"
								placeholder="Your Birth Year"
								disabled={yearState.isYearValid}
							/>
							<div className={css.msg}>
								{yearState.isYearValid === true &&
									"It seems future year date 😒"}
							</div>
						</div>
						<div className={css.form_group}>
							<input
								value={monthState.monthValue}
								onChange={onChangeMonthInput}
								onBlur={onBlurMonthInput}
								type="number"
								placeholder="Your Birth Month"
							/>
							<div className={css.msg}>
								{monthState.isMonthValid === true &&
									"Only 12 months are there buddy😒"}
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
							<div className={css.msg}>{dateIsValid}</div>
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
