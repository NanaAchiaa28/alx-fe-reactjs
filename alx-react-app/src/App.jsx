import UserProfile from "./components/UserProfile";
function App() {
    return (
      <div>
        <h1>Welcome to My React App</h1>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
    );
  }
  
  export default App;
  
import WelcomeMessage from "./components/WelcomeMessage";

import WelcomeMessage from './components/WelcomeMessage';

function App() {
    return (
        <div>
            <WelcomeMessage />
        </div>
    );
}

export default App;
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
