function Header() {
    return (
        <header>
            <h1>My Favorite Cities</h1>
        </header>
    );
}

export default Header;
import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center",
    fontSize: "24px",
  };

  return <header style={headerStyle}>Welcome to My React App</header>;
};

export default Header;
