import { useState, useEffect } from "react";
import Nav from "./Nav";

function Flexibone_info() {
  return (
    <div>
      <Nav />
      <section className="Banner">
        <div className="overlay"></div>
        <h2 className="Flexibone-info-title">
          We'd Love To <span className="highlight">See You Smile</span>
        </h2>
        <div className="line"></div>

        <div className="Flexibone-content">
          <div className="Flexibone-text-section">
            <p>
              Distinctively re-engineer revolutionary meta-services and premium
              architectures. Intrinsically incubate intuitive opportunities and
              real-time potentialities.Appropriately communicate one-to-one technology after
              plug-and-play networks. Quickly aggregate B2B users and worldwide
              potentialities.Quickly cultivate optimal processes and tactical architectures.
              Completely iterate covalent strategic theme areas via accurate
              e-markets. Quickly aggregate B2B users and worldwide
              potentialities.Quickly cultivate optimal processes and tactical architectures.
              Completely iterate covalent strategic theme areas via accurate
              e-markets.
            </p>
          </div>
          <div className="Flexibone-image-section">
            <img src="/img/Banner_2.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Flexibone_info;
