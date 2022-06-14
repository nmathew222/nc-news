import './App.css';
import Header from './Components/Header';
import ShowAllArticles from './Components/ShowAllArticles';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
     <Header />
     <Navbar />
     <Routes>
       <Route path='/' element={<ShowAllArticles />}></Route>

     </Routes>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
