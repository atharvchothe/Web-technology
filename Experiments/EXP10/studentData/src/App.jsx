import Student from './Student'
import './App.css'

function App() {
  const showMessage = () => {
    alert("Button Clicked ....!");
  };
  return (
    <>
      <h1>Student Info</h1>
      <button onClick={showMessage}>CLICK ME</button>
      <Student name="Atharv" age="22" />
    </>
  );
}

export default App
