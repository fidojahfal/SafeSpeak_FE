import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReportInput from "../components/reports/ReportInput";
import { asyncCreateReport } from "../states/reports/action";
import Alert from "../components/form/Alert";

// Report Styling
import "../styles/report.css";

function CreateReportPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateReport = async ({
    title,
    type,
    place_report,
    date_report,
    description,
    evidence,
    is_anonim,
  }) => {
    const success = await dispatch(
      asyncCreateReport({
        title,
        type,
        place_report,
        date_report,
        description,
        evidence,
        is_anonim,
      })
    );
    console.log(success);
    if (success) {
      navigate("/");
    }
  };

  return (
    <section className="bg-yellow-100 p-4">
      <div className="row">
        <div className="col-lg-auto mx-2 mb-4 mt-1">
          <Link onClick={() => navigate(-1)}>
            <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
          </Link>
        </div>
        <div className="col-lg-11">
          <Alert />
          <div className="col-lg card p-3">
            <div className="card-body">
              <ReportInput submitHandler={onCreateReport} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateReportPage;
