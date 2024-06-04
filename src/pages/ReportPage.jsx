import React, { useEffect } from 'react';
import ReportList from '../components/reports/ReportList';
import '../styles/report.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveReports } from '../states/reports/action';

function ReportPage() {
  const { reports = [], authUser = null } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveReports());
  }, [dispatch]);

  function onCreateReportHandler() {
    navigate('/reports/create');
  }

  function onDetailReportHandler(report_id) {
    navigate(`/reports/${report_id}/detail`);
  }

  return (
    <section className="bg-yellow-100-report p-4 position-relative">
      <div className="card">
        <div className="card-body report-card">
          <ReportList
            onCreate={onCreateReportHandler}
            reports={reports}
            user={authUser}
            onDetail={onDetailReportHandler}
          />
        </div>
      </div>
    </section>
  );
}
export default ReportPage;
