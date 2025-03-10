import React, { useEffect, useState } from "react";


function Feedbackpopup() {
  const [active, setActive] = useState(false);

  function openPopup() {
    setActive(true);
  }

  function closePopup() {
    setActive(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      let popup = document.getElementById("feedbackPopup");
      let button = document.querySelector(".feedback-button");

      if (popup && !popup.contains(event.target) && event.target !== button) {
        closePopup();
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div class="feedback-button" onClick={openPopup}>
        Feedback
      </div>
      <div id="feedbackPopup" class="feedback-popup" style={active?{ left:'calc(50% - 175px)'}:{left:"-100%"}}>
        <div class="feedback-content">
          <span class="close-btn" onClick={closePopup}>&times;</span>
          <h2>Patient Feedback</h2>
          <form action="#" method="post" enctype="multipart/form-data">

            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required />

            <label for="surgery">Surgery Type</label>
            <select id="surgery" name="surgery">
              <option value="" disabled selected>Select Surgery Type</option>
              <option value="Knee Replacement">Knee Replacement</option>
              <option value="Hip Replacement">Hip Replacement</option>
              <option value="Spinal Surgery">Spinal Surgery</option>
              <option value="Arthroscopy">Arthroscopy</option>
              <option value="Other">Other</option>
            </select>

            <label for="message">Your Feedback</label>
            <textarea id="message" name="message" rows="4" placeholder="Share your experience..." required></textarea>

            <label for="userImage">Upload Your Image</label>
            <input type="file" id="userImage" name="userImage" accept="image/*" />

            <button type="submit">Submit Feedback</button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Feedbackpopup