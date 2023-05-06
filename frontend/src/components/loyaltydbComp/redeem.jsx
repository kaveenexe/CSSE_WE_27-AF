import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import "./styles.css";

export default function Redeem() {
  const [progress, setProgress] = useState(100); // User's current points
  const [buttonDisabled, setButtonDisabled] = useState(true); // Button is disabled by default

  //toast
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  const requiredPoints = 100; // Required points to claim the voucher

  // Handle button click
  const handleClaimVoucher = () => {
    if (progress >= requiredPoints) {
      // Claim voucher logic goes here
      console.log("Voucher claimed!");
    }
  };

  // Enable/disable button based on user's points
  if (progress >= requiredPoints) {
    if (buttonDisabled) {
      setButtonDisabled(false);
    }
  } else {
    if (!buttonDisabled) {
      setButtonDisabled(true);
    }
  }

  const handleBothClicks = () => {
    toggleShowA();
    handleClaimVoucher();
  };

  return (
    <div className="cards_styles color_div">
      <div className="card_flex">
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <ProgressBar
              now={progress}
              max={requiredPoints}
              label={`${progress}`}
              variant="success"
            />
            <Button
              variant="primary"
              style={{ margin: "1rem 0" }}
              onClick={handleBothClicks}
              disabled={buttonDisabled}
              className="button_styles"
            >
              Claim Voucher
            </Button>
          </Card.Body>
        </Card>
        <div>
          <Col md={12} className="mb-2">
            <Toast show={showA} onClose={toggleShowA} className="redeem_toast">
              <Toast.Header className="toast_header">
                <strong className="me-auto">Voucher Name</strong>
              </Toast.Header>
              <Toast.Body>Woohoo, you claimed a voucher!</Toast.Body>
            </Toast>
          </Col>
        </div>
      </div>
    </div>
  );
}
