import React from 'react'
import './App.css';
import Header from './components/Header/Router/Header';
import CardProduct from './components/Wrapper/CardProducts';
import Wrapper from './components/Wrapper/Wrapper';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">

     <Header />
     <CardProduct />
     {/* <Wrapper /> */}
    </div>
  );
}

export default App;
