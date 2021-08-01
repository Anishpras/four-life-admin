import React from "react";
import { Link } from "react-router-dom";

const ApplicationList = ({ applicationList }) => {
  return (
    <>
      {applicationList.map((application, index) => {
        return (
          <Link key={index} to={`/${application.distributorId}`}>
            <h1>{`Name Of Applicant : ${application.applicantName} ID: ${application.distributorId}`}</h1>
          </Link>
        );
      })}
    </>
  );
};

export default ApplicationList;
