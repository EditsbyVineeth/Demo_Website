import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Pages/Navbar/Navbar';
// import { DataProvider } from './DataContext';
import SkillsHome from './Pages/Skills/SkillsHome';
import Projects from './Pages/Projects/Projects';
import ProjectTiles from './Pages/Projects/ProjectTiles';
import Contact from './Pages/Contact/Contact';

import { DataContext } from './DataContext';
import { useContext } from 'react';
import Movie from './Project _Previews/MovieApp/Movie';

function App() {

  const{darkMode} = useContext(DataContext)

  return (
    // <DataProvider>
      <div className={` App ${darkMode && 'bg-red-600'}`}>
           {/* <Navbar/>  
           <div className='sections' id='homeSection'><HomePage/>   </div>
           <div className='sections' id='projectSection'><Projects/>   </div>
           <div className='sections' id='skillSection'><SkillsHome/> </div>
           <div className='sections' id='contactSection'><Contact/>    </div> */}

           <>

           <Movie/>
           </>
      </div>
    // </DataProvider>
  );
}

export default App;
