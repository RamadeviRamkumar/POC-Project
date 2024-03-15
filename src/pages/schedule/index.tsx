import axios from "axios";
import React, { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import { Table } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pagination from '@mui/material/Pagination';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const Schedule = () => {
  const endPoint: string = "https://api.preview.platform.athenahealth.com/v1/195900/appointmenttypes";
  const [apiData, setApiData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const navigate = useNavigate();
  const getAPI = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer WzAERARtt9GFAVlMerjCuwxotuyX",
    };
    try {
      const response = await axios.get(endPoint, {
        headers: headers,
      });
      setApiData(response.data.appointmenttypes);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = apiData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <h2 className="text-center mb-4" style={{ color: "darkcyan" }}>
            PATIENT APPOINTMENT
          </h2>
          <div>
            <button
              className="btn btn-dark me-2"
              onClick={() => {
                navigate("/add");
              }}
            >
              <i className="bi bi-plus"></i> Create Appointment
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                // Handle schedule button click
              }}
            >
              Schedule
            </button>
          </div>
        </div>
      </div>

      <Table responsive bordered className="table">
        <thead className="table-secondary">
          <tr>
            <th className="text-center"> S.No </th>
            <th className="text-center">Appointmenttypeid</th>
            <th className="text-center">Name</th>
            <th className="text-center">ShortName</th>
            <th className="text-center">Duration</th>
            <th className="text-center">Generic</th>
            <th className="text-center">Action</th>
            {/* <th className="text-center">Patientdisplayname</th> */}
            {/* <th className="text-center">Patient</th> */}
            
            {/* <th className="text-center">TemplateOnly</th> */}
            {/* <th className="text-center">CreateenCounterCheckin</th> */}
          </tr>
        </thead>
        <tbody>
          {currentRows.length > 0 &&
            currentRows?.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <th scope="row" className="text-center">
                    {indexOfFirstRow+index + 1}
                  </th>
                  <td className="text-center">{item.appointmenttypeid ?? "-"}</td>
                  <td className="text-center">{item.name ?? "-"}</td>
                  <td className="text-center">{item.shortname ?? "-"}</td>
                  <td className="text-center">{item.duration ?? "-"}</td>
                  <td className="text-center">{item.generic ? <DoneIcon style={{color:'green'}}/> : <CloseIcon style={{color:'red'}}/>}</td>
                  <td>
                    <div className="d-flex gap-3 justify-content-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          navigate(``);
                        }}
                      >
                        <VisibilityIcon/>
                      </button>
                      <button className="btn btn-secondary">
                        <i className="bi bi-trash3-fill "></i>
                      </button>
                      
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(apiData.length / rowsPerPage)}
          variant="outlined"
          color="secondary"
          onChange={handleChangePage}
        />
      </div>
    </div>                                                                                                
  );
};

export default Schedule;
