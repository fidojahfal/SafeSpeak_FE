import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncReceiveReportDetail,
  asyncUpdateReportStatus,
} from "../states/reportDetail/action";
import DetailReport from "../components/reports/DetailReport";
import "../styles/report.css";
import { asyncDeleteReport } from "../states/reports/action";
import GeneralCardDetailReport from "../components/shared/GeneralCardDetail";

function DetailReportPage() {
  const navigate = useNavigate();
  const { id: reportId } = useParams();
  const { reportDetail, authUser } = useSelector((states) => states);
  const [showReasonInput, setShowReasonInput] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (reportId) {
      dispatch(asyncReceiveReportDetail(reportId));
    }
  }, [reportId, dispatch]);

  const handleEditClick = () => {
    navigate(`/reports/${reportId}/update`);
  };

  const onDeleteHandler = () => {
    dispatch(asyncDeleteReport(reportId));
    navigate("/reports");
  };

  const onChangeStatusHandler = ({ status, reason }) => {
    dispatch(
      asyncUpdateReportStatus({
        id: reportId,
        status,
        reason,
      })
    );
    if (status !== 3) {
      setShowReasonInput(false);
    }
  };

  const onShowReasonInputHandler = () => {
    setShowReasonInput(true);
  };

  useEffect(() => {
    if (reportDetail && reportDetail.status === 3) {
      setShowReasonInput(true);
    } else {
      setShowReasonInput(false);
    }
  }, [reportDetail]);

  if (!reportDetail) {
    return null;
  }

  return (
    <GeneralCardDetailReport
      onDeleteHandler={onDeleteHandler}
      onChangeStatusHandler={onChangeStatusHandler}
      onShowReasonInputHandler={onShowReasonInputHandler}
      isDosen={authUser ? authUser.role === 1 : false}
      reportDetail={reportDetail}
      showReasonInput={showReasonInput}
    >
      <DetailReport
        {...reportDetail}
        isDosen={authUser ? authUser.role === 1 : false}
        handleEditClick={handleEditClick}
      />
    </GeneralCardDetailReport>
  );
}

export default DetailReportPage;
