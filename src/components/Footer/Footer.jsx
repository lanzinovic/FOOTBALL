import "./Footer.css";
import { IconButton } from "@mui/material";
import { Email, Phone, Sms, Telegram, WhatsApp } from "@mui/icons-material";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="partition">
          {/* Content for the website */}
          <h3>Website</h3>
          <p>
            Suretips.com is a free football prediction website that provides
            guaranteed predictions for betting.
          </p>

          <h1>SURE TIPS</h1>
          <p>Congratulations Guaranteed !!</p>
        </div>

        <div className="partition">
          {/* Content for helpful links */}
          <h3>Useful Links</h3>
          <ul className="helpfulLinks">
            <li>
              <a href="/accumulator">Tips Store</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/how-to-pay">How To Pay</a>
            </li>
            <li>
              <a href="/vip">VIP Packages</a>
            </li>
          </ul>
        </div>
        <div className="partition">
          {/* Content for football prediction */}
          <h3>Information</h3>
          <ul className="additionalLinks">
            <li>
              <a href="/latest-winnings">Latest Winnings</a>
            </li>
            <li>
              <a href="/Refund">Refund Policy</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms & Conditions</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="partition">
          {/* Content for how to get in touch */}
          <h3>Contact Us</h3>

          <IconButton
            href="https://wa.me/254769488778"
            target="_blank"
            className="iconButton"
          >
            <WhatsApp className="whatsapp" />
            <span className="iconSpan">+254769488778</span>
          </IconButton>
          <IconButton
            href="https://t.me/suretips833"
            target="_blank"
            className="iconButton"
          >
            <Telegram className="telegram" />
            <span className="iconSpan">TELEGRAM</span>
          </IconButton>
          <IconButton
            href="sms:+1234567890?body=Hello%20there!"
            target="_blank"
            className="iconButton"
          >
            <Sms className="sms" />
            <span className="iconSpan">+254769488778</span>
          </IconButton>
          <IconButton
            href="mailto:suretips833@gmail.com"
            target="_blank"
            className="iconButton"
          >
            <Email className="email" />
            <span className="iconSpan">suretips833@gmail.com</span>
          </IconButton>
          <IconButton href="tel:+254700146711" className="iconButton">
            <Phone className="phone" />
            <span className="iconSpan">+254769488778</span>
          </IconButton>
        </div>
      </footer>
      <div className="copyright">
        &copy; 2024 SureTips. All Rights Reserved. |{" "}
        <span>Designed by Starboy Solutions</span>
      </div>
    </>
  );
}
