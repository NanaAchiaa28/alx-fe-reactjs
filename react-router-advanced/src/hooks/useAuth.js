const useAuth = () => {
    // Simulating authentication state (Change this logic as needed)
    const user = localStorage.getItem("user");
    return { isAuthenticated: !!user }; // Returns true if user exists
  };
  
  export default useAuth;
  