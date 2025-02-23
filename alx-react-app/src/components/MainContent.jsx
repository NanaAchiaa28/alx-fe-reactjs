function MainContent() {
    return (
        <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;
import React from "react";

const MainContent = () => {
  const contentStyle = {
    padding: "20px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  };

  return <main style={contentStyle}>This is the main content section.</main>;
};

export default MainContent;
