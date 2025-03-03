import React from "react";
import { UserProvider } from "./UserContext";
import MainContent from "./components/MainContent";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>Recipe Sharing App</h1>
        <MainContent />
      </div>
    </UserProvider>
  );
}

export default App;
