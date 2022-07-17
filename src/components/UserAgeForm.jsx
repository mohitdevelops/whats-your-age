import { useReducer } from "react";
import css from "./form.module.css";

const UserAgeForm = () => {
	let now = new Date();
	let date = now.getDate();
	let month = now.getMonth() + 1;
	let year = now.getFullYear();
	let curMonthDays = new Date(year, month, 0).getDate();

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

	const [dateState, dispatchDateFunc] = useReducer(
		(prevState, action) => {
			if (action.name === "userDateInput") {
				return {
					date: action.dateValue,
					isDateValid: action > curMonthDays,
				}
			}
			if(action.name === "dateOnBlur"){
				return{
					date: prevState.dateValue,
					isDateValid: prevState.dateValue > curMonthDays,
				}
			}
		},
		{
			date: "",
			isDateValid: null,
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
		dispatchDateFunc({
			name: "userDateInput",
			dateValue: e.target.value,
		});
	}
	function onBlurDateInput() {
		dispatchDateFunc({
			name: "dateOnBlur",
		});
	}

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const calcAge = (userYear, userMonth, userDate) => {			

			let newDate = userDate.dateValue > date && date + curMonthDays;
			let newMonth = userDate.dateValue > date && month - 1;
			let newYear = userMonth.monthValue > month && month + 12 && year - 1;

			function calcDays(days) {
				let curDays = days - userDate.dateValue;
				return curDays;
			}
			const currentDays = calcDays(newDate);

			function calcMonth(month) {
				let curMonth = month + 12 - userMonth.monthValue;
				return curMonth;
			}
			const currentMonth = calcMonth(newMonth);

			function calcYear(year) {
				let curYear = year - userYear.yearValue;
				return curYear;
			}
			const currentYear = calcYear(newYear);

			return console.log(
				`You are ${currentYear} years ${currentMonth} months and ${currentDays} days old.`
			);

		};

		calcAge(yearState, monthState, dateState);
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
								value={dateState.dateValue}
								onChange={onChangeDateInput}
								onBlur={onBlurDateInput}
								type="number"
								placeholder="Your Birth Date"
							/>
							<div className={css.msg}>
								{dateState.isDateValid === false && "Days are invalid"}
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
