import './App.css';
import Hello from './components/Hello';
import FunComponent from './components/FunComponent';
import MyClass from './components/MyClass';

function App() {
  function clicked(){

    alert('Class Componnent fucked')
  }
  
  return (
    <div className="container">
      <Hello name = "Putin" />
      <MyClass email = "adfasdf@gmail.com" myclick={clicked}/>

    </div>

  );
}

export default App;

