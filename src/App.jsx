import './App.css';
import UserAgeForm from './components/UserAgeForm';
import UserAgeFormII from './components/UserAgeFormII';

document.title = "What's your age";

function App() {
  return (
    <>
      <UserAgeForm />
      <UserAgeFormII />
    </>
  );
}

export default App;
