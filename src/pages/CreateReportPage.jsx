import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReportInput from "../components/reports/ReportInput";
import { asyncCreateReport } from "../states/reports/action";
import GeneralCard from "../components/shared/GeneralCard";

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
      navigate("/reports");
    }
  };

  return (
    <GeneralCard>
      <ReportInput submitHandler={onCreateReport} />
    </GeneralCard>
  );
}

export default CreateReportPage;
