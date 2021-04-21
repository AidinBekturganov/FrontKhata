import './App.css';
import Hello from './components/Hello';
import FunComponent from './components/FunComponent';
import MyClass from './components/MyClass';

function App() {
  return (
    <div className="App">
      <Hello name = "Putin" lastname = "Debilov"/>
      <MyClass email = "adfasdf@gmail.com"/>

    </div>

  );
}

export default App;

