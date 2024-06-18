// UpdateReportPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReportInput from "../components/reports/ReportInput";
import {
  asyncReceiveUpdateReportDetail,
  asyncUpdateReport,
} from "../states/updateReport/action";
import "../styles/report.css";
import moment from "moment";
import GeneralCard from "../components/shared/GeneralCard";

function UpdateReportPage() {
  const { id: reportId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reportDetail = useSelector((state) => state.updateReport);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(asyncReceiveUpdateReportDetail(reportId));
  }, [dispatch, reportId]);

  const onUpdateReport = async (formData) => {
    setLoading(true); // set loading state to true
    const reportDetail = { id: reportId, ...formData };
    const updateSuccess = await dispatch(asyncUpdateReport(reportDetail));
    setLoading(false); // set loading state to false
    if (updateSuccess) {
      navigate(`/reports/${reportId}/detail`);
    }
  };

  if (!reportDetail) {
    return null;
  }

  const formattedDate = moment(reportDetail.date_report).format("YYYY-MM-DD");
  return (
    <GeneralCard>
      <ReportInput
        submitHandler={onUpdateReport}
        isEdit={true}
        title={reportDetail.title}
        type={reportDetail.type}
        place_report={reportDetail.place_report}
        date_report={formattedDate}
        description={reportDetail.description}
        evidence={reportDetail.evidence}
        is_anonim={reportDetail.is_anonim}
      />
      {loading} {/* Display loading indicator */}
    </GeneralCard>
  );
}

export default UpdateReportPage;
