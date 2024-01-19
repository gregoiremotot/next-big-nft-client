import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import useWindowSize from "../hooks/useWindowSize"; // Assuming this hook is used to calculate `tableWidth`

function About() {
  const tableWidth = useWindowSize(); // Get dynamic width based on window size

  return (
    <>
      <Header />
      <main className="content">
        <div className="margin-auto p-3" style={{ width: tableWidth }}>
          <div className="title ">About Next Big NFT</div>
          <div className="subtitle ">
            Explore the world of digital art and become a part of an
            ever-growing community of artists and collectors. Our platform
            offers a wide range of unique ERC-721 token contracts, providing an
            unparalleled experience in the digital art space.
          </div>
        </div>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default About;
