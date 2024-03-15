import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const reason = () => {
  const endPoint: string =
    "https://api.preview.platform.athenahealth.com/v1/195900/patientappointmentreasons/newpatient?departmentid=1&providerid=12";
  const [apiData, setApiData] = useState<any>([]);
  const navigate = useNavigate();
  const getAPI = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer GAgpgUDpTqoYB8V4Jh6VZOyLQ233",
    };
    try {
      const response = await axios.get(endPoint, {
        headers: headers,
      });
      setApiData(response.data.patientappointmentreasons);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <h2 className="text-center mb-4" style={{ color: "darkcyan" }}>
            Appointment Reason
          </h2>
          
        </div>
      </div>

      <Table responsive bordered className="table">
        <thead className="table-secondary">
          <tr>
            <th className="text-center"> S.No </th>
            <th className="text-center">PatientName</th>
            <th className="text-center">ReasonId</th>
            <th className="text-center">ReasonType</th>
            <th className="text-center">Description</th>
            <th className="text-center">Reason</th>
</tr>
        </thead>
        <tbody>
          {apiData.length > 0 &&
            apiData?.map((item: any, index: number) => {
              return (
                <tr>
                  <th scope="row" className="text-center">
                    {index + 1}
                  </th>
                  <td className="text-center">{item.PatientName ?? "-"}</td>
                  <td className="text-center">{item.ReasonId ?? "-"}</td>
                  <td className="text-center">{item.Reason ?? "-"}</td>
                  <td className="text-center">{item.Description ?? "-"}</td>
                  <td className="text-center">{item.Action}</td>

                  
                  <td>
                    <div className="d-flex">
                      
                      <button className="btn btn-success">
                        View
                      </button>
                      
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default reason;
