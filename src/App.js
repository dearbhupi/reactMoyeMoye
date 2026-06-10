import logo from './logo.svg';
import './App.css';
import HelloWorld from './pages/HelloWorld';
import CourseTitlePage from './pages/CourseTitlePage';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <CourseTitlePage/>
      <RegisterForm/>
    </div>
  );
}

export default App;
