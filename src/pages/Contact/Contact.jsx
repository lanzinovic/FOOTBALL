import React from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <div className="contact-section">
        <h3>CONTACT US</h3>
        <hr />
        <div className="contact-paragraphs">
          <p>
            Reach Us through Our Email Addresses and our whatsapp number Below,
            And A Team Member Will Get Back To You As Soon As Possible.
          </p>
          <p>For general enquiries, Advert and sponsorship:</p>
          <p>
            Get to us on:
            <a href="mailto:suretips833@gmail.com"> suretips833@gmail.com</a>
          </p>

          <p>Or</p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a href="whatsapp://send?phone=+254700146711"> +254700146711</a>
          </p>

          <p>Working Hours: </p>
          <p>
            Mondays to Saturdays <strong>(8am to 4pm) (EAT)</strong>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
