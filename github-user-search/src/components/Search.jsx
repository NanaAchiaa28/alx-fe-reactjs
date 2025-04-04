import { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    const userData = await fetchAdvancedUserData(username, location, minRepos);

    if (userData && userData.length > 0) {
      setUsers(userData);
    } else {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-md">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Min Repos (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">Looks like we can't find the user</p>}

      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-100 p-4 rounded shadow-md text-center">
              <img src={user.avatar_url} alt={user.login} className="w-20 h-20 mx-auto rounded-full" />
              <h2 className="text-lg font-bold mt-2">{user.login}</h2>
              <p>Location: {user.location || "Not available"}</p>
              <p>Repos: {user.public_repos || "N/A"}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
