import { useState } from 'react';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  // Define user data
  const [userData] = useState({ name: "Jane Doe", email: "jane.doe@example.com" });

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
