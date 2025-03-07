import React from "react";
import { FaPlaneDeparture, FaQuoteRight, FaUniversity, FaUserMd } from "react-icons/fa";
import {GiKneeCap} from "react-icons/gi"

function About() {
  return (
    <div>
      <section class="about-section">
        <div class="about-doctor">
          <div class="doctor-image">
          <div
            style={{
              background:
                "linear-gradient(2deg, rgb(245 245 245) 8%, rgba(0, 0, 0, 0) 100%)",
              zIndex: "1",
              width: "538px",
              height: "200px",
              bottom: "33px",
              top:"155%",
              left: "145px",
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              background:
                "linear-gradient(88deg, rgb(245 245 245) 8%, rgba(0, 0, 0, 0) 100%)",
              zIndex: "1",
              width: "50px",
              height: "200px",
              bottom: "33px",
              top:"150%",
              left: "170px",
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              background: "linear-gradient(267deg, rgb(245, 245, 245) 8%, rgba(0, 0, 0, 0) 100%)",
              zIndex: "1",
              width: "50px",
              height: "200px",
              bottom: "33px",
              top: "152%",
              left: "580px",
              position: "absolute",
            }}
          ></div>
          <div className="quote"> <FaQuoteRight className="quote"></FaQuoteRight></div>
            <img src="/img/Dr. Hardik.png" alt="Dr. John Doe" />
          </div>
          <div class="doctor-info">
            <h1 className="about-doctor-name">
              <span>Dr.Hardik&nbsp;</span>
              <span class="highlight">Dhamsania</span>
            </h1>
            <p>
            I am Dr. Hardik Dhamsania, an experienced Orthopedic Surgeon with an M.B.B.S, M.S, FISS, FIJR Consultant in Orthopedics, and specializing in trauma, joint replacement, and sports medicine. With over 10 years of experience, I have successfully performed more than 3,600 surgeries, including 3,000+ trauma cases, 500+ arthroplasty procedures, and 100+ arthroscopy surgeries. My expertise lies in minimally invasive techniques, ensuring faster recovery and better outcomes for my patients. I focus on advanced surgical methods for ligament repair and joint preservation. My goal is to provide precise and personalized orthopedic care with a commitment to excellence. I stay updated with the latest medical advancements to offer the best treatment options. My approach focuses on patients first, emphasizing compassionate care and long-term recovery. I also participate in medical research and training programs to enhance orthopedic knowledge. With a strong dedication to my field, I strive to help my patients regain mobility and lead a pain-free life.
            </p>
          </div>
        </div>
        <section className="dental-expireance-section">
        <div className="dental-expireance-container">
          <div className="experience-text">
            <h2>
              Experience in <br /> Orthopedic Surgery!
            </h2>
          </div>

          <div className="icons-box">
            <div className="icon-item">
              <FaUniversity className="icon" />
            </div>
            <div className="icon-item">
              <FaPlaneDeparture className="icon" />
            </div>
            <div className="icon-item">
              <FaUserMd className="icon" />
            </div>
            <div className="icon-item">
              <GiKneeCap className="icon" />
            </div>
          </div>

          <div className="background-image">
            <button className="cta-button">View More About the Doctor </button>
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}

export default About;
