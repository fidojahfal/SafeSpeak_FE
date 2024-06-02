import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReportInput from "../components/reports/ReportInput";
import {
  asyncReceiveUpdateReportDetail,
  asyncUpdateReport,
} from "../states/updateReport/action";
import "../styles/report.css";
import moment from "moment";

function UpdateReportPage() {
  const { id: reportId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reportDetail = useSelector((state) => state.updateReport);

  console.log("Prop Received:", { reportDetail });

  useEffect(() => {
    dispatch(asyncReceiveUpdateReportDetail(reportId));
  }, [dispatch, reportId]);

  const onUpdateReport = ({
    title,
    type,
    place_report,
    date_report,
    description,
    evidence,
    is_anonim,
  }) => {
    const report = {
      id: reportId,
      title,
      type,
      place_report,
      date_report,
      description,
      evidence,
      is_anonim,
    };
    console.log("report:", { report });
    dispatch(asyncUpdateReport(report));
    navigate("/");
  };

  if (!reportDetail) {
    return <div>Loading...</div>;
  }

  const formattedDate = moment(reportDetail.date_report).format("YYYY-MM-DD");
  console.log("Date:", { formattedDate });
  return (
    <section className="bg-yellow-100 p-4 position-relative">
      <div className="row">
        <div className="col-lg-auto mx-2 mb-4 mt-1">
          <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
        </div>
        <div className="col-lg-11 card p-3">
          <div className="col-md-13">
            <div className="card-body">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateReportPage;
