import React from 'react';
import Header from './components/header';
import About from './components/about';
import WorkExperience from './components/workexperience';
import './App.css';



function App() {
  return (
    <div className='App'>
      <Header/>
      <About/>
      <WorkExperience/>
    </div>
  );
}

export default App;
