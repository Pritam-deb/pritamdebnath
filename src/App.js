import './App.scss';
import HomePage from './Pages/HomePage';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar/>
      </div>
      <div className="main-content">
        <div className="content">
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

export default App;
