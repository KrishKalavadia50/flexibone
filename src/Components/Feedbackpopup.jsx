import React from 'react'

function Feedbackpopup() {

function openPopup() {
    document.getElementById("feedbackPopup").classList.add("show");
}
function closePopup() {
    document.getElementById("feedbackPopup").classList.remove("show");
}
window.onclick = function(event) {
    let popup = document.getElementById("feedbackPopup");
    if (event.target !== popup && !popup.contains(event.target) && event.target !== document.querySelector(".feedback-button")) {
        closePopup();
    }
}
  return (
    <div>
    <div class="feedback-button" onclick="openPopup()">
        <span>Feedback</span>
    </div>
    <div id="feedbackPopup" class="feedback-popup">
        <div class="feedback-content">
            <span class="close-btn" onclick="closePopup()">&times;</span>
            <h2>Patient Feedback</h2>
            <form action="#" method="post" enctype="multipart/form-data">

                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" required/>

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
                <input type="file" id="userImage" name="userImage" accept="image/*"/>

                <button type="submit">Submit Feedback</button>

                </form>
        </div>
    </div>

    </div>
  )
}

export default Feedbackpopup
