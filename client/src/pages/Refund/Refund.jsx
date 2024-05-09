import React from "react";
import "./Refund.css";
import Footer from "../../components/Footer/Footer";

export default function Refund() {
  return (
    <>
      <div className="refund-section">
        <h3>Refund Policy</h3>
        <hr />
        <div className="refund-paragraphs">
          <p>
            <strong>Refund Policy:</strong> Betting may be quite risky, so users
            should only gamble with funds they can afford to lose comfortably.
            They should also make sure they completely understand the dangers
            involved and seek guidance if needed. We don’t provide returns for
            any of our goods or services. We will try our best to fix any
            problems you may be having with the subscription if you{" "}
            <a href="/Contact"> contact us</a> with your problems or queries.
          </p>
        </div>
      </div>
      <Footer className="refund-footer" />
    </>
  );
}
