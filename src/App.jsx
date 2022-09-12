import "./App.css";
import ReactDOM from "react-dom";
import Modal from "./components/Modal/Modal";
import UserAgeForm from "./components/UserAgeForm";
import { useState } from "react";

document.title = "What's your age";

function App() {
	const [userData, setUserData] = useState({});
	const [modal, setModal] = useState(false);
	
	const onSubmitShowModal = () => {
		setModal(true)
	}

	const setModalHandle = () => {
		setModal(false);
	};

	const displayModal = modal && (
		<Modal resultData={userData} modalHandle={setModalHandle} />
	);

	return (
		<>
			<UserAgeForm DOBData={setUserData} showModal={onSubmitShowModal}/>
			{ReactDOM.createPortal(displayModal, document.getElementById("modal"))}
		</>
	);
}

export default App;
