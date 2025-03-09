import React, { useRef, useEffect, useState } from "react";
import {
  GiLeg,
  GiKneeCap,
  GiShoulderArmor,
  GiArm,
  GiPelvisBone,
  GiBodyBalance,
  GiBrokenBone,
  GiFootTrip,
} from "react-icons/gi";

function Services() {
  const sliderRef = useRef(null);
  const afterImageRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    const afterImage = afterImageRef.current;
    const imageWrapper = imageWrapperRef.current;

    if (!slider || !afterImage || !imageWrapper) return;

    const onMouseDown = () => setIsDragging(true);
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (event) => {
      if (!isDragging) return;

      let offsetX = event.clientX - imageWrapper.getBoundingClientRect().left;
      let width = imageWrapper.offsetWidth;

      if (offsetX < 0) offsetX = 0;
      if (offsetX > width) offsetX = width;

      let percentage = (offsetX / width) * 100;
      afterImage.style.width = `${percentage}%`;
      slider.style.left = `${percentage}%`;
    };

    slider.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDragging]);

  return (
    <div>
      <div className="services-header">
        <span className="service-main-title">Services</span>
        <a href="#" className="view-more">
          View more
        </a>
      </div>

      <div class="services-container">
        <div class="service-box">
          <div class="service-icon">
            <GiLeg className="sicon"></GiLeg>
          </div>
          <div class="service-text">
            <div class="service-title"> Knee Arthroscopy</div>
            <div class="service-description">
              Minimally invasive knee joint treatment.
            </div>
          </div>
        </div>
        <div class="service-box">
          <div class="service-icon-blue">
            <GiShoulderArmor className="siconb"></GiShoulderArmor>
          </div>
          <div class="service-text">
            <div class="service-title">Shoulder Arthroscopy</div>
            <div class="service-description">
              Keyhole surgery for shoulder issues.
            </div>
          </div>
        </div>
        <div class="service-box">
          <div class="service-icon">
            <GiPelvisBone className="sicon"></GiPelvisBone>
          </div>
          <div class="service-text">
            <div class="service-title">Hip Arthroscopy</div>
            <div class="service-description">
              Minimally invasive hip joint repair.
            </div>
          </div>
        </div>
        <div class="service-box">
          <div class="service-icon-blue">
            <GiKneeCap className="siconb"></GiKneeCap>
          </div>
          <div class="service-text">
            <div class="service-title">Total Knee Replacement</div>
            <div class="service-description">
              Surgical knee joint replacement.
            </div>
          </div>
        </div>
        <div class="service-box">
          <div class="service-icon">
            <GiBodyBalance className="sicon"></GiBodyBalance>
          </div>
          <div class="service-text">
            <div class="service-title">Complex Trauma Surgery</div>
            <div class="service-description">
              Advanced treatment for severe injuries.
            </div>
          </div>
        </div>
        <div class="service-box">
          <div class="service-icon-blue">
            {" "}
            <GiBrokenBone className="siconb"></GiBrokenBone>
          </div>
          <div class="service-text">
            <div class="service-title">Hemi Replacement</div>
            <div class="service-description">
              Partial joint replacement surgery.
            </div>
          </div>
        </div>
        <div class="service-box">
          <div class="service-icon">
            <GiFootTrip className="sicon"></GiFootTrip>
          </div>
          <div class="service-text">
            <div class="service-title">Knee Sports Injuries</div>
            <div class="service-description">
              Treatment for knee-related sports injuries.
            </div>
          </div>
        </div>
        <div class="service-box">
          <div class="service-icon-blue">
            <GiArm className="siconb"></GiArm>
          </div>
          <div class="service-text">
            <div class="service-title">Elbow Replacement</div>
            <div class="service-description">
              Artificial implant for elbow joint.
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="service-review-container">
          <div className="text-section">
            <h2>
              Strong Bones, Pain-Free Life{" "}
              <span>Excellence in Orthopedic Care</span>
            </h2>
            <p>
              Joint pain and mobility issues can impact your daily life. With
              advanced treatments at FlexiBone, you can regain strength and move
              freely again—because every step matters.
            </p>

            <ProgressBar label="Patient Recovery Rate" percentage={95} />
            <ProgressBar label="Surgical Success Rate" percentage={98} />
            <ProgressBar label="Mobility Improvement" percentage={90} />
          </div>

          <div className="image-section">
            <div className="image-wrapper" ref={imageWrapperRef}>
              <img
                className="before"
                src="/img/Hemi Before.png"
                alt="Before Treatment"
              />
              <div className="after" ref={afterImageRef}>
                <img src="img/Hemi After.png" alt="After Treatment" style={{filter:"grayscale(100%)"}} />
              </div>
              <div className="slider" ref={sliderRef}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceBox({ icon, title, description }) {
  return (
    <div className="service-box">
      <div className="service-icon">{icon}</div>
      <div className="service-text">
        <div className="service-title">{title}</div>
        <div className="service-description">{description}</div>
      </div>
    </div>
  );
}

function ProgressBar({ label, percentage }) {
  return (
    <div className="progress-bar-container">
      <p>{label}</p>
      <div className="progress-bar">
        <span style={{ width: `${percentage}%` }}></span>
      </div>
    </div>
  );
}

export default Services;
