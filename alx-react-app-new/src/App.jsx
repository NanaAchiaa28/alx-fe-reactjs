import Counter from "./components/Counter";
function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <Counter />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
