import './App.css';
import Hello from './components/Hello';
import FunComponent from './components/FunComponent';
import MyClass from './components/MyClass';
import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';

import MyFragment from './components/MyFragment';

function App() {
  function clicked(){

    alert('Class Componnent fucked')
  }

  return (
    <div className="container">

          {/* <Name/>
          <Example names = {['Python', 'Java', 'JavaScript', 'C#']}/>
          <Example2 names = {['React', 'AzaNative', 'Akhmadgular', 'dodic']}/>
          <Form/> */}
          <MyFragment/>


    </div>

  );
}

export default App;

