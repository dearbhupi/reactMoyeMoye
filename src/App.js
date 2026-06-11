import logo from './logo.svg';
import './App.css';
import HelloWorld from './pages/HelloWorld';
import CourseTitlePage from './pages/CourseTitlePage';
import RegisterForm from './pages/RegisterForm';
import UserData from './utils/UserData';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      {/* <CourseTitlePage/>
      <RegisterForm/>
      <UserData/> */}
      <Register/>
    </div>
  );
}

export default App;
