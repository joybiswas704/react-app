import React from "react";
import "./Contact.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalPop from "../ModalPop/ModalPop";
// import Axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      step: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  modalPopHandler = () => {
    return <ModalPop />;
  };

  stateManagement = () => {
    this.setState({
      step: !this.state.step,
    });
  };

  // async handleSubmit(event) {
  //   this.stateManagement();
  //   event.preventDefault();
  //   const { firstName, lastName, email, message } = this.state;
  //   const form = await Axios.post("/api/form", {
  //     firstName,
  //     lastName,
  //     email,
  //     message,
  //   });
  // }

  render() {
    if (this.state.step) {
      return (
        <Container>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Col xs={12} md={12} lg={12}>
              <div className="contact">
                <Form>
                  <Form.Row>
                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          className="control"
                          placeholder="First name"
                          name="firstName"
                          onChange={this.handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          className="control"
                          placeholder="Last name"
                          name="lastName"
                          onChange={this.handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      className="control"
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      className="control"
                      as="textarea"
                      rows="5"
                      name="message"
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <Button
                      variant="outline-info"
                      type="submit"
                      className="submit-btn"
                      onClick={this.stateManagement}
                    >
                      Connect With Me
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      );
    } else if (!this.state.step) {
      return (
        <div>
          <ModalPop action={this.stateManagement} />
        </div>
      );
    }
  }
}

export default Contact;
