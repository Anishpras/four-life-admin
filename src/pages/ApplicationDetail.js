import React from "react";
import { useParams } from "react-router-dom";
import "../style/applicationDetail.scss";
const ApplicationDetail = ({ applicationList }) => {
  const { id } = useParams();

  const applicationData = applicationList.filter(
    (application) => application.distributorId === id
  );
  return (
    <>
      {applicationData.map((application) => {
        return (
          <div className="application">
            <div className="application__first">
              <div
                className="application__firstWrapper1"
                key={application.distributorId}>
                <h1>{application.distributorId}</h1>
                <h1> Date</h1>
                <img
                  className="application__img"
                  src={application.profileImage}
                  alt=""
                />
              </div>
              <div className="application__firstWrapper2">
                <h3>
                  <span>
                    OldDistributorID:- {application.OldDistributorID}{" "}
                  </span>{" "}
                </h3>
                <h3>
                  FSAAI registration:-  {application.fssai_registration_check}{" "}
                  </h3>
                  <h3>
                    OldDistributorID:- {application.fssai_registration_Number}{" "}
                  </h3>{" "}
              </div>
            </div>
            <div className="application__2ndWrapper1">
              <h1>APPLICANT INFORMATION</h1>
              <div className="application__applicationType">
                <h4>
                  {" "}
                  <span> Applicant Type:-{application.applicationType}</span>
                
                </h4>
              </div>
              <div className="application__applicationDetail">
                <h3>
                  <span> Application Name:-{application.applicantName}</span>{" "}
                </h3>
                <div className="application__2ndwrapper2">
                  <h3>
                    <span>
                      {" "}
                      Aadhaar Number:- {application.applicantAadharNumber}
                    </span>
                    <button>
                      <a href={application.applicantAadharFile}>
                        <span>Click Here to Open File</span>
                      </a>{" "}
                    </button>{" "}
                  </h3>
                  <h3>
                    <span>Pan Number:-{application.applicant_PAN_Number}</span>
                    <button>
                      <a href={application.applicantPanFile}>
                        <span>Click Here to Open File</span>
                      </a>{" "}
                    </button>{" "}
                  </h3>
                </div>
                <h3>
                  <span> Co Application Name:-{application.applicantName}</span>{" "}
                </h3>
                <div className="application__2ndwrapper3">
                  <h3>
                    {" "}
                    <span>
                      {" "}
                      Co-Applicant Aadhaar Number:-
                      {application.coApplicantAadharNumber}
                    </span>
                    <button>
                      <a href={application.coApplicantAadharFile}>
                        <span>Click Here to Open File</span>
                      </a>{" "}
                    </button>{" "}
                  </h3>
                  <h3>
                    {" "}
                    <span>
                      {" "}
                      Co-Applicant Pan Number:-{" "}
                      {application.coApplicant_PAN_Number}
                    </span>
                    <button>
                      <a href={application.coApplicantPanFile}>
                        <span>Click Here to Open File</span>
                      </a>{" "}
                    </button>{" "}
                  </h3>
                </div>
                <div className="application__applicantAddress">
                  <h3>
                    <span> Address:- {application.applicantAddress}</span>
                    <button>
                      <a href={application.applicantAddressProofFile}>
                        <span> Click Here to Download Address Proof</span>{" "}
                      </a>
                    </button>{" "}
                  </h3>

                  <h4 className="application__applicantAddressh4">
                    <p>
                      <span> City:-{application.applicant_city}</span>
                    </p>{" "}
                    <p>
                      <span>State:- {application.applicant_state}</span>
                    </p>{" "}
                    <p>
                      <span>Pin Code:-{application.applicant_pin_code}</span>
                    </p>
                  </h4>
                  <h4 className="application__applicantAddressh4">
                    <p>
                      {" "}
                      <span>
                        {" "}
                        Date of Birth:-{application.applicant_dateOfBirth}
                      </span>
                    </p>{" "}
                    <p>E Mail:- {application.applicant_email}</p>
                  </h4>
                  <h4 className="application__applicantAddressh4">
                    {" "}
                    <p>
                      <span>Home Phone:- {application.home_phone}</span>
                    </p>{" "}
                    <p>
                      <span> Mobile Phone:-{application.mobile_phone}</span>
                    </p>{" "}
                    <p>
                      <span> Work Phone:-{application.work_phone}</span>
                    </p>{" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className="application__distributorShippingAddress">
              <h1>DISTRIBUTOR SHIPPING ADDRESS</h1>
              <div className="application__distributorWrapper">
                <h3 className="application__applicantAddressh4">
                  {" "}
                  <span>
                    {" "}
                    Address:-{application.distributor_shipping_address}
                  </span>{" "}
                </h3>
                <h3 className="application__applicantAddressh4">
                  {" "}
                  <p>
                    <span> City:-{application.distributorCity}</span>
                  </p>{" "}
                  <p>
                    <span> State:-{application.distributorState}</span>
                  </p>{" "}
                  <p>
                    <span>Pin Code:-{application.distributorPinCode}</span>
                  </p>
                </h3>
              </div>
            </div>
            <div className="application__EnrollerInfo">
              <h1>ENROLLER INFORMATION</h1>
              <h3 className="application__applicantAddressh4">
                {" "}
                <span>Enroller Id:-{application.enrollerid}</span>{" "}
                <p>
                  <span>Name:- {application.enrollername}</span>
                </p>
              </h3>
            </div>
            <div className="application__EnrollerInfo">
              <h1>SPONSOR INFORMATION</h1>
              <h3 className="application__applicantAddressh4">
                {" "}
                <span> Enroller Id:-{application.sponserId}</span>{" "}
                <p>
                  <span> Name:- {application.sponsername}</span>
                </p>
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ApplicationDetail;
