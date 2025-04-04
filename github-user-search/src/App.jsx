import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);
    setUser(null);

    const userData = await fetchUserData(username);

    if (userData) {
      setUser(userData);
    } else {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>}

      {user && (
        <div className="border p-4 rounded shadow-md">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-bold mt-2">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
