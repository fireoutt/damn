import React from 'react';
import UsernameForm from "./UsernameForm";
import ChatContainer from "./ChatContainer";
import './App.css';

function App() {
  return (
    <div className="ChatChat">
      <UsernameForm />
      <ChatContainer />
    </div>
  );
}

export default App;
