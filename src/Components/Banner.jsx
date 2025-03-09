import React, { useEffect, useState } from "react";

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
      <header>
        <div className="container">
          <div className="logo" style={{ filter: "invert(1)" }}>
            <img src="/img/flexi_bone.png" alt="DentiCare Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog / Articles</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="#">
              <img src="/img/facebook-app-symbol.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/img/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="/img/pinterest.png" alt="Pinterest" />
            </a>
          </div>
        </div>
      </header>

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
