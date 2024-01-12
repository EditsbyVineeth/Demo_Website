import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Pages/Navbar';
import { DataProvider } from './DataContext';
import Skills from './Pages/Skills';

function App() {
  return (
    <DataProvider>
      <div className="App">
           <Navbar/>  
           <HomePage/>
           <Skills/>
      </div>
    </DataProvider>
  );
}

export default App;
