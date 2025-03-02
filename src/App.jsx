import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';  // Example import

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello, React!</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <WelcomeMessage />
        </div>
    );
}

export default App;
