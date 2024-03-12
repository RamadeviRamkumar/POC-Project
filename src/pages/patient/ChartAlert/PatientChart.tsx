import React from 'react'
import { useNavigate} from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import View from './View';
import create from './Create';
import Delete from './Delete';

const PatientChart = () => {
  const navigate = useNavigate();
    const handleCreate = () => {
        navigate('/create');
    };

    const handleDelete = () => {
        navigate('/delete');
    };

    
     const handleView = () => {
    navigate('/viewdetails');
     }

    const handleUpdate = () => {
        // Add your code for updating a patient here
        alert('Update button clicked');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className= "text-center mt-4 mb-4 ">Patient Chart Alert</h1>
                </Col>
            </Row>
            
                <div className='d-flex gap-3 justify-content-center my-2' >
                    <Button color="primary" onClick={handleCreate} className="mr-2">Create</Button>
                    <Button color="danger" onClick={handleDelete} className="mr-2">Delete</Button>
                    <Button color="info" onClick={handleView} className="mr-2" >View</Button>
                    <Button color="warning" onClick={handleUpdate}>Update</Button>
                </div>
            
        </Container>
    );
};

export default PatientChart;

