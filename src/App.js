import './CSS/App.css'
import Nav from './Components/NavBar'
import {b} from './Components/NavBar'
import pppp from './image.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardd from './Components/Card'


function App() {
  //purement JS
  const greeting = 'hello';
  const style1={color:'red',textAlign:'center'}
  const List = ['BMW', 'Mercedes','Peugeot','Clio'];
  return (
    <div className="App">
      <Nav/>
      <Cardd />
      <h2>This is a WS Introduction of React</h2>
      <h3>{greeting}</h3>
     { /* this is a comment*/}
     {/*  hr is a self closing tag ==> we add /*/}
      <hr/>
      <h4>hello I am {b}</h4>
      <hr/>
      {/*   import image using public */}
      <img src={'./logo192.png'} alt='img'/>
      {/* */}
      <img style={{width:'40%'}} src={'./Images/logo512.png'} alt='img'/>
       {/*  import Image using SRC*/}
      <img src={pppp} />
      <hr/>
      {List.map(el=> <ul>
        <li>{el}</li>
      </ul>)}
    </div>
   
    
  );
}

export default App;
