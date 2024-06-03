// src/App.js
import React from 'react';
import './App.css';
import QuestionSetEditor from './components/QuestionSetEditor';
// import InQuiryEditor from './components/inQuiryEditor';

function App() {
  return (
    <div className="App">
      <QuestionSetEditor />
      {/* <InQuiryEditor /> */}
    </div>
  );
}

export default App;
