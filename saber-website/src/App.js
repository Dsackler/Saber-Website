import './App.css';
import {Parallax} from 'react-parallax';
import carPic from "./Images/car.jpeg";
import fishPic from "./Images/fish.jpeg";


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
    <div className="App">
      <Parallax bgImage = {carPic} strength = {500}>
        <div className = "section">
          <div style = {iStyle}>HTML in parallax</div>
        </div>
      </Parallax>
      <h1>Please help</h1>
      <Parallax bgImage = {fishPic} blur={{ min: -15, max: 15 }}>
        <div className = "section">
          <div style = {iStyle}>HTML in parallax</div>
        </div>
      </Parallax>
      <div style = {{height: '500vh'}}></div>
    </div>
  );
}

export default App;
