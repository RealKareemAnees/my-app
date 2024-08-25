"use client";

import React, { useState } from "react";
import useSound from "use-sound";

const App = () => {
  const [playSound] = useSound("/untitled.mp3", {
    onend: () => setOverlayVisible(false),
  });
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handlePlaySound = () => {
    setOverlayVisible(true);
    playSound();
  };

  return (
    <div>
      <button onClick={handlePlaySound} style={buttonStyle}>
        امسك ايدي
      </button>
      {overlayVisible && (
        <div style={overlayStyle}>
          <div style={textStyle}>يا وسخ</div>
        </div>
      )}
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)", // Slightly transparent black
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  transition: "opacity 0.5s ease-in-out",
};

const textStyle = {
  fontSize: "36px", // Larger font size
  fontWeight: "bold", // Bold text
  color: "white",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Text shadow for better readability
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly transparent background for the text
};

const buttonStyle = {
  fontSize: "18px",
  padding: "10px 20px",
  backgroundColor: "#4CAF50", // Green background
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default App;
