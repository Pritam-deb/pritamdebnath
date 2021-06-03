import './App.scss';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import BlogsPage from './Pages/BlogsPage';

import Navbar from './Components/NavBar';

import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar/>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/about" exact>
              <AboutPage/>
            </Route>
            <Route path="/projects" exact>
              <ProjectsPage/>
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage/>
            </Route>
          </Switch>

        </div>
      </div>
    </div>
  );
}

export default App;
