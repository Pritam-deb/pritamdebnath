import './App.scss';
import HomePage from './Pages/HomePage';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar></Navbar>
      </div>
      <div className="main-content">
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;