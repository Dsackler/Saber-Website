import './App.css';
import {Parallax} from 'react-parallax';
import Property1 from "./Images/Property1.jpg";
import Property2 from "./Images/Property2.jpg";
import Property3 from "./Images/Property3.jpg";
import NavBar from "./Components/NavBar"

const iStyle = {
  background: '#fff',
  position: 'absolute',
  left: '50%',
  top: '50%',
  padding: '20px',
  transform: 'translate(-50%, -50%)'
}

function App() {
  return (
    <div>
      <NavBar />
      <h1>hi</h1>
      <Parallax bgImage = {Property1} strength = {100} >
        <div className = "section">
          <div style = {iStyle}>HTML in parallax</div>
        </div>
      </Parallax>
      <h1>Please help</h1>
      <Parallax bgImage = {Property2} strength = {100} blur={{ min: -15, max: 15 }}>
        <div className = "section">
          <div style = {iStyle}>HTML in parallax</div>
        </div>
      </Parallax>
      <h1>Pls help if you are reading this...</h1>
      <Parallax bgImage = {Property3} strength = {100} blur={{ min: -15, max: 15 }}>
        <div className = "section">
          <div style = {iStyle}>HTML in parallax</div>
        </div>
      </Parallax>
      <div style = {{height: '500vh'}}></div>
    </div>
  );
}

export default App;
