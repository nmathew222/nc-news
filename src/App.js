import './App.css';
import Header from './Components/Header';
import ShowAllArticles from './Components/ShowAllArticles';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Cooking from './Components/Cooking';
import Coding from './Components/Coding';
import Football from './Components/Football';

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
     <Header />
     <Navbar />
     <Routes>
       <Route path='/' element={<ShowAllArticles />}></Route>
       <Route path='/cooking' element={<Cooking/>}></Route>
    <Route path='/coding' element= {<Coding/>}></Route>
    <Route path='/football' element={<Football/>}></Route>

     </Routes>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
