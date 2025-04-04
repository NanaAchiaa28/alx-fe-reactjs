import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import { fetchGitHubUser } from "./services/githubService";

const App = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const userData = await fetchGitHubUser(username);
    setUser(userData);
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {user && <UserProfile user={user} />}
    </div>
  );
};

export default App;
