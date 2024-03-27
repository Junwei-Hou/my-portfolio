import { contact, section5Title, social } from "../../profile";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Space, message } from "antd";

import {
  getFormData,
  loaded,
  disableAllButtons,
} from "../../form-submission-handler";
const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault(); // we are submitting via xhr below
    setIsSubmitted(true);
    messageApi.open({
        type: "loading",
        content: "Email is being sent.",
      });
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;
    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }
    
    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      console.log("xhr************", xhr);
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset();
        messageApi.open({
          type: "success",
          content:
            "Thank you for submitting the form! I will get back to you soon.",
        });
        setIsSubmitted(false);
        var formElements = form.querySelector(".form-elements");
        if (formElements) {
          formElements.style.display = "none"; // hide form
        }
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
      }
    };

    // url encode form data for sending as post data
    var encoded = Object.keys(data)
      .map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
    xhr.send(encoded);
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", loaded, false);
    return () => {
      document.removeEventListener("DOMContentLoaded", loaded, false);
    };
  }, []);

  return (
    <div className="parallax">
      {contextHolder}
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half ">
              <form
                className="gform"
                data-email="lesliehoudesign@gmail.com"
                action="https://script.google.com/macros/s/AKfycbwA51vOExUcZ_gM_Ei6MTDhEssO_xZX-mIHwPBuhEg1GycSqarmD0zzPVsTZQIhDSLT/exec"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  id="fname"
                  name="Name"
                  placeholder="Your name"
                  required
                  disabled={isSubmitted}
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required
                  disabled={isSubmitted}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                ></input>
                {/* <input type="text" id="sub" name="Subject" placeholder="Subject" required></input> */}
                <textarea
                  id="msg"
                  name="Message"
                  placeholder="Message"
                  required
                  disabled={isSubmitted}
                ></textarea>
                <button style={{ cursor: "pointer" }} type="submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-12 col-sm-6 half">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.facebook && (
                    <a
                      title="Visit Facebok profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.facebook}
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      title="Visit Twitter profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.twitter}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {social.instagram && (
                    <a
                      title="Visit Instagram profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.instagram}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <br />
                </div>
                {social.resume && (
                  <a title="Download Resume" href={social.resume} download>
                    <i className="fas fa-download"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p id="not-dark" className="Copy">2020 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p> */}
    </div>
  );
};

export default Contact;
