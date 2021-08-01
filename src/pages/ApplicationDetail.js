import React from "react";
import { useParams } from "react-router-dom";
import "../style/applicationDetail.scss";
const ApplicationDetail = ({ applicationList }) => {
  const { id } = useParams();

  const applicationData = applicationList.filter(
    (application) => application.distributorId === id
  );
  {
    /* OldDistributorID: "1234rtasdfg"
accountNumber: "cvbnmq"
applicantAadharFile: "https://firebasestorage.googleapis.com/v0/b/four-life-application-form.appspot.com/o/applicant-aadhar%2F%20U5VTZ?alt=media&token=b008fb63-fcfc-4fd3-8169-a1accce77487"
applicantAadharNumber: "sgsgdsgdsg"
applicantAddress: "sdfgvhbfgnm"
applicantAddressProofFile: "https://firebasestorage.googleapis.com/v0/b/four-life-application-form.appspot.com/o/address-proof%2F%20Q6575?alt=media&token=1476a5f7-db64-4f36-a4ac-8c5e7dc8fb28"
applicantMobile: "8456464464"
applicantName: "dsgersgsgdsw"
applicantPanFile: "https://firebasestorage.googleapis.com/v0/b/four-life-application-form.appspot.com/o/applicant-PAN%2F%205AW5R?alt=media&token=3c084741-b6d8-40c4-842c-8a9b1cf9349f"
applicantSignatureFile: "https://firebasestorage.googleapis.com/v0/b/four-life-application-form.appspot.com/o/applicant-signature%2F%20G2UHK?alt=media&token=b55163cd-c471-44b8-8a97-a2d7e544a5e1"
applicantWorkPhone: "56446849489856"
applicant_PAN_Number: "dsgdsgdsgdsfg"
applicant_city: "sdfvbnm"
applicant_dateOfBirth: "2021-08-11"
applicant_email: "cvbnm"
applicant_home_phone: "zxcvbnm"
applicant_pincode: "dfvbgnm"
applicant_state: "sdfbghnm"
applicationType: "Company"
branchNameAddress: "dfghjmq"
cancelledChequeOrPassbookFile: ""
coApplicantAadharFile: "https://firebasestorage.googleapis.com/v0/b/four-life-application-form.appspot.com/o/co-applicant-aadhar%2F%206CGBX?alt=media&token=4945568f-2370-4f18-9e56-7b132915285b"
coApplicantAadharNumber: "dsgsdgdsgdsg"
coApplicantName: "dsgsdgdsgdsg"
coApplicantPanFile: "https://firebasestorage.googleapis.com/v0/b/four-life-application-form.appspot.com/o/co-applicant-PAN%2F%20W8O6K?alt=media&token=33faeb9b-a245-4d89-baac-6563cd37269d"
coApplicantSignatureFile: ""
coApplicant_PAN_Number: "dsgsdgsgsgdsg"
distributorCity: "dfghnm"
distributorId: " XM8E78HNNK"
distributorPinCode: "sdfgn"
distributorState: "dfvbn"
distributor_shipping_address: "cdvbnm,"
enrollerName: "dfgbnm"
enrollerid: "dfghnm"
fssai_registration_Number: "ASZDXFCDS3454235234"
fssai_registration_check: "yes"
held_DistributorID: "yes"
ifscCode: "fghdfgh"
name_of_bank: "dfghq"
profileImage: "https://firebasestorage.googleapis.com/v0/b/four-life-application-form.appspot.com/o/profile-images%2F%20ZYBTF?alt=media&token=e0e1050f-fdc2-44e6-abbb-afe66a24b349"
sponserId: "dfvgbn"
*/
  }
  return (
    <>
      {applicationData.map((application) => {
        return (
          <div className="application">
            <div className="application__first">
              {/*            <div>
</div> */}
              <div
                className="application__firstWrapper1"
                key={application.distributorId}
              >
                <h1>{application.distributorId}</h1>
                <h1> Date</h1>
                <img
                  className="application__img"
                  src={application.profileImage}
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
