import React from "react";
import { Link } from "react-router-dom";

const ApplicationList = ({ applicationList }) => {
  return (
    <table>
      <tr>
        <th>Name Of Applicant </th>
        <th>User Id </th>
        <th>Status </th>
      </tr>

      {applicationList.map((application, index) => {
        return (
          <tr>
            <td>{application.applicantName}</td>
            <td>{application.distributorId}</td>
            <Link key={index} to={`/${application.distributorId}`}>
              <td>
                <button>click Here</button>
              </td>
            </Link>
          </tr>
        );
      })}
    </table>
  );
};

export default ApplicationList;
