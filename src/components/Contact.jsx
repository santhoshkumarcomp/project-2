import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "santhoshkumarcomp@gmail.com",
      link: "mailto:santhoshkumarcomp@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 (636) 955-7279",
      link: "tel:+916369557279",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Vellore, Tamil Nadu, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle text-center">
          Have a project in mind? Let's work together to bring your ideas to
          life.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities and
              exciting projects. Whether you have a question or just want to say
              hi, I'll try my best to get back to you!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-availability">
              <div className="availability-indicator">
                <div className="status-dot"></div>
                <span>Available for freelance work</span>
              </div>
              <p>Currently open to new opportunities and collaborations.</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle size={48} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary submit-btn ${
                      isSubmitting ? "submitting" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
