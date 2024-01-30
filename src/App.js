import React from "react";
import Reviews from "./Components/Reviews_page";
import './index.css';

function App(){
  return (
    <main>
      <div className="title">
        <h2>Our Reviews</h2>
      </div>
      <section className="container">
        <div className="review-container"></div>
        <Reviews />
      </section>
    </main>
  );
};

export default App;