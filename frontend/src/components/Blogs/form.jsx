import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./styles.css";

export default function blogform() {
  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Blog Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter a name for your blog"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Places
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter what places includes in your blog"
            />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Your Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter your name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Blog
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your blog here"
            />
          </Col>
        </Form.Group>
        
        <Row>
          <Col>
            <Button
              className="accordian_button"
              variant="primary"
              type="submit"
            >
              Submit Blog
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
