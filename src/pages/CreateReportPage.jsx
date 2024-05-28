import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import ReportInput from "../components/reports/ReportInput";
// import { asyncCreateReport } from "../states/reports/action";

// Report Styling
import "../styles/report.css";

function CreateReportPage() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const onCreateReport = ({
  //   title,
  //   type,
  //   place_report,
  //   date_report,
  //   description,
  //   evidence,
  //   is_anonim,
  //   isEdit,
  // }) => {
  //   dispatch(
  //     asyncCreateReport({
  //       title,
  //       type,
  //       place_report,
  //       date_report,
  //       description,
  //       evidence,
  //       is_anonim,
  //       isEdit,
  //     })
  //   );
  //   navigate("/");
  // };

  return (
    <section className="bg-yellow-100 p-4 position-relative">
      <div className="row">
        <div className="col-lg-auto mx-2 mb-4 mt-1">
          <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
        </div>
        <div className="col-lg-11 card p-3">
          <div className="col-md-13">
            <div className="card-body">
              <ReportInput /> 
              {/* addReport={onCreateReport} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateReportPage;
