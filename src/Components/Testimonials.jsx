import React, { useState } from "react";

function Testimonials() {
  const testimonialsData = [
    {
      img: "/img/banner.png",
      name: "Name",
      role: "Knee Replacement",
      feedback:
        "I was struggling with knee pain for years. Thanks to the expert care at the clinic, I can now walk pain-free and enjoy life again. Truly a life-changing experience!",
    },
    {
      img: "/img/banner.png",
      name: "Name",
      role: "Shoulder Surgery",
      feedback:
        "I had a rotator cuff injury that made daily tasks difficult. The surgery and physiotherapy provided were exceptional. Now, I can move my shoulder freely without any discomfort!",
    },
    {
      img: "/img/banner.png",
      name: "Name",
      role: "Hip Replacement",
      feedback:
        "After my hip replacement, I feel like a new person. The recovery was smooth, and I can finally walk without pain. The doctors and staff were incredibly supportive!",
    },
    {
      img: "/img/banner.png",
      name: "Name",
      role: "Sports Injury Recovery",
      feedback:
        "I tore my ACL playing football, and I thought my career was over. The orthopedic team guided me through surgery and rehab. Now, I'm back on the field stronger than ever!",
    },
    {
      img: "/img/banner.png",
      name: "Name",
      role: "Sports Injury Recovery",
      feedback:
        "I tore my ACL playing football, and I thought my career was over. The orthopedic team guided me through surgery and rehab. Now, I'm back on the field stronger than ever!",
    },
    {
      img: "/img/banner.png",
      name: "Name",
      role: "Sports Injury Recovery",
      feedback:
        "I tore my ACL playing football, and I thought my career was over. The orthopedic team guided me through surgery and rehab. Now, I'm back on the field stronger than ever!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h2 className="testimonials-title">
          Clients With <span className="highlight">Reason To Smile</span>
        </h2>
        <button className="button">All Client Testimonials</button>
      </div>

      <div className="testimonials-wrapper" style={{ width: `${testimonialsData.length * 270}px` }}>
        <div
          className="testimonials"
          style={{
            transform: `translateX(-${currentIndex * 1080}px)`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.img} alt={testimonial.name} />
              <span className="testimonials-name">{testimonial.name}</span>
              <div className="role">{testimonial.role}</div>
              <p className="testimonials-peragraph">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;