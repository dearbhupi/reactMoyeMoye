import logo from './logo.svg';
import './App.css';
import HelloWorld from './pages/HelloWorld';
import CourseTitlePage from './pages/CourseTitlePage';
import RegisterForm from './pages/RegisterForm';
import UserData from './utils/UserData';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <CourseTitlePage/>
      <RegisterForm/>
      <UserData/>
    </div>
  );
}

export default App;
