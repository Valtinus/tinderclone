import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>
      {/* Cards */}
      <Cards />
      {/* Buttons */}
      <Buttons />
    </div>
  );
}

export default App;
