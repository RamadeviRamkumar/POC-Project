// Create.js
import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();

  const [practiceId, setPracticeId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [contentType, setContentType] = useState("");
  const [noteText, setNoteText] = useState("");

  const handleCreate = () => {
    navigate(-1);
  };

  const createChartAlert = () => {
    // Make API call using fetch
    fetch(
      `https://api.preview.platform.athenahealth.com/v1/${practiceId}/patients/${patientId}/chartalert`,
      {
        method: "POST",
        headers: {
          "Content-Type": contentType,
          Authorization: "Bearer XTbKvsUDPBMTAAZBEGMVU0S7mjwd",
        },

        body: JSON.stringify({
          notetext: noteText,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // const handleCreate = () => {
        //     navigate('patient-chart/:id')
        // }
        console.log(data);
        alert("Chart alert created successfully!");
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        alert(
          "Error creating chart alert. Please check the console for details."
        );
      });
  };

  return (
    <Container>
      <h2>Create Patient Chart Alert</h2>
      <Form>
        <FormGroup>
          <Label for="practiceId">Practice ID:</Label>
          <Input
            type="text"
            id="practiceId"
            placeholder="Enter Practice ID"
            value={practiceId}
            onChange={(e) => setPracticeId(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="patientId">Patient ID:</Label>
          <Input
            type="text"
            id="patientId"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="contentType">Content Type:</Label>
          <Input
            type="text"
            id="contentType"
            placeholder="Enter Content Type"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="noteText">Note Text:</Label>
          <Input
            type="textarea"
            id="noteText"
            placeholder="Enter Note Text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            required
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button type="button" color="primary" onClick={createChartAlert}>
            Create Chart Alert
          </Button>
          <Button type="button" color="secondary" onClick={handleCreate}>
            Back
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Create;
