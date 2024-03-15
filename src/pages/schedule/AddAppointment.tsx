import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FormControlLabel, Checkbox } from "@mui/material";
import { TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAppointment = () => {
   const navigate = useNavigate();
  const endPoint = `https://api.preview.platform.athenahealth.com/v1/195900/appointmenttypes`; 
  const [appointment, setAppointment] = useState({
    name: "",
    shortname: "",
    patient: false, 
    duration: "",
    appointmentId:" ",
  });
  const handleBack = () => {
    navigate (-1)
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAppointment((prevPatient) => ({ ...prevPatient, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer WzAERARtt9GFAVlMerjCuwxotuyX'
      }
      const response = await axios.post(endPoint, appointment, { headers });
      console.log("Response:", response.data);
      navigate('/schedule')
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.post(endPoint);
        setAppointment(response.data[0]); 
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="row m-0 text-center mb-0 mt-3 p-0">
        <h2 style={{ color: "darkcyan" }}>Create New AppointmentId</h2>
      </div>
      <div className="d-flex justify-content-center mb-3 m-1 p-0">
        
      </div>
      <div className="FormContainer">
        <Card className="p-4">
          <Form onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="name"
                variant="outlined"
                type="text"
                name="name"
                value={appointment.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic-2"
                label="duration"
                variant="outlined"
                type="text"
                name="duration"
                value={appointment.duration}
                onChange={handleChange}
                placeholder="duration"
                required
              />
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic-3"
                label="shortname"
                variant="outlined"
                type="text"
                name="shortname"
                value={appointment.shortname}
                onChange={handleChange}
                placeholder="ShortName"
                required
              />
            </div>
            <div className="mb-3">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={appointment.patient}
                    onChange={handleCheckboxChange}
                    name="patient"
                  />
                }
                label="Is Patient"
              />
            </div>
            <div className="d-flex justify-content-between">
              <Button  variant="primary" type="submit">
                Submit
              </Button>
              <Button type='button' variant="secondary"onClick={handleBack}>Back</Button>
            </div>
            

          </Form>
         
        </Card>
      </div>
    </>
  );
};

export default AddAppointment;
