import './App.css';
import Header from './components/header/Header';

import Navbar from './components/navbar/Navbar';
import Sections from './components/sections/Sections';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Sections />
    </div>
  );
}

export default App;
