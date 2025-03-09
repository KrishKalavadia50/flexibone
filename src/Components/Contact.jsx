import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="contact-container">
      <h2>Contact Our Orthopaedic Specialists</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        {/* Name Field */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label>Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Type your message"
          ></textarea>
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
