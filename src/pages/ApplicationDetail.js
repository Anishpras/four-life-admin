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
                  Have you ever held a 4Life distributor ID?
                  <span>
                    OldDistributorID {application.OldDistributorID}{" "}
                  </span>{" "}
                </h3>
                <h3>
                  FSAAI registration? {application.fssai_registration_check}{" "}
                  <span>
                    OldDistributorID {application.fssai_registration_Number}{" "}
                  </span>{" "}
                </h3>
              </div>
            </div>
            <div className="application__2ndWrapper1">
              <h1>APPLICANT INFORMATION</h1>
              <div className="application__applicationType">
                <p>
                  {" "}
                  <span> Applicant Type:-</span>
                  <span>{application.applicationType}</span>
                </p>
              </div>
              <div className="application__applicationDetail">
                <h3>
                  Application Name:- <span>{application.applicantName}</span>{" "}
                </h3>
                <div className="application__2ndwrapper2">
                  <h3>
                    Aadhaar Number:-{" "}
                    <span>{application.applicantAadharNumber}</span>
                    <button>
                      <a href={application.applicantAadharFile}>
                        <span>Click Here to Open File</span>
                      </a>{" "}
                    </button>{" "}
                  </h3>
                  <h3>
                    Pan Number:- <span>{application.applicant_PAN_Number}</span>
                    <button>
                      <a href={application.applicantPanFile}>
                        <span>Click Here to Open File</span>
                      </a>{" "}
                    </button>{" "}
                  </h3>
                </div>
                <h3>
                  Co Application Name:- <span>{application.applicantName}</span>{" "}
                </h3>
                <div className="application__2ndwrapper3">
                  <h3>
                    Co-Applicant Aadhaar Number:-{" "}
                    <span>{application.coApplicantAadharNumber}</span>
                    <button>
                      <a href={application.coApplicantAadharFile}>
                        <span>Click Here to Open File</span>
                      </a>{" "}
                    </button>{" "}
                  </h3>
                  <h3>
                    Co-Applicant Pan Number:-{" "}
                    <span>{application.coApplicant_PAN_Number}</span>
                    <button>
                      <a href={application.coApplicantPanFile}>
                        <span>Click Here to Open File</span>
                      </a>{" "}
                    </button>{" "}
                  </h3>
                </div>
                <div className="application__applicantAddress">
                  <h3>
                    Address <span>{application.applicantAddress}</span>
                    <button>
                      <a href={application.applicantAddressProofFile}>
                        <span> Click Here to Download Address Proof</span>{" "}
                      </a>
                    </button>{" "}
                  </h3>

                  <h4 className="application__applicantAddressh4">
                    <p>
                      City:- <span>{application.applicant_city}</span>
                    </p>{" "}
                    <p>
                      State:- <span>{application.applicant_state}</span>
                    </p>{" "}
                    <p>
                      Pin Code:- <span>{application.applicant_pin_code}</span>
                    </p>
                  </h4>
                  <h4 className="application__applicantAddressh4">
                    <p>
                      Date of Birth:-{" "}
                      <span>{application.applicant_dateOfBirth}</span>
                    </p>{" "}
                    <p>E Mail:- {application.applicant_email}</p>
                  </h4>
                  <h4 className="application__applicantAddressh4">
                    {" "}
                    <p>
                      Home Phone:- <span>{application.home_phone}</span>
                    </p>{" "}
                    <p>
                      Mobile Phone:- <span>{application.mobile_phone}</span>
                    </p>{" "}
                    <p>
                      Work Phone:- <span>{application.work_phone}</span>
                    </p>{" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className="application__distributorShippingAddress">
              <h1>DISTRIBUTOR SHIPPING ADDRESS</h1>
              <div className="application__distributorWrapper">
                <h3 className="application__applicantAddressh4">
                  Address:-{" "}
                  <span>{application.distributor_shipping_address}</span>{" "}
                </h3>
                <h3 className="application__applicantAddressh4">
                  {" "}
                  <p>
                    City:- <span>{application.distributorCity}</span>
                  </p>{" "}
                  <p>
                    State:- <span>{application.distributorState}</span>
                  </p>{" "}
                  <p>
                    Pin Code:- <span>{application.distributorPinCode}</span>
                  </p>
                </h3>
              </div>
            </div>
            <div className="application__EnrollerInfo">
              <h1>ENROLLER INFORMATION</h1>
              <h3 className="application__applicantAddressh4">
                {" "}
                Enroller Id:- <span>{application.enrollerid}</span>{" "}
                <p>
                  Name:- <span>{application.enrollername}</span>
                </p>
              </h3>
            </div>
            <div className="application__EnrollerInfo">
              <h1>SPONSOR INFORMATION</h1>
              <h3 className="application__applicantAddressh4">
                {" "}
                Enroller Id:- <span>{application.sponserId}</span>{" "}
                <p>
                  Name:- <span>{application.sponsername}</span>
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
