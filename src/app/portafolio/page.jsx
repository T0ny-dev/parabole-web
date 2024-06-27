"use client"

import React, { useState } from "react";
import Navbar from "../components/NavbarMobiles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./page.css";

const samplePortfolio = [
  { id: 1, type: "video", title: "Corporate Video", src: "/video1.mp4" },
  { id: 2, type: "photo", title: "Event Photo", src: "/photo1.jpg" },
  { id: 3, type: "image", title: "Product Image", src: "/image1.png" },
  { id: 1, type: "video", title: "Corporate Video", src: "/video1.mp4" },
  { id: 2, type: "photo", title: "Event Photo", src: "/photo1.jpg" },
  { id: 3, type: "image", title: "Product Image", src: "/image1.png" },
  { id: 1, type: "video", title: "Corporate Video", src: "/video1.mp4" },
  { id: 2, type: "photo", title: "Event Photo", src: "/photo1.jpg" },
  { id: 3, type: "image", title: "Product Image", src: "/image1.png" },
  { id: 2, type: "photo", title: "Event Photo", src: "/photo1.jpg" },
  { id: 3, type: "image", title: "Product Image", src: "/image1.png" },
  // Agrega más elementos de muestra según sea necesario
];

function Portafolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredPortfolio = samplePortfolio.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
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
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="portfolio-grid">
          {paginatedPortfolio.map((item) => (
            <div key={item.id} className="portfolio-card">
              {item.type === "video" && (
                <video controls>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {item.type === "photo" && <img src={item.src} alt={item.title} />}
              {item.type === "image" && <img src={item.src} alt={item.title} />}
              <h3>{item.title}</h3>
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
