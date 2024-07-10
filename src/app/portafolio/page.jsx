"use client";

import React, { useState } from "react";
import Navbar from "../components/NavbarMobiles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./page.css";

const samplePortfolio = [
  { id: 1, type: "youtube", src: "https://www.youtube.com/embed/7At5lEVjgjs?rel=0" },
  { id: 2, type: "photo", src: "/01Fotos.jpg" },
  { id: 3, type: "image", src: "/02Fotos.jpg" },
  { id: 5, type: "photo", src: "/03Fotos.jpg" },
  { id: 6, type: "image", src: "/04Fotos.jpg" },
  { id: 8, type: "photo", src: "/05Fotos.jpg" },
  { id: 9, type: "image", src: "/06Fotos.jpg" },
  { id: 10, type: "photo", src: "/07Fotos.jpg" },
  { id: 11, type: "image", src: "/08Fotos.jpg" },
  { id: 12, type: "youtube", src: "https://www.youtube.com/embed/NvOPR_Uml_4?rel=0" },
  { id: 13, type: "youtube", src: "https://www.youtube.com/embed/YSqFruDp8A8?rel=0" },
  { id: 14, type: "youtube", src: "https://www.youtube.com/embed/YSqFruDp8A8?rel=0" },
  { id: 15, type: "youtube", src: "https://www.youtube.com/embed/6DcVLdTcl0s?rel=0" },
  { id: 16, type: "youtube", src: "https://www.youtube.com/embed/sdNMSHbjW-s?rel=0" },
  { id: 17, type: "youtube", src: "https://www.youtube.com/embed/lOisgR0NuwU?rel=0" },
  { id: 18, type: "youtube", src: "https://www.youtube.com/embed/Wxq4FKx9wY0?rel=0" },
  { id: 19, type: "youtube", src: "https://www.youtube.com/embed/0FEDhVEEQ_A?rel=0" },
  { id: 20, type: "youtube", src: "https://www.youtube.com/embed/ky1CP6hmc_4?rel=0" },
  { id: 21, type: "youtube", src: "https://www.youtube.com/embed/lTW8Q6exsqM?rel=0" },
];

function Portafolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredPortfolio = samplePortfolio.filter((item) =>
    item.src.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedPortfolio = filteredPortfolio.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredPortfolio.length / itemsPerPage);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="portfolio-container">
        <div className="portfolio-grid">
          {paginatedPortfolio.map((item) => (
            <div key={item.id} className="portfolio-card">
              {item.type === "video" && (
                <video controls>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {item.type === "youtube" && (
                <iframe
                  width="560"
                  height="315"
                  src={item.src}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              {item.type === "photo" && <img src={item.src} alt="" />}
              {item.type === "image" && <img src={item.src} alt="" />}
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portafolio;
