import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import CardProduct from './components/Wrapper/CardProducts';
import 'antd/dist/antd.css';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
     <Header />
     {/* <CardProduct /> */}
     <Wrapper />
    </div>
  );
}

export default App;
