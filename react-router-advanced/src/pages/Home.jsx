import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/profile">Go to Profile</Link> | 
        <Link to="/post/1">Go to Blog Post 1</Link>
      </nav>
    </div>
  );
}

export default Home;
