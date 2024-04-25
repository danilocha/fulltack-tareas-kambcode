import Description from './components/description/index.jsx';
import Profile from './components/profile/index.jsx';
import Experience from './components/experience/index.jsx';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Description />
        < Profile />
        < Experience />
      </header >
    </div >
  );
}

export default App;
