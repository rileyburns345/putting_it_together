import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName='Jane' lastName='Doe' age={45} hairColor='Black'/>
        <PersonCard firstName='John' lastName='Smith' age={88} hairColor='Brown'/>
        <PersonCard firstName='Fillmore' lastName='Millard' age={50} hairColor='Brown'/>
        <PersonCard firstName='Maria' lastName='Smith' age={62} hairColor='Brown'/>
      </header>
    </div>
  );
}

export default App;
