import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { ResumeTable } from "./ResumeTable";
import { Redirect, useLocation } from "react-router";
export const ResumeForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState([
    {
      email: "",
      fname: "",
      addr1: "",
      addr2: "",
      city: "",
      st: "",
      zip: "",
      lang: "",
      school: "",
      degree: "",
      field: "",
      edusdate: "",
      eduendate: "",
      grade: "",
      skill: "",
      role: "",
      expsd: "",
      expendd: "",
      desc: ""
    }
  ]);
  useEffect(() => {
    console.log(data.email);
  });
  const inputEvent = event => {
    const value = event.target.value;
    const name = event.target.name;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = event => {
    console.log(data);
    <Redirect to="/table" />;
  };
  return (
    <>
      <form className="parentformstyle">
        <Form.Row>
          <Col sm={3} md={4} lg={6}>
            PERSONAL INFO
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={inputEvent}
                value={data.email}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                onChange={inputEvent}
                value={data.fname}
                placeholder="Enter full name"
              />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="addr1"
                onChange={inputEvent}
                value={data.addr1}
                placeholder="1234 Main St"
              />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                name="addr2"
                onChange={inputEvent}
                value={data.addr2}
                placeholder="Apartment, studio, or floor"
              />
            </Form.Group>
            <Form.Row>
              <Form.Group controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={inputEvent}
                  value={data.city}
                  name="city"
                />
              </Form.Group>

              <Form.Group controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  onChange={inputEvent}
                  value={data.st}
                  name="st"
                  as="select"
                  defaultValue="Choose..."
                >
                  <option>Choose...</option>
                  <option>Assam</option>
                  <option>Kerela</option>
                  <option>UttarPradesh</option>
                  <option>Maharashtra</option>
                  <option>TamilNadu</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  onChange={inputEvent}
                  value={data.zip}
                  name="zip"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formBasic">
              <Form.Label>Languages</Form.Label>
              <Form.Control
                type="text"
                name="lang"
                onChange={inputEvent}
                value={data.lang}
                placeholder="Enter langauges you know"
              />
            </Form.Group>
          </Col>
          <Col sm={3} md={4} lg={6}>
            EDUCATION
            <Form.Group controlId="formBasic">
              <Form.Label>School</Form.Label>
              <Form.Control
                type="text"
                name="school"
                onChange={inputEvent}
                value={data.school}
                placeholder="Name of the institute"
              />
            </Form.Group>
            <Form.Group controlId="formBasic">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                name="degree"
                onChange={inputEvent}
                value={data.degree}
                placeholder="Name of the Degree"
              />
            </Form.Group>
            <Form.Group controlId="formBasic">
              <Form.Label>Field of Study</Form.Label>
              <Form.Control
                type="text"
                name="field"
                onChange={inputEvent}
                value={data.field}
                placeholder="Field of study"
              />
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group controlId="formBasic">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="month"
                    onChange={inputEvent}
                    value={data.edusdate}
                    name="edusdate"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasic">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="month"
                    name="eduendate"
                    onChange={inputEvent}
                    value={data.eduendate}
                    placeholder=""
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="formBasic">
              <Form.Label>Grade</Form.Label>
              <Form.Control
                type="number"
                name="grade"
                onChange={inputEvent}
                value={data.grade}
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formBasic">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                name="skill"
                onChange={inputEvent}
                value={data.skill}
                placeholder="Enter your skills"
              />
            </Form.Group>
            Experience
            <Form.Row>
              <Col>
                <Form.Group controlId="formBasic">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    onChange={inputEvent}
                    value={data.role}
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasic">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="month"
                    name="expsd"
                    onChange={inputEvent}
                    value={data.expsd}
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasic">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="month"
                    name="expendd"
                    onChange={inputEvent}
                    value={data.expendd}
                    placeholder=""
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Why should we hire you?</Form.Label>
              <Form.Control
                name="desc"
                onChange={inputEvent}
                value={data.desc}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <button
          type="submit"
          class="btn btn-outline-success"
          onClick={handleSubmit}
        >
          submit{" "}
        </button>
      </form>
    </>
  );
};
