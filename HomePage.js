import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-background">
      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <Card className="homepage-card shadow-lg p-4 p-md-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">
              Appointment Booking System
            </h1>
            <p className="lead text-muted">
              Select your role to continue to the portal
            </p>
          </div>

          <Row className="g-4">
            {/* Admin Card */}
            <Col xs={12} md={4}>
              <Card className="h-100 role-card" onClick={() => navigate("/admin/login")}>
                <Card.Body className="text-center p-4 d-flex flex-column">
                  <div className="emoji-circle admin-emoji mb-3">
                    <span className="emoji" role="img" aria-label="Admin">🔐</span>
                  </div>
                  <h3 className="h4 mb-3">Administrator</h3>
                  <p className="text-muted mb-4">
                    Manage system settings, users, and appointments
                  </p>
                  <Button variant="primary" className="mt-auto">
                    Admin Login
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Student Card */}
            <Col xs={12} md={4}>
              <Card className="h-100 role-card" onClick={() => navigate("/slogin")}>
                <Card.Body className="text-center p-4 d-flex flex-column">
                  <div className="emoji-circle student-emoji mb-3">
                    <span className="emoji" role="img" aria-label="Student">👨‍🎓</span>
                  </div>
                  <h3 className="h4 mb-3">Student</h3>
                  <p className="text-muted mb-4">
                    Book appointments with your teachers
                  </p>
                  <Button variant="success" className="mt-auto">
                    Student Login
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Teacher Card */}
            <Col xs={12} md={4}>
              <Card className="h-100 role-card" onClick={() => navigate("/tlogin")}>
                <Card.Body className="text-center p-4 d-flex flex-column">
                  <div className="emoji-circle teacher-emoji mb-3">
                    <span className="emoji" role="img" aria-label="Teacher">👩‍🏫</span>
                  </div>
                  <h3 className="h4 mb-3">Teacher</h3>
                  <p className="text-muted mb-4">
                    Manage your schedule and appointments
                  </p>
                  <Button variant="warning" className="mt-auto">
                    Teacher Login
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default HomePage;