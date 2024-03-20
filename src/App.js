import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Table from './component/Table';
import Add from './component/Add';
import ViewData from './component/ViewData';
import { Routes, Route } from "react-router-dom";
import Footer from './component/Footer';


function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<>
          <Header />
          <Add />
          <Table />
        </>} />

        <Route path='/viewdata/:noteid' element={<>
          <ViewData />
        </>} />


       

      </Routes>
        <Footer/>


    </>
  );
}

export default App;
