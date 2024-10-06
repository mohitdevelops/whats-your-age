import "./modal.css";

export default function Modal({ resultData, modalHandle }) {
	const checkYear = resultData.calcYear <= 1 ? 'year' : 'years';
	const checkMonth = resultData.calcMonth <= 1 ? 'month' : 'months';
	const checkDay = resultData.calcDay <= 1 ? 'day' : 'days';
	return (
		<div className="modal__backdrop" onClick={modalHandle}>
			<div className="modal__wrap">
				<h3>
					It's been <span>{resultData.calcYear}</span> {checkYear} <span>{resultData.calcMonth}</span> {checkMonth} and <span>{resultData.calcDay}</span> {checkDay} since you were born
				</h3>
			</div>
		</div>
	);
}
