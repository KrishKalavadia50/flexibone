import React, { useEffect, useState } from "react";
import Nav from "./Nav";

function Banner() {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingDone(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Nav />

      <section className="banner">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="name">
            DR. Hardik <span> Dhamsania</span>
          </h1>
          <h2>
            Healing Bones&nbsp;<span>Restoring Motion</span>
          </h2>
          <p>
            I am Dr. Hardik Dhamsania, an experienced orthopedic surgeon
            dedicated to diagnosing, treating, and managing bone and joint
            conditions. From fractures and sports injuries to joint
            replacements, my goal is to restore mobility, alleviate pain, and
            enhance the quality of life for my patients with advanced surgical
            techniques and personalized treatment plans.
          </p>
          <div className="buttons">
            <a href="#" className="btn primary">
              Check Out Our Services
            </a>
            <a href="#" className="btn secondary">
              View Patient Testimonials
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Banner;
