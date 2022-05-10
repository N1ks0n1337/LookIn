import React from "react";
import './css/null.css'
import Header from './blocks/header/Header'
import styled from 'styled-components'
import background from './image/Bg.png';
import Specialiazation from './blocks/specializations/Specialiazation';
import Specialists from './blocks/specialists/Specialists'
import Provide from "./blocks/provide/Provide";

const Background = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: text;
`

function App() {
  return (
    <div className="App">
      <Background>
        <Header/>
        <Provide/>
      </Background>
    </div>
  );
}

export default App;
