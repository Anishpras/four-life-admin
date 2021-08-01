import React from "react";
import { useParams } from "react-router-dom";

const ApplicationDetail = ({ applicationList }) => {
  const { id } = useParams();

  const applicationData = applicationList.filter(
    (application) => application.distributorId === id
  );

  return (
    <>
      {applicationData.map((application) => {
        return (
          <div key={application.distributorId}>
            <h1>{application.distributorId}</h1>
          </div>
        );
      })}
    </>
  );
};

export default ApplicationDetail;
