import './App.css';
import HomePage from './Pages/Home/HomePage';
import Navbar from './Pages/Navbar/Navbar';
// import { DataProvider } from './DataContext';
import SkillsHome from './Pages/Skills/SkillsHome';
import Projects from './Pages/Projects/Projects';
import ProjectTiles from './Pages/Projects/ProjectTiles';
import Contact from './Pages/Contact/Contact';
import { DataContext } from './DataContext';
import { useContext } from 'react';

import Movie from './Project _Previews/MovieApp/Movie';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Savora from './Project _Previews/Savora/Savora';
import SpaceTour from './Project _Previews/SpaceTour/SpaceTour';
import GlobalChronicle from './Project _Previews/GlobalChronicle/GlobalChronicle';
import Edumentor from './Project _Previews/Edumentor/Edumentor';
import AnimatedRoutes from './AnimatedRoutes';



function App() {

  const{darkMode} = useContext(DataContext)

  return (
    <Router>
      
    
        <div className={` App ${darkMode && ' bg_pattern  bg_pattern2 text-white'} transition-colors duration-700`}>
             
             <AnimatedRoutes/>

             {/* <Routes>
              <Route path='/' element={
            <>
               <div className='sections' id='homeSection'><HomePage/>   </div>
               <div className='sections' id='projectSection'><Projects/>   </div>
               <div className='sections' id='skillSection'><SkillsHome/> </div>
               <div className='sections' id='contactSection'><Contact/>    </div>
            </>
              } />
            
              <Route path='/movieApp' element={<Movie/>}>  </Route>
              <Route path='/globalChronicle' element={<GlobalChronicle/>}>  </Route>
              <Route path='/savora' element={<Savora/>}>  </Route>
              <Route path='/spaceTour' element={<SpaceTour/>}>  </Route>
              <Route path='/eduMentor' element={<Edumentor/>}>  </Route>
            </Routes>
     */}
        </div>
    
    
    </Router>
    );
}

export default App;
