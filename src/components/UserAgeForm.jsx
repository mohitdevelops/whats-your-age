import css from "./form.module.css";

const UserAgeForm = () => {
	return (
		<div className={css.formMain}>
			<div className={css.formWrap}>
				<h1>What's your birth date? 😊</h1>
				<form>
					<div className={css.inputWrap}>
						<div>
							<input type="number" placeholder="Your Birth Year" />
						</div>
						<div>
							<input type="number" placeholder="Your Birth Month" />
						</div>
						<div>
							<input type="number" placeholder="Your Birth Date" />
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
