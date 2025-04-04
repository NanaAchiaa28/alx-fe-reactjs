const UserProfile = ({ user }) => {
    if (!user) return <p className="text-center">No user found.</p>;
  
    return (
      <div className="text-center p-4 border rounded shadow-md w-64 mx-auto">
        <img
          src={user.avatar_url}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-bold">{user.name || user.login}</h2>
        <p>{user.bio}</p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          View Profile
        </a>
      </div>
    );
  };
  
  export default UserProfile;
  