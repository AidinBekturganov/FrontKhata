import './App.css';
import Hello from './components/Hello';
import FunComponent from './components/FunComponent';
import MyClass from './components/MyClass';
import Name from './components/Name';


function App() {
  function clicked(){

    alert('Class Componnent fucked')
  }

  return (
    <div className="container">

          <Name/>
    </div>

  );
}

export default App;

