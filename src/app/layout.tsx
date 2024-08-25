import React from "react";
import Navbarr from "../components/navbar";

function MainLayout({ children }) {
  return (
    <html>
      <head>
        {/* Add any head elements here like meta tags, links, etc. */}
      </head>
      <body>
        <Navbarr />
        {children}
      </body>
    </html>
  );
}

export default MainLayout;
