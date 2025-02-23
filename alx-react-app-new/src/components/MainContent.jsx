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
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Main Content</h2>
      <p>This is the main content area.</p>
    </div>
  );
};

export default MainContent;
